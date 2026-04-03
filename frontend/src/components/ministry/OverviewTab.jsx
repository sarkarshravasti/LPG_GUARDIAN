import React from 'react';
import { Activity, TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

const LIVE_FLAGS = [
  { time: '14:22:10', title: 'Abnormal Booking Pattern', tag: 'CRITICAL', desc: 'Distributor #D-2041 (Pune) reported 45 bookings from single IP block within 2 minutes.', sector: 'MH-04-WEST', color: '#EF4444' },
  { time: '14:18:45', title: 'Geofence Violation', tag: 'HIGH', desc: 'Delivery Truck UP-16-AX-8821 exited authorized route zone in Ghaziabad.', sector: 'UP-SECTOR-2', color: '#F97316' },
  { time: '14:05:01', title: 'Ghost Identity Detection', tag: 'MEDIUM', desc: 'System identified duplicate Aadhaar linkage for consumer account UID-9901-22 in Delhi.', sector: 'DL-CENT-1', color: '#DEB887' }
];

const DONUT_DATA = [
  { name: 'Delivery Diversion', value: 42, color: '#FA9B9A' },
  { name: 'Identity Fraud', value: 18, color: '#DEB887' },
  { name: 'Fake Bookings', value: 28, color: '#F97316' },
  { name: 'Other Anomaly', value: 12, color: '#4B5563' }
];

const STATS = [
  { label: 'TOTAL ACTIVE FLAGS', value: '1,429', trend: '+12%', up: true },
  { label: 'UNACCOUNTED CYLINDERS', value: '8,102', trend: '+4.2%', up: true },
  { label: 'COMPLIANCE VIOLATIONS', value: '312', trend: '-8%', up: false },
  { label: 'GHOST ACCOUNTS', value: '4,022', trend: '+21%', up: true },
  { label: 'PRICE ALERTS', value: '18', trend: '-0%', up: false },
  { label: 'CASES ESCALATED', value: '67', trend: '+2', up: true },
];

const OverviewTab = () => {
   return (
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
         {/* 📊 TOP 6 STAT BLOCKS (From Screenshot) */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
            {STATS.map((s, idx) => (
               <div key={idx} style={{ background: '#171923', border: '1px solid #252A3D', borderTop: '2px solid #FA9B9A', borderRadius: '6px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#9CA3AF', letterSpacing: '0.05em' }}>{s.label}</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                     <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFFFFF' }}>{s.value}</span>
                     <span style={{ fontSize: '10px', color: '#9CA3AF', display: 'flex', alignItems: 'center' }}>
                        {s.up ? <TrendingUp size={10} style={{ marginRight: '2px' }}/> : <TrendingDown size={10} style={{ marginRight: '2px' }}/>} 
                        {s.trend}
                     </span>
                  </div>
               </div>
            ))}
         </div>

         {/* 📍 MIDDLE ROW: FEED AND CHART */}
         <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', height: '400px' }}>
            
            {/* LIVE FLAG FEED */}
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #252A3D' }}>
                  <h3 style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.1em', margin: 0, color: '#FFFFFF' }}><Activity size={12} color="#FA9B9A" style={{ display: 'inline', marginRight: '6px' }}/> LIVE FRAUD FLAG FEED</h3>
                  <span style={{ background: '#7F1D1D', color: '#FA9B9A', fontSize: '9px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px', border: '1px solid #FA9B9A' }}>REAL-TIME ACTIVE</span>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', gap: '16px', overflowY: 'auto' }}>
                  {LIVE_FLAGS.map((flag, idx) => (
                     <div key={idx} style={{ background: '#111319', borderLeft: `3px solid ${flag.color}`, padding: '16px', borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <span style={{ fontSize: '10px', color: '#6B7280', fontFamily: 'monospace' }}>{flag.time}</span>
                              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFFFFF' }}>{flag.title}</span>
                           </div>
                           <span style={{ background: flag.color, color: '#FFFFFF', fontSize: '9px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '12px' }}>{flag.tag}</span>
                        </div>
                        <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0, lineHeight: '1.5' }}>{flag.desc}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                           <span style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase' }}>SECTOR: {flag.sector}</span>
                           <span style={{ fontSize: '10px', color: '#FA9B9A', fontWeight: 'bold', cursor: 'pointer' }}>VIEW CASE DETAILS</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* DONUT CHART */}
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
               <h3 style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.1em', margin: '0 0 24px 0', color: '#FFFFFF' }}>FRAUD TYPE BREAKDOWN</h3>
               
               <div style={{ position: 'relative', width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                          data={DONUT_DATA}
                          innerRadius={70}
                          outerRadius={95}
                          paddingAngle={2}
                          dataKey="value"
                          stroke="none"
                        >
                          {DONUT_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <RechartsTooltip contentStyle={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '6px', fontSize: '12px', color: '#FFFFFF' }} itemStyle={{ color: '#FFFFFF' }}/>
                     </PieChart>
                  </ResponsiveContainer>
                  
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                     <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#FFFFFF', margin: 0 }}>100%</h2>
                     <span style={{ fontSize: '9px', color: '#9CA3AF', letterSpacing: '0.1em' }}>RISK WEIGHT</span>
                  </div>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: 'auto' }}>
                  {DONUT_DATA.map((d, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                           <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: d.color }}></div>
                           <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{d.name}</span>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#FFFFFF' }}>{d.value}%</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* 🗺️ BOTTOM ROW: HEATMAP TRACER */}
         <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px', position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', zIndex: 10, position: 'relative' }}>
               <div>
                  <h3 style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.1em', margin: 0, color: '#FFFFFF' }}>FRAUD CONCENTRATION HEATMAP</h3>
                  <span style={{ fontSize: '10px', color: '#9CA3AF', letterSpacing: '0.05em' }}>REGIONAL ANALYSIS ACROSS INDIAN STATES</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.1em' }}>INTENSITY SCALE:</span>
                     <div style={{ width: '80px', height: '6px', background: 'linear-gradient(90deg, #4B5563, #FA9B9A, #EF4444)', borderRadius: '3px' }}></div>
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#FFFFFF', border: '1px solid #252A3D', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', background: '#111319' }}>ALL INDIA <ChevronDown size={12} style={{ display: 'inline', marginLeft: '4px' }}/></span>
               </div>
            </div>
            
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, #171923 0%, #111319 100%)', zIndex: 1, opacity: 0.8 }}>
              <div style={{ width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </div>

            <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', background: '#171923', border: '1px solid #252A3D', padding: '16px', borderRadius: '8px', zIndex: 10, width: '280px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #252A3D', paddingBottom: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#FFFFFF' }}>MAHARASHTRA</span>
                  <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#FA9B9A' }}>CRITICAL</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF', marginBottom: '4px' }}>
                  <span>ACTIVE FLAGS</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>342</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF' }}>
                  <span>TOP FRAUD TYPE</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Delivery Diversion</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OverviewTab;
