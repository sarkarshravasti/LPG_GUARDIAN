import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { AlertCircle, AlertTriangle, ShieldAlert, Activity, Users, MapPin, Search, CheckCircle, X, ExternalLink } from 'lucide-react';
import { MapContainer, TileLayer, CircleMarker, Tooltip as LeafletTooltip } from 'react-leaflet';
import { MOCK_REGIONS, MOCK_ALERTS, DEMAND_CURVE_DATA, MOCK_DISTRIBUTORS } from '../data/mockData';
import 'leaflet/dist/leaflet.css';

const GovDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState(MOCK_REGIONS.find(r => r.name === 'Chennai'));
  const [alerts, setAlerts] = useState(MOCK_ALERTS);
  const [showDistributorModal, setShowDistributorModal] = useState(false);
  const [selectedLocalDist, setSelectedLocalDist] = useState('');

  // Updated purely contrasting risk colors for bright backgrounds
  const getRiskColorParams = (risk) => {
    switch(risk) {
      case 'RED': return { color: '#dc2626', css: 'text-white bg-red', stroke: '#991b1b' };
      case 'YELLOW': return { color: '#d97706', css: 'text-yellow bg-yellow', stroke: '#92400e' };
      default: return { color: '#16a34a', css: 'text-white bg-green', stroke: '#14532d' };
    }
  };

  const handleAlertAction = (id, action) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, resolved: true, actionTaken: action } : a));
  };

  const criticalRegionsCount = MOCK_REGIONS.filter(r => r.risk === 'RED').length;
  const warningsCount = MOCK_REGIONS.filter(r => r.risk === 'YELLOW').length;

  return (
    <div className="flex-col gap-6 p-8" style={{ height: 'calc(100vh - 80px)', overflowY: 'auto', backgroundColor: '#f8fafc' }}>
      
      {/* Key Metrics Panel */}
      <div className="grid-4">
        <div className="glass-card flex-col gap-2 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition">
          <div className="flex-row justify-between text-muted border-b border-gray-100 pb-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Regions at Risk</span>
            <AlertTriangle className="text-red pulse-alert" size={18} />
          </div>
          <h2 className="text-red text-3xl font-black">{criticalRegionsCount} Critical</h2>
          <span className="text-xs font-bold text-gray-500">{warningsCount} Warning Zones detected</span>
        </div>
        
        <div className="glass-card flex-col gap-2 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition">
          <div className="flex-row justify-between text-muted border-b border-gray-100 pb-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">National Average Delay</span>
            <Activity className="text-yellow" size={18} />
          </div>
          <h2 className="text-yellow text-3xl font-black">2.3 Days</h2>
          <span className="text-xs font-bold text-gray-500">+0.5 days delayed than last week</span>
        </div>
        
        <div className="glass-card flex-col gap-2 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition">
          <div className="flex-row justify-between text-muted border-b border-gray-100 pb-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Suspicious Activities</span>
            <ShieldAlert className="text-saffron" size={18} />
          </div>
          <h2 className="text-saffron text-3xl font-black">{alerts.filter(a => a.type==='FRAUD' && !a.resolved).length} Flags</h2>
          <span className="text-xs font-bold text-saffron bg-orange bg-opacity-10 p-1 rounded inline-block w-max mt-1">Nodal review requested</span>
        </div>

        <div className="glass-card flex-col gap-2 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition border-blue justify-between" style={{ borderLeft: '4px solid var(--status-blue)' }}>
          <div className="flex-col gap-1">
            <div className="flex-row justify-between text-muted pb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue">Active Distributors</span>
                <Users className="text-blue" size={18} />
            </div>
            <h2 className="text-primary text-3xl font-black">1,204 Hubs</h2>
          </div>
          <button onClick={() => setShowDistributorModal(true)} className="btn bg-blue text-white w-full rounded-md py-2 mt-2 text-sm shadow-sm flex-row gap-2 justify-center hover:bg-blue-600 transition">
            <ExternalLink size={14}/> View Distrubutor Network
          </button>
        </div>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
        
        {/* Left Column (Map & Charts) */}
        <div className="flex-col gap-6">
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '480px', padding: 0, overflow: 'hidden' }}>
             
             {/* Map Header */}
             <div className="flex-row justify-between p-4 pb-3 bg-white border-b border-gray-200 z-10">
                <h3 className="flex-row gap-2 m-0 text-primary font-black"><MapPin size={24} className="text-saffron"/> Pan-India Crisis Mapper</h3>
                <span className="text-sm font-bold flex-row gap-2 bg-red text-red border border-red px-3 py-1 rounded-full"><div style={{ width: '8px', height: '8px', borderRadius:'50%', background:'var(--status-red)' }}></div> Regions &lt; 2 Days Stock</span>
             </div>
             
             <div className="flex-row bg-white" style={{ flex: 1, position: 'relative' }}>
                 {/* Leaflet Container representing India (Light Mode Positron TileLayer) */}
                 <div style={{ flex: 1, backgroundColor: '#f1f5f9', position: 'relative', height: '420px', borderRight: '1px solid #e2e8f0' }}>
                    <MapContainer center={[22.5937, 78.9629]} zoom={4.5} style={{ height: '420px', width: '100%', zIndex: 1 }} zoomControl={false}>
                      <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; OpenStreetMap'
                      />
                      {MOCK_REGIONS.map(region => {
                         const style = getRiskColorParams(region.risk);
                         return (
                           <CircleMarker 
                             key={region.id}
                             center={[region.lat, region.lng]}
                             radius={selectedRegion.id === region.id ? 14 : 8}
                             pathOptions={{ fillColor: style.color, color: style.stroke, opacity: 1, fillOpacity: 0.9, weight: selectedRegion.id === region.id ? 3 : 1 }}
                             eventHandlers={{ click: () => setSelectedRegion(region) }}
                           >
                             <LeafletTooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                               {region.name} - {region.risk} Risk Status
                             </LeafletTooltip>
                           </CircleMarker>
                         )
                      })}
                    </MapContainer>
                 </div>

                 {/* Selected Region Detailed Sandbox */}
                 <div className="flex-col p-6 bg-white z-10" style={{ width: '320px', height: '420px', overflowY: 'auto' }}>
                    <h2 className="mb-4 font-black flex-row justify-between align-start text-primary border-b border-gray-200 pb-4">
                       {selectedRegion.name} Node
                       <span className={`text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-wider shadow-sm border ${getRiskColorParams(selectedRegion.risk).css}`}>
                          Status: {selectedRegion.risk}
                       </span>
                    </h2>

                    <div className="flex-col gap-4">
                       <div className="flex-col gap-1 p-3 rounded-lg border border-gray-200 bg-gray-50 shadow-inner">
                         <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wide text-center">Predicted Shortage Timeline</span>
                         <h1 className={`text-center m-0 mt-2 font-black text-4xl ${selectedRegion.risk === 'RED' ? 'text-red pulse-alert px-4 py-2 rounded-xl bg-red border border-red mx-auto shadow-sm' : 'text-green mx-auto'}`}>
                           {selectedRegion.days_to_shortage} <span className="text-xl">Days</span>
                         </h1>
                       </div>

                       <div className="flex-col gap-2 mt-2 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                         <span className="text-[10px] text-gray-500 uppercase font-black tracking-wide flex-row justify-between"><span>Nominal Supply</span> <span className="text-saffron">Open Orders</span></span>
                         <div className="flex-row justify-between font-black text-xl text-primary mt-1">
                           <span className="text-blue">{selectedRegion.supply} MT</span>
                           <span className={selectedRegion.current_demand > selectedRegion.supply ? 'text-red' : ''}>{selectedRegion.current_demand} MT</span>
                         </div>
                         <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginTop: '8px' }}>
                           <div style={{ width: `${Math.min((selectedRegion.supply / selectedRegion.current_demand) * 100, 100)}%`, height: '100%', background: selectedRegion.supply < selectedRegion.current_demand ? 'var(--status-red)' : 'var(--brand-green)' }}></div>
                         </div>
                       </div>

                       <div className="mt-auto flex-col gap-2 pt-4">
                         
                         {/* Local Distributor Selection Feature */}
                         <div className="flex-col gap-1 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Query Regional Hubs</span>
                            <select 
                               className="input-field py-2 text-xs font-bold bg-slate-50 focus:bg-white" 
                               value={selectedLocalDist}
                               onChange={e => setSelectedLocalDist(e.target.value)}
                            >
                               <option value="">-- Active Distributors ({selectedRegion.name}) --</option>
                               {MOCK_DISTRIBUTORS.filter(d => d.region === selectedRegion.name).map(dist => (
                                  <option key={dist.id} value={dist.id}>{dist.name} (Stock: {dist.stock} MT)</option>
                               ))}
                            </select>
                            {selectedLocalDist && (
                               <div className="bg-blue bg-opacity-10 border border-blue px-2 py-1 rounded text-[10px] text-blue font-bold mt-1">
                                 Pinged selected hub via Grid Protocol. Status: Connected.
                               </div>
                            )}
                         </div>

                         {selectedRegion.risk === 'RED' ? (
                            <>
                              <button className="btn w-full py-3 shadow-md border-b-4 font-black uppercase tracking-wider text-sm" style={{ backgroundColor: '#dc2626', color: 'white', borderColor: '#991b1b' }}>Auto-Dispatch Reserves</button>
                            </>
                         ) : (
                            <button className="btn w-full bg-gray-100 text-gray-500 font-bold border border-gray-300">Logistics Nominal - Monitor Mode</button>
                         )}
                       </div>
                    </div>
                 </div>
             </div>
          </div>

          <div className="glass-card p-6" style={{ height: '300px' }}>
             <h3 className="mb-6 font-black text-primary flex-row justify-between align-center border-b border-gray-100 pb-3">
                National Demand Projection Curve
                <span className="text-xs font-bold text-green flex-row gap-2 bg-green px-2 py-1 rounded-md border border-green shadow-sm"><Activity size={12}/> LIVE FEED ACTIVE</span>
             </h3>
             <ResponsiveContainer width="100%" height="75%">
                <AreaChart data={DEMAND_CURVE_DATA}>
                  <defs>
                    <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ea580c" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ea580c" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#15803d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#15803d" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} />
                  <RechartsTooltip cursor={{ stroke: '#cbd5e1' }} contentStyle={{ backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 'bold', color: '#0f172a' }} />
                  <Area type="monotone" dataKey="demand" stroke="#ea580c" strokeWidth={4} fillOpacity={1} fill="url(#colorDemand)" />
                  <Area type="monotone" dataKey="supply" stroke="#15803d" strokeWidth={4} fillOpacity={1} fill="url(#colorSupply)" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column (Alerts) */}
        <div className="glass-card flex-col gap-4 relative overflow-hidden bg-white p-0">
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--brand-saffron), var(--brand-white), var(--brand-green))' }}></div>

          <div className="flex-row justify-between align-center p-5 pb-4 border-b border-gray-200 shadow-sm z-10 bg-white">
            <h3 className="flex-row gap-2 text-red m-0 font-black"><AlertCircle size={24} className="pulse-alert" /> Critical Event Logs</h3>
            <span className="text-xs font-black bg-red text-red shadow-sm px-3 py-1 border border-red" style={{ borderRadius: '12px' }}>{alerts.filter(a => !a.resolved).length} Pending</span>
          </div>
          
          <div className="flex-col gap-4 overflow-y-auto px-5 pb-5 pt-2" style={{ maxHeight: '650px' }}>
            {alerts.filter(a => !a.resolved).length === 0 && <div className="text-center font-bold text-gray-500 mt-10 bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">All alerts resolved. System operating strictly nominally.</div>}

            {alerts.map(alert => (
              !alert.resolved ? (
                <div key={alert.id} className="flex-col gap-3 bg-white hover:bg-slate-50 transition border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                  
                  {/* Alert Header Ribbon */}
                  <div className={`w-full px-4 py-2 font-bold text-[10px] uppercase tracking-wider text-white flex-row justify-between ${alert.type === 'CRITICAL' ? 'bg-red border-b border-red-300 text-red-900' : alert.type === 'WARNING' ? 'bg-yellow text-yellow-900 border-b border-yellow-300' : 'bg-blue border-b border-blue-300'}`}>
                    <span>{alert.type} PRIORITY LOG</span>
                    <span>{alert.time}</span>
                  </div>

                  <div className="p-4 pt-1 flex-col gap-2">
                    <span className="font-black text-primary text-md">{alert.region} Central Node</span>
                    <p className="text-sm m-0 font-bold text-gray-600 border-l-2 pl-3" style={{ borderColor: alert.type === 'CRITICAL' ? 'var(--status-red)' : 'var(--status-yellow)' }}>{alert.message}</p>
                    
                    {alert.type === 'FRAUD' && (
                      <div className="flex-row gap-3 mt-3">
                         <button onClick={() => handleAlertAction(alert.id, 'BLOCKED')} className="btn flex-1 py-1.5 font-bold shadow-sm" style={{ background: '#ef4444', color: 'white', fontSize: '0.75rem', border: '1px solid #b91c1c' }}>Block Suspect Record</button>
                         <button onClick={() => handleAlertAction(alert.id, 'IGNORED')} className="btn flex-1 py-1.5 font-bold bg-white text-gray-600 border border-gray-300 shadow-sm hover:bg-gray-100" style={{ fontSize: '0.75rem' }}>Review & Ignore</button>
                      </div>
                    )}
                     {alert.type === 'CRITICAL' && (
                      <div className="flex-row gap-3 mt-3">
                         <button onClick={() => handleAlertAction(alert.id, 'ROUTED')} className="btn flex-1 py-1.5 font-bold shadow-md text-white text-xs" style={{ backgroundColor: '#dc2626', border: '1px solid #991b1b' }}>Auto-Coordinate Rerouting</button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div key={alert.id} className="flex-row gap-3 bg-green p-3 rounded-lg border border-green items-center">
                   <div className="bg-white p-1 rounded-full text-green"><CheckCircle size={16}/></div>
                   <div className="flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-600 tracking-wider">Log #{alert.id} Resolved</span>
                      <span className="font-black text-primary text-xs">Action Confirmed: {alert.actionTaken}</span>
                   </div>
                </div>
              )
            ))}
          </div>
        </div>

      </div>

      {/* OVERLAY: ACTIVE DISTRIBUTORS */}
      {showDistributorModal && (
        <div className="fixed inset-0 flex-col items-center justify-center z-[100] p-6" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(6px)' }}>
          <div className="bg-white w-full flex-col p-8 rounded-3xl relative shadow-2xl border border-gray-200" style={{ maxWidth: '900px', maxHeight: '85vh', overflowY: 'auto', margin: 'auto' }}>
             
             <button onClick={() => setShowDistributorModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-primary transition p-2 bg-gray-50 border border-gray-200 rounded-full shadow-sm"><X size={24}/></button>
             
             <div className="flex-col gap-2 mb-6 border-b border-gray-200 pb-6">
                <h2 className="flex-row gap-3 font-black text-primary m-0"><Users className="text-blue" size={28} /> Certified National Hub Verification Ledger</h2>
                <span className="text-secondary font-bold text-sm">Real-time status tracking for all physical node locations mapped by Aadhaar KYC rules.</span>
             </div>
             
             <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm hidden-scrollbar">
               <table className="w-full text-left border-collapse" style={{ fontSize: '0.95rem' }}>
                  <thead>
                     <tr className="bg-slate-100 text-gray-600 uppercase tracking-wider text-[11px] font-black border-b border-gray-200">
                        <th className="p-4">Entity Identification Name</th>
                        <th className="p-4">Geographic Routing</th>
                        <th className="p-4">Nominal Stock Load</th>
                        <th className="p-4">Operational Status</th>
                        <th className="p-4 text-right">Last Sync Event</th>
                     </tr>
                  </thead>
                  <tbody>
                     {MOCK_DISTRIBUTORS.map(dist => (
                        <tr key={dist.id} className="border-b border-gray-100 hover:bg-slate-50 transition">
                           <td className="p-4 font-black text-primary border-r border-gray-100">{dist.name}</td>
                           <td className="p-4 text-gray-600 font-bold border-r border-gray-100"><MapPin size={12} className="inline mr-1 text-saffron"/> {dist.region} Vector</td>
                           <td className="p-4 font-black text-blue border-r border-gray-100">{dist.stock} Metric Tons</td>
                           <td className="p-4">
                             {dist.status === 'HIGH' && <span className="text-green font-black flex-row gap-2"><CheckCircle size={14}/> Stable Flow</span>}
                             {dist.status === 'LOW' && <span className="text-yellow font-black flex-row gap-2"><Activity size={14}/> Depleting Queue</span>}
                             {dist.status === 'OUT' && <span className="text-red font-black flex-row gap-2"><AlertTriangle size={14}/> Empty Node</span>}
                           </td>
                           <td className="p-4 text-right text-gray-400 font-bold text-xs uppercase">1min Ago</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
             </div>
             
             <div className="mt-6 flex-row justify-end text-xs font-bold text-gray-400 uppercase tracking-wider">
               Export National Ledger (CSV) &rarr;
             </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GovDashboard;
