import React from 'react';
import { Activity, ShieldAlert, FileSearch, Hash, Zap, Navigation } from 'lucide-react';
import { MOCK_USER_ABUSE, MOCK_REGIONS } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { MapContainer, TileLayer, CircleMarker, Polyline, Tooltip as LeafletTooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FraudDetection = () => {
  // Area-level Spike Detection Data
  const spikeData = MOCK_REGIONS.map(r => ({
    name: r.name,
    avg: r.avg_demand,
    current: r.current_demand,
    isSpike: r.current_demand > r.avg_demand * 1.5 
  }));

  // Simulating a diverted black market route across two states
  const divertedRouteCoordinates = [
    [13.0827, 80.2707], // Source: Chennai Distributor
    [15.5000, 79.0000], // Checkpoint 1
    [17.3850, 78.4867], // Diverted illegally to Hyderabad
  ];

  return (
    <div className="flex-col gap-8 p-6" style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
      
      <div className="flex-row gap-4 align-center border-b pb-4" style={{ borderColor: 'var(--brand-saffron)' }}>
        <ShieldAlert size={36} className="text-saffron pulse-alert" />
        <div className="flex-col">
          <h2 className="text-saffron m-0">LPG AI Guardian Engine (V2 - Hackathon Edition)</h2>
          <span className="text-muted text-sm tracking-wide">Proactive Saffron-Net Black Market Trapping AI</span>
        </div>
      </div>

      <div className="grid-2">
        
        {/* Geographic Black Market Tracking Visual */}
        <div className="glass-panel flex-col gap-4 p-0" style={{ gridColumn: 'span 2', minHeight: '350px' }}>
             
             <div className="flex-row justify-between p-4 pb-2" style={{ zIndex: 10, background: 'rgba(12, 17, 28, 0.9)' }}>
                <h3 className="flex-row gap-2 m-0 font-bold" style={{ color: '#fde047' }}><Navigation size={20} className="text-saffron"/> Active Satellite Tracker</h3>
                <span className="text-xs bg-red text-red px-2 py-1 rounded-md font-bold pulse-alert border-red">1 ANOMALY DETECTED IN LOGISTICS</span>
             </div>

             <div className="flex-row" style={{ flex: 1, position: 'relative' }}>
                 <div style={{ flex: 1, backgroundColor: '#0f172a' }}>
                    <MapContainer center={[15.2, 79.5]} zoom={6} style={{ height: '350px', width: '100%', zIndex: 1 }} zoomControl={false} scrollWheelZoom={false}>
                      {/* Satellite Tile Layer */}
                      <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                      />
                      
                      {/* Diverted Path Polyline */}
                      <Polyline positions={divertedRouteCoordinates} color="#ef4444" weight={3} dashArray="5, 10" className="animated-route" />
                      
                      {/* Source Point Hub */}
                      <CircleMarker center={divertedRouteCoordinates[0]} radius={8} pathOptions={{ fillColor: '#3b82f6', color: '#3b82f6', fillOpacity: 0.8 }}>
                         <LeafletTooltip direction="right" permanent>Origin Hub (Chennai) - Auth</LeafletTooltip>
                      </CircleMarker>
                      
                      {/* Anomaly Destination Point */}
                      <CircleMarker center={divertedRouteCoordinates[2]} radius={12} pathOptions={{ fillColor: '#ef4444', color: '#ff0000', fillOpacity: 0.8 }} className="pulse-alert">
                         <LeafletTooltip direction="left" permanent>Illegal Dropoff Detected 🚨</LeafletTooltip>
                      </CircleMarker>
                    </MapContainer>
                 </div>
                 
                 {/* Sidebar Tracker Logs */}
                 <div className="p-4 flex-col gap-2" style={{ width: '320px', background: 'rgba(12, 17, 28, 0.95)', borderLeft: '1px solid var(--border-color)', position: 'absolute', top: 0, right: 0, bottom: 0, zIndex: 10 }}>
                     <h3 className="text-sm font-bold m-0 border-b pb-2 border-color" style={{ color: 'white' }}>Consignment Trace #4992</h3>
                     <span className="text-xs mb-2 font-semibold" style={{ color: '#ffffff', lineHeight: '1.6' }}>Truck GPS diverges from internal billing node. Expected Endpoint: Chennai Zone 4. Current Pathing: Interstate Highway NH16.</span>
                     
                     <div className="bg-red bg-opacity-20 border border-status-red p-2 rounded mt-2">
                        <span className="text-xs font-bold text-red m-0">Suspect Diverted Units: 200 MT</span>
                     </div>
                     <span className="text-xs mt-2 font-bold" style={{ color: '#ffffff' }}>Recommended Action: Suspend Distributor License ID-422</span>
                 </div>
             </div>
        </div>

        {/* Abnormal Booking Detection */}
        <div className="glass-panel flex-col gap-4">
          <h3 className="flex-row gap-2 font-bold m-0 text-brand-green"><Activity size={18}/> Consumer Spike Matrix</h3>
          <p className="text-xs text-muted mb-2">Rule Algorithm: if (bookings &gt; threshold_limit) AND (time_gap &lt; min_days) &rarr; Flag suspicious user</p>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
              <thead>
                <tr className="text-muted border-b border-color">
                  <th className="p-2">User ID (KYC)</th>
                  <th className="p-2">Bookings/Wk</th>
                  <th className="p-2 text-right">Aadhaar Vault Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_USER_ABUSE.map((user, idx) => (
                  <tr key={idx} className={user.limit_exceeded ? 'bg-red bg-opacity-20' : ''}>
                    <td className="p-2 border-b border-color font-bold">{user.id}</td>
                    <td className="p-2 border-b border-color">{user.bookings}</td>
                    <td className="p-2 border-b border-color text-right">
                      {user.limit_exceeded ? (
                        <span className="bg-red text-red px-2 py-1 rounded border-red font-bold text-[10px]" style={{ border: '1px solid var(--status-red)'}}>BLOCKED HOARDER</span>
                      ) : (
                        <span className="text-green px-2 py-1 rounded text-[10px]">Verified Consumer</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Area-Level Spike Detection */}
        <div className="glass-panel flex-col gap-4">
           <h3 className="flex-row gap-2 font-bold m-0 text-brand-saffron"><Zap size={18}/> Node Demand Analysis Model</h3>
           <p className="text-xs text-muted mb-2">Rule Sandbox: if (current_demand &gt; historical_avg * 1.5) &rarr; Flag Artificial Regional Spike</p>
           
           <div style={{ width: '100%', height: '180px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spikeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} />
                  <YAxis stroke="#94a3b8" fontSize={10} />
                  <RechartsTooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                  <ReferenceLine y={600} stroke="#FF9933" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Critical Avg Threshold', fill: '#FF9933', fontSize: 10 }} />
                  <Bar dataKey="avg" name="Historical Average" fill="#1e293b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="current" name="Current Demand" radius={[4, 4, 0, 0]}>
                    {spikeData.map((entry, index) => (
                      <cell key={`cell-${index}`} fill={entry.isSpike ? '#ef4444' : '#138808'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

      </div>
    </div>
  );
};

export default FraudDetection;
