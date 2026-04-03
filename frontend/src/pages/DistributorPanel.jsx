import React, { useState } from 'react';
import { Truck, Package, Activity, AlertTriangle, ArrowUpRight, ArrowDownRight, RefreshCcw, MapPin, BarChart2, ShieldAlert } from 'lucide-react';
import { MOCK_DISTRIBUTORS, MOCK_REGIONS } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';

const DistributorPanel = () => {
  const regions = ["Mumbai", "Delhi", "Chennai", "Kolkata"];
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');
  
  // Dynamic State for the Distributor Metrics
  const [stock, setStock] = useState(450);
  const [todayDeliveries, setTodayDeliveries] = useState(128);
  const [pendingOrders, setPendingOrders] = useState(45);
  const [inProgress, setInProgress] = useState(12);
  const [delays, setDelays] = useState(3);
  const [supplyReceived, setSupplyReceived] = useState(600);
  
  // Interactive inputs
  const [formValues, setFormValues] = useState({ stockInput: '', deliveryInput: '', pendingInput: '', delayInput: '' });

  const handleUpdateMetrics = () => {
    if (formValues.stockInput) setStock(parseInt(formValues.stockInput));
    if (formValues.deliveryInput) setTodayDeliveries(parseInt(formValues.deliveryInput));
    if (formValues.pendingInput) setPendingOrders(parseInt(formValues.pendingInput));
    if (formValues.delayInput) setDelays(parseInt(formValues.delayInput));
    
    setFormValues({ stockInput: '', deliveryInput: '', pendingInput: '', delayInput: '' });
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    setStock(Math.floor(Math.random() * 500) + 100);
    setTodayDeliveries(Math.floor(Math.random() * 200) + 50);
    setPendingOrders(Math.floor(Math.random() * 100));
    setDelays(Math.floor(Math.random() * 10));
  };

  // Prepare chart data using MOCK_REGIONS
  const cityDemandData = MOCK_REGIONS.map(r => ({
    city: r.name,
    Current: r.current_demand,
    Average: r.avg_demand
  })).slice(0, 4);

  return (
    <div className="flex-col gap-8 p-8 max-w-7xl mx-auto" style={{ height: 'calc(100vh - 80px)', overflowY: 'auto', backgroundColor: '#f8fafc' }}>
      
      {/* Header & Location Selector */}
      <div className="flex-row justify-between bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex-col gap-1">
          <h2 className="text-primary m-0 flex-row gap-3 text-3xl font-black tracking-tight"><Truck className="text-blue" size={32}/> Operations Hub</h2>
          <span className="text-gray-500 font-bold uppercase text-[11px] tracking-widest pl-11">National Freight Tracking System</span>
        </div>
        
        <div className="flex-row gap-4">
           <div className="flex-row gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 shadow-inner group">
             <MapPin size={24} className="text-saffron group-hover:animate-bounce" />
             <select 
               value={selectedLocation} 
               onChange={handleLocationChange}
               className="bg-transparent text-primary focus:outline-none font-black text-lg cursor-pointer"
             >
               {regions.map(r => (
                  <option key={r} value={r}>{r} Jurisdiction</option>
               ))}
             </select>
           </div>
           
           <button className="btn btn-secondary flex-row gap-2 px-6 shadow-md" style={{ borderRadius: '0.75rem' }} onClick={() => alert('Syncing node with central database...')}>
             <RefreshCcw size={18}/> Push Sync
           </button>
        </div>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 3fr)' }}>
        
        {/* Core Control Dashboard (Spans 2 columns visually) */}
        <div className="glass-card flex-col gap-6 bg-white border-gray-200" style={{ padding: '2rem' }}>
          
          <div className="flex-row justify-between items-center border-b border-gray-100 pb-4 mb-2">
            <h3 className="m-0 text-primary font-black text-xl">Real-Time Transit Matrix</h3>
            <span className="bg-green bg-opacity-10 text-green font-bold text-xs uppercase px-3 py-1 rounded border border-green border-opacity-20 animate-pulse">Monitoring Active</span>
          </div>
          
          <div className="grid-grid-4 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
             <div className="bg-white p-5 rounded-xl border-l-4 shadow-sm border-gray-200 hover:shadow-md transition" style={{ borderLeftColor: 'var(--brand-primary)' }}>
                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1 block">Facility Stock</span>
                <h2 className="m-0 text-blue font-black text-4xl">{stock} <span className="text-lg opacity-50">MT</span></h2>
             </div>
             <div className="bg-white p-5 rounded-xl border-l-4 shadow-sm border-gray-200 hover:shadow-md transition" style={{ borderLeftColor: 'var(--brand-green)' }}>
                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1 block">Cleared Dropoffs</span>
                <h2 className="m-0 text-green font-black text-4xl">{todayDeliveries}</h2>
             </div>
             <div className="bg-white p-5 rounded-xl border-l-4 shadow-sm border-gray-200 hover:shadow-md transition" style={{ borderLeftColor: '#475569' }}>
                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1 block">Pending Queue</span>
                <h2 className="m-0 text-gray-700 font-black text-4xl">{pendingOrders}</h2>
             </div>
             <div className="bg-white p-5 rounded-xl border-l-4 shadow-sm border-gray-200 hover:shadow-md transition" style={{ borderLeftColor: 'var(--status-red)' }}>
                <span className="text-[10px] text-red font-bold tracking-widest uppercase mb-1 block">Traffic Delays</span>
                <h2 className="m-0 text-red font-black text-4xl">{delays} / <span className="text-lg opacity-50">{inProgress} RUN</span></h2>
             </div>
          </div>

          <div className="flex-col gap-5 mt-4 bg-gray-50 px-6 py-6 rounded-2xl border border-gray-200 shadow-inner">
            <h4 className="m-0 text-primary font-black uppercase text-xs tracking-wider flex-row gap-2"><Activity size={14} className="text-saffron"/> Base Manual Override Parameters</h4>
            <div className="grid-4 gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
               <div>
                  <input type="number" placeholder="Stock Level..." className="input-field py-3 text-sm font-bold shadow-sm" value={formValues.stockInput} onChange={e => setFormValues({...formValues, stockInput: e.target.value})} />
               </div>
               <div>
                  <input type="number" placeholder="New Deliveries..." className="input-field py-3 text-sm font-bold shadow-sm" value={formValues.deliveryInput} onChange={e => setFormValues({...formValues, deliveryInput: e.target.value})} />
               </div>
               <div>
                  <input type="number" placeholder="Adjust Pending..." className="input-field py-3 text-sm font-bold shadow-sm" value={formValues.pendingInput} onChange={e => setFormValues({...formValues, pendingInput: e.target.value})} />
               </div>
               <div>
                  <div className="flex-row gap-2">
                     <input type="number" placeholder="Delays..." className="input-field py-3 text-sm font-bold shadow-sm w-full" value={formValues.delayInput} onChange={e => setFormValues({...formValues, delayInput: e.target.value})} />
                     <button className="btn btn-primary" style={{ padding: '0.75rem 1.25rem' }} onClick={handleUpdateMetrics}>Sync</button>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Action & Demand Panel (Right Col) */}
        <div className="flex-col gap-6">
           <div className="glass-card flex-col gap-4 bg-white border-gray-200 shadow-sm overflow-hidden" style={{ padding: 0 }}>
             <div className="bg-gray-50 border-b border-gray-200 p-4">
                 <h3 className="m-0 text-primary font-black text-sm uppercase tracking-wide flex-row gap-2"><BarChart2 className="text-saffron" size={18}/> Inter-State Drawdown</h3>
             </div>
             
             <div style={{ width: '100%', height: '230px', padding: '1rem', paddingTop: 0 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cityDemandData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="city" stroke="#94a3b8" fontSize={11} fontWeight="bold" axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={11} fontWeight="bold" axisLine={false} tickLine={false} />
                    <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', fontWeight: 'bold', bottom: -5 }} />
                    <Bar dataKey="Current" fill="#ea580c" radius={[6, 6, 0, 0]} maxBarSize={30} />
                    <Bar dataKey="Average" fill="#3b82f6" radius={[6, 6, 0, 0]} maxBarSize={30} />
                  </BarChart>
                </ResponsiveContainer>
             </div>
           </div>

           <div className="glass-card bg-red bg-opacity-[0.03] border-red shadow-sm overflow-hidden p-6 hover:shadow-md transition">
             <div className="flex-row justify-between w-full align-center mb-2">
                 <h4 className="font-black text-red text-sm m-0 uppercase tracking-wide">Demand Spike Detected </h4>
                 <ArrowUpRight size={20} className="text-red p-1 bg-red bg-opacity-20 rounded-full"/>
             </div>
             <p className="text-sm text-gray-700 font-bold m-0 leading-relaxed border-l-4 pl-3" style={{ borderColor: 'var(--status-red)' }}>Region <span className="text-red">{selectedLocation}</span> is logging a 42% volume spike. Initiating priority re-allocation rules automatically.</p>
           </div>
        </div>
      </div>

      {/* Global Supply Monitoring (Black marketing alert demo) */}
      <h3 className="mt-8 mb-2 flex-row gap-3 font-black text-primary text-2xl uppercase tracking-tight pl-2">
         <ShieldAlert className="text-red pulse-alert" size={32}/> 
         Federal Peer-Monitoring Audit Ledger
      </h3>
      <div className="glass-card p-0 bg-white border border-gray-300 shadow-lg overflow-hidden rounded-2xl">
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr className="bg-slate-100 border-b-2 border-slate-300 text-[11px] uppercase tracking-widest text-slate-500 font-black">
              <th className="p-5">Distributor Registration</th>
              <th className="p-5">Govt Allocated Supply</th>
              <th className="p-5">Verified Drops</th>
              <th className="p-5">Warehouse Stock</th>
              <th className="p-5 text-right">System Audit Resolution</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-slate-50 transition">
               <td className="p-5 font-black text-primary text-lg">Local Hub ({selectedLocation})</td>
               <td className="p-5 font-black text-green text-lg">{supplyReceived} <span className="text-xs text-gray-400">MT</span></td>
               <td className="p-5 font-black text-gray-700 text-lg">{todayDeliveries} <span className="text-xs text-gray-400">UNITS</span></td>
               <td className="p-5 font-black text-blue text-lg">{stock} <span className="text-xs text-gray-400">MT</span></td>
               <td className="p-5 text-right">
                  <span className="text-green bg-green bg-opacity-10 border border-green px-4 py-2 rounded-lg font-black tracking-wide text-xs">NOMINAL MATCH ✅</span>
               </td>
            </tr>
            <tr className="bg-red bg-opacity-10 border-l-8 border-red shadow-inner">
               <td className="p-5 font-black text-red text-lg">Rogue Sub-Distributor B</td>
               <td className="p-5 font-black text-gray-700 text-lg">200 <span className="text-xs text-red opacity-80">MT LOGGED</span></td>
               <td className="p-5 font-black text-gray-700 text-lg">20 <span className="text-xs text-red opacity-80">UNITS</span></td>
               <td className="p-5 font-black text-red text-lg">0 <span className="text-xs opacity-80">EMPTY!</span></td>
               <td className="p-5 text-right">
                  <div className="flex-col align-end gap-1">
                     <span className="text-white bg-red border border-red-800 px-4 py-2 rounded-lg font-black tracking-wider text-sm shadow-md pulse-alert" style={{ background: '#b91c1c' }}>DIVERSION DETECTED: 180 UNITS MISSING 🚨</span>
                     <span className="text-[10px] text-red font-bold uppercase tracking-widest">Nodal Action Enforced</span>
                  </div>
               </td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-slate-50 transition opacity-80">
               <td className="p-5 font-black text-primary text-lg">Cross-State Supplier C</td>
               <td className="p-5 font-black text-green text-lg">400 <span className="text-xs text-gray-400">MT</span></td>
               <td className="p-5 font-black text-gray-700 text-lg">350 <span className="text-xs text-gray-400">UNITS</span></td>
               <td className="p-5 font-black text-blue text-lg">50 <span className="text-xs text-gray-400">MT</span></td>
               <td className="p-5 text-right">
                  <span className="text-green bg-green bg-opacity-10 border border-green px-4 py-2 rounded-lg font-black tracking-wide text-xs">NOMINAL MATCH ✅</span>
               </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DistributorPanel;
