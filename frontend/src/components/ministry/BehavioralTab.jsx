import React from 'react';
import { Target, Users, AlertCircle, Activity, Server, FileText } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const CONSUMPTION_DATA = [
   { month: 'Jun', val: 30 },
   { month: 'Jul', val: 35 },
   { month: 'Aug', val: 40 },
   { month: 'Sep', val: 20 },
   { month: 'Oct', val: 85 },
   { month: 'Nov', val: 95 },
   { month: 'Dec', val: 80 }
];

const BehavioralTab = () => {
   return (
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, overflowY: 'auto' }}>
         
         <div>
            <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>INTELLIGENCE STREAM</span>
            <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#FFFFFF', margin: 0, fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: '1.2' }}>BEHAVIORAL FRAUD DETECTION ENGINE</h1>
         </div>

         {/* TOP STATS */}
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px', borderLeft: '3px solid #FA9B9A' }}>
               <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>ACTIVE HIGH-RISK TARGETS</span>
               <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFFFFF', marginTop: '8px' }}>1,204</div>
               <span style={{ fontSize: '11px', color: '#9CA3AF' }}>↗ +12% vs last 24h</span>
            </div>
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px', borderLeft: '3px solid #DEB887' }}>
               <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>ANOMALY CONFIDENCE AVG.</span>
               <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFFFFF', marginTop: '8px' }}>92.4%</div>
               <span style={{ fontSize: '11px', color: '#DEB887', fontWeight: 'bold' }}>✓ Machine Validated</span>
            </div>
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px', borderLeft: '3px solid #EF4444' }}>
               <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>DIVERTED UNITS (est)</span>
               <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFFFFF', marginTop: '8px' }}>4,810</div>
               <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold' }}>▲ Revenue Impact $120k</span>
            </div>
         </div>

         <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '24px' }}>
            
            {/* L REGISTRY TABLE */}
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '32px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(250, 155, 154, 0.1)', border: '1px solid #FA9B9A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Target color="#FA9B9A" size={20}/>
                  </div>
                  <span style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em' }}>SUSPICIOUS CONSUMER REGISTRY</span>
               </div>

               <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                     <tr style={{ borderBottom: '1px solid #252A3D' }}>
                        <th style={{ textAlign: 'left', padding: '12px', fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>USER ID</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>SUBSCRIBER (MASKED)</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>AREA</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>FLAG REASON</th>
                        <th style={{ textAlign: 'center', padding: '12px', fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>BOOKINGS (30D)</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr style={{ borderBottom: '1px solid #252A3D' }}>
                        <td style={{ padding: '24px 12px', fontSize: '11px', color: '#9CA3AF', fontFamily: 'monospace' }}>#LPG-<br/>88293-<br/>DL</td>
                        <td style={{ padding: '24px 12px', fontSize: '13px', color: '#FFFFFF', fontWeight: 'bold' }}>R****h K***r</td>
                        <td style={{ padding: '24px 12px', fontSize: '12px', color: '#9CA3AF' }}>South Delhi, DL</td>
                        <td style={{ padding: '24px 12px' }}>
                           <span style={{ display: 'inline-block', background: '#7F1D1D', color: '#FFFFFF', fontSize: '10px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px', textAlign: 'center' }}>RAPID RE-<br/>BOOKING</span>
                        </td>
                        <td style={{ padding: '24px 12px', fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>12/3</td>
                     </tr>
                     <tr style={{ borderBottom: '1px solid #252A3D' }}>
                        <td style={{ padding: '24px 12px', fontSize: '11px', color: '#9CA3AF', fontFamily: 'monospace' }}>#LPG-<br/>41029-<br/>MH</td>
                        <td style={{ padding: '24px 12px', fontSize: '13px', color: '#FFFFFF', fontWeight: 'bold' }}>A***l S***a</td>
                        <td style={{ padding: '24px 12px', fontSize: '12px', color: '#9CA3AF' }}>Worli, Mumbai</td>
                        <td style={{ padding: '24px 12px' }}>
                           <span style={{ display: 'inline-block', background: '#9A3412', color: '#FFFFFF', fontSize: '10px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px', textAlign: 'center' }}>CONSUMPTION<br/>SPIKE</span>
                        </td>
                        <td style={{ padding: '24px 12px', fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>08/3</td>
                     </tr>
                     <tr>
                        <td style={{ padding: '24px 12px', fontSize: '11px', color: '#9CA3AF', fontFamily: 'monospace' }}>#LPG-<br/>11904-<br/>UP</td>
                        <td style={{ padding: '24px 12px', fontSize: '13px', color: '#FFFFFF', fontWeight: 'bold' }}>S***m V***a</td>
                        <td style={{ padding: '24px 12px', fontSize: '12px', color: '#9CA3AF' }}>Gomti Nagar, Lucknow</td>
                        <td style={{ padding: '24px 12px' }}>
                           <span style={{ display: 'inline-block', background: '#7F1D1D', color: '#FFFFFF', fontSize: '10px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px', textAlign: 'center' }}>IDENTITY<br/>MISMATCH</span>
                        </td>
                        <td style={{ padding: '24px 12px', fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>04/3</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            {/* RIGHT SIDEBAR / TARGET ANALYSIS */}
            <div style={{ background: '#111319', borderLeft: '1px solid #252A3D', display: 'flex', flexDirection: 'column', gap: '32px' }}>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                     <span style={{ display: 'inline-block', background: '#7F1D1D', color: '#FFFFFF', fontSize: '9px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', marginBottom: '8px' }}>HIGH RISK</span>
                     <span style={{ fontSize: '10px', color: '#9CA3AF', letterSpacing: '0.1em', marginLeft: '8px' }}>TARGET ANALYSIS</span>
                     <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF', margin: 0, fontStyle: 'italic', letterSpacing: '0.1em' }}>R****HK***R</h2>
                     <span style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '0.05em' }}>ID: #LPG-88293-DL | JOINED 2021</span>
                  </div>
                  <span style={{ fontSize: '20px', color: '#6B7280', cursor: 'pointer' }}>×</span>
               </div>

               <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                     <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px' }}><Activity size={14} /> CONSUMPTION VELOCITY</span>
                     <span style={{ fontSize: '9px', color: '#6B7280' }}>LTM Data</span>
                  </div>

                  <div style={{ height: '140px', background: '#171923', border: '1px solid #252A3D', borderRadius: '6px', padding: '16px', position: 'relative' }}>
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={CONSUMPTION_DATA}>
                           <Tooltip contentStyle={{ background: '#111319', border: '1px solid #252A3D' }} itemStyle={{ color: '#FFFFFF' }}/>
                           <Bar dataKey="val" fill="#4B5563" radius={[2, 2, 0, 0]} 
                                activeBar={{ fill: '#FA9B9A' }} 
                                shape={(props) => {
                                   const { x, y, width, height, payload } = props;
                                   const fill = payload.val > 50 ? '#FA9B9A' : '#4B5563';
                                   return <rect x={x} y={y} width={width} height={height} fill={fill} rx={2} ry={2} />;
                                }}
                           />
                        </BarChart>
                     </ResponsiveContainer>
                     <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px dashed #FA9B9A', padding: '8px 16px', color: '#FA9B9A', fontSize: '9px', fontWeight: 'bold', background: 'rgba(17, 19, 25, 0.8)', borderRadius: '4px' }}>ANOMALY WINDOW DETECTED</div>
                  </div>
               </div>

               <div>
                  <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}><Target size={14} /> REGISTERED GEOLOCATION</span>
                  <div style={{ height: '120px', background: '#171923', border: '1px solid #252A3D', borderRadius: '6px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     <div style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                     <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(250, 155, 154, 0.2)', border: '1px solid #FA9B9A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '6px', height: '6px', background: '#FA9B9A', borderRadius: '50%' }}></div>
                     </div>
                     <span style={{ position: 'absolute', bottom: '8px', left: '8px', fontSize: '9px', fontFamily: 'monospace', color: '#9CA3AF' }}>COORD: 28.5355° N, 77.2410° E</span>
                  </div>
               </div>

               <div>
                  <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}><Server size={14} /> RECENT TRANSACTION CHAIN</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                     
                     <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #252A3D', paddingBottom: '8px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                           <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold' }}>CYLINDER REFILL DELIVERY</span>
                           <span style={{ fontSize: '9px', color: '#6B7280' }}>24 OCT 2023 | 02:14 PM</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                           <span style={{ fontSize: '11px', color: '#FFFFFF' }}>14.2 KG</span>
                           <span style={{ fontSize: '9px', color: '#FA9B9A', fontWeight: 'bold' }}>FLAGGED</span>
                        </div>
                     </div>

                     <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #252A3D', paddingBottom: '8px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                           <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold' }}>CYLINDER REFILL DELIVERY</span>
                           <span style={{ fontSize: '9px', color: '#6B7280' }}>12 OCT 2023 | 11:45 AM</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                           <span style={{ fontSize: '11px', color: '#FFFFFF' }}>14.2 KG</span>
                           <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold' }}>CLEARED</span>
                        </div>
                     </div>

                  </div>
               </div>

               <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                  <button style={{ flex: 1, background: '#FA9B9A', color: '#111319', border: 'none', padding: '16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>BLOCK ACCOUNT</button>
                  <button style={{ flex: 1, background: '#FFFFFF', color: '#111319', border: 'none', padding: '16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>ISSUE WARRANT</button>
               </div>

            </div>

         </div>

      </div>
   );
};

export default BehavioralTab;
