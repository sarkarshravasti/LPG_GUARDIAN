import React from 'react';
import { Target, Search, FileText, Anchor, ShieldAlert, BarChart2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DISTRIBUTORS = [
   { name: 'Bharat Gas - Kanpur Prime', id: 'UP-KNP-7720 / LUCKNOW CENTRAL', alloc: '4,200', final: '2,940', cdi: 28, anomaly: true, flags: 14 },
   { name: 'Indane - Awadh Logistics', id: 'UP-LKO-4401 / LUCKNOW CENTRAL', alloc: '8,500', final: '6,120', cdi: 42, anomaly: false, flags: 8 },
   { name: 'HP Gas - Gomti Agency', id: 'UP-LKO-9912 / LUCKNOW CENTRAL', alloc: '2,100', final: '1,820', cdi: 71, anomaly: false, flags: 1 },
];

const LEDGER = [
   { batch: '#BT-99021', dispatch: '450 Units', auth: '310 Units', desc: '-140 Units', status: 'LEAK', critical: true },
   { batch: '#BT-98955', dispatch: '500 Units', auth: '498 Units', desc: '-2 Units', status: 'NORMAL', critical: false },
   { batch: '#BT-98810', dispatch: '450 Units', auth: '280 Units', desc: '-170 Units', status: 'CRITICAL LEAK', critical: true },
];

const DistributorsTab = () => {
   return (
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, overflowY: 'auto' }}>
         
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div style={{ display: 'flex', gap: '24px' }}>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em' }}>STATE JURISDICTION</span>
                  <span style={{ fontSize: '11px', color: '#FFFFFF', letterSpacing: '0.05em' }}>Uttar Pradesh (UP-04) ▾</span>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em' }}>DISTRICT BLOCK</span>
                  <span style={{ fontSize: '11px', color: '#FFFFFF', letterSpacing: '0.05em' }}>Lucknow Central ▾</span>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em' }}>COMPLIANCE RANGE</span>
                  <span style={{ fontSize: '11px', color: '#FFFFFF', letterSpacing: '0.05em' }}>Critical ({'<'} 40%) ▾</span>
               </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
               <button style={{ background: '#252A3D', color: '#FFFFFF', border: '1px solid #4B5563', padding: '8px 16px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>EXPORT LEDGER</button>
               <button style={{ background: 'rgba(250, 155, 154, 0.1)', color: '#FA9B9A', border: '1px solid #FA9B9A', padding: '8px 16px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>ADVANCED ANALYTICS</button>
            </div>
         </div>

         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
            <div>
               <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>Distributor Accountability Center</h1>
               <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0 }}>Real-time auditing of LPG supply chain integrity. Modules ranked by Compliance Deviation Index (CDI).</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
               <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em' }}>ACTIVE MONITORING</span>
               <span style={{ fontSize: '20px', fontWeight: '900', color: '#FA9B9A' }}>1,248 NODES</span>
            </div>
         </div>

         {/* TOP DISTRIBUTOR CARDS */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {DISTRIBUTORS.map((d, index) => (
               <div key={index} style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
                  {index === 0 && <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: '#FA9B9A' }}></div>}
                  {index === 1 && <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: '#F97316' }}></div>}
                  {index === 2 && <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: '#DEB887' }}></div>}
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                     <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF', margin: '0 0 4px 0' }}>{d.name}</h4>
                        <span style={{ fontSize: '9px', color: '#9CA3AF', letterSpacing: '0.05em' }}>ID: {d.id}</span>
                     </div>
                     <div style={{ width: '48px', height: '48px', position: 'relative' }}>
                        <ResponsiveContainer width="100%" height="100%">
                           <PieChart>
                              <Pie data={[{value: d.cdi}, {value: (100 - d.cdi)}]} innerRadius={18} outerRadius={22} dataKey="value" stroke="none">
                                 <Cell fill={index === 0 ? '#FA9B9A' : index === 1 ? '#F97316' : '#DEB887'} />
                                 <Cell fill="#252A3D" />
                              </Pie>
                           </PieChart>
                        </ResponsiveContainer>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '10px', color: '#FFFFFF', fontWeight: 'bold' }}>{d.cdi}%</div>
                     </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', background: '#111319', padding: '12px', borderRadius: '6px' }}>
                     <div>
                        <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>CYLINDER ALLOCATION</span>
                        <span style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: '900' }}>{d.alloc} <span style={{ fontSize: '9px', color: '#9CA3AF' }}>MTD</span></span>
                     </div>
                     <div>
                        <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>FINAL DELIVERY</span>
                        <span style={{ fontSize: '18px', color: index === 0 ? '#FA9B9A' : '#FFFFFF', fontWeight: '900' }}>{d.final} <span style={{ fontSize: '9px', color: '#9CA3AF' }}>MTD</span></span>
                     </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ background: index === 0 ? '#7F1D1D' : '#111319', color: index === 0 ? '#FFFFFF' : '#9CA3AF', fontSize: '9px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px', border: index === 0 ? 'none' : '1px solid #252A3D' }}>{d.flags} FLAGS</span>
                        {d.anomaly && <span style={{ background: '#2E1015', color: '#FA9B9A', border: '1px solid #7F1D1D', fontSize: '9px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>ANOMALY DETECTED</span>}
                        {index === 1 && <span style={{ background: '#252A3D', color: '#9CA3AF', fontSize: '9px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>PENDING AUDIT</span>}
                     </div>
                     <span style={{ color: '#6B7280' }}>›</span>
                  </div>
               </div>
            ))}
         </div>

         {/* FULL DISTRIBUTOR PROFILE FOCUS */}
         <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
               <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', background: '#2E1015', border: '1px solid #7F1D1D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Target color="#FA9B9A" size={28}/>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF', margin: '0 0 8px 0' }}>Full Distributor Profile: Bharat Gas - Kanpur Prime</h2>
                     <div style={{ display: 'flex', gap: '24px' }}>
                        <span style={{ fontSize: '11px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '4px', height: '4px', background: '#6B7280', borderRadius: '50%' }}></div> REGISTRANT: RAJESH K. VERMA</span>
                        <span style={{ fontSize: '11px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '4px', height: '4px', background: '#6B7280', borderRadius: '50%' }}></div> GSTIN: 09AAFCH1234F1Z5</span>
                        <span style={{ fontSize: '11px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '4px', height: '4px', background: '#6B7280', borderRadius: '50%' }}></div> +91 99887 76655</span>
                     </div>
                  </div>
               </div>

               <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#7F1D1D', color: '#FFFFFF', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', fontSize: '10px', alignSelf: 'center' }}>CRITICAL<br/>AUDIT STATUS</div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                     <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em' }}>COMPOSITE THREAT SCORE</span>
                     <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{ fontSize: '42px', fontWeight: '900', color: '#FA9B9A', lineHeight: '1' }}>88</span>
                        <span style={{ fontSize: '16px', color: '#6B7280', fontWeight: 'bold' }}>/100</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* In-Panel Custom Tabs */}
            <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid #252A3D', marginBottom: '32px' }}>
               <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#FA9B9A', paddingBottom: '12px', borderBottom: '2px solid #FA9B9A', letterSpacing: '0.1em' }}>CYLINDER RECONCILIATION</span>
               <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#9CA3AF', paddingBottom: '12px', letterSpacing: '0.1em' }}>DELIVERY AGENT TRACKER</span>
               <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#9CA3AF', paddingBottom: '12px', letterSpacing: '0.1em' }}>FLAG HISTORY (14)</span>
               <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#9CA3AF', paddingBottom: '12px', letterSpacing: '0.1em' }}>AUDIT TRAIL</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
               
               {/* LEDGER TABLE */}
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                     <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em' }}>TRANSACTION RECONCILIATION LEDGER</span>
                     <div style={{ display: 'flex', gap: '12px', fontSize: '9px', color: '#9CA3AF' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '6px', background: '#FA9B9A', borderRadius: '50%' }}></div> LEAKED</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '6px', background: '#DEB887', borderRadius: '50%' }}></div> VERIFIED</span>
                     </div>
                  </div>
                  
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                     <thead>
                        <tr style={{ borderBottom: '1px solid #252A3D', textAlign: 'left' }}>
                           <th style={{ padding: '12px 0', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>BATCH ID</th>
                           <th style={{ padding: '12px 0', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>DISPATCHED</th>
                           <th style={{ padding: '12px 0', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>OTP AUTHENTICATED</th>
                           <th style={{ padding: '12px 0', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>DISCREPANCY</th>
                           <th style={{ padding: '12px 0', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em', textAlign: 'right' }}>STATUS</th>
                        </tr>
                     </thead>
                     <tbody>
                        {LEDGER.map((row, idx) => (
                           <tr key={idx} style={{ borderBottom: '1px solid #252A3D', background: row.critical ? 'rgba(250, 155, 154, 0.05)' : 'transparent' }}>
                              <td style={{ padding: '16px 0', fontSize: '11px', color: '#FFFFFF', fontFamily: 'monospace' }}>{row.batch}</td>
                              <td style={{ padding: '16px 0', fontSize: '11px', color: '#FFFFFF' }}>{row.dispatch}</td>
                              <td style={{ padding: '16px 0', fontSize: '11px', color: '#FFFFFF' }}>{row.auth}</td>
                              <td style={{ padding: '16px 0', fontSize: '11px', color: row.critical ? '#FA9B9A' : '#9CA3AF', fontWeight: 'bold' }}>{row.desc}</td>
                              <td style={{ padding: '16px 0', textAlign: 'right' }}>
                                 <span style={{ fontSize: '9px', background: row.critical ? '#7F1D1D' : '#252A3D', color: row.critical ? '#FFFFFF' : '#9CA3AF', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>{row.status}</span>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               {/* COMPOSITE RIGHT COLUMN */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  <div style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px' }}>
                     <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>REAL-TIME GPS DEVIATION</span>
                     <div style={{ width: '100%', height: '120px', borderRadius: '8px', border: '1px solid #252A3D', position: 'relative', overflow: 'hidden', marginBottom: '16px', background: '#0A0F1E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <div style={{ width: '80%', height: '1px', background: 'rgba(250, 155, 154, 0.5)', position: 'absolute', transform: 'rotate(15deg)' }}></div>
                         <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%', position: 'absolute', top: '40%', left: '30%', boxShadow: '0 0 10px #FA9B9A' }}></div>
                         <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%', position: 'absolute', top: '60%', left: '70%', boxShadow: '0 0 10px #FA9B9A' }}></div>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '11px', color: '#9CA3AF' }}>OFF-ROUTE DETECTED</span>
                        <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold' }}>1.4 KM</span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '11px', color: '#9CA3AF' }}>IDLE TIME (EXCESS)</span>
                        <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold' }}>42 MINS</span>
                     </div>
                  </div>

                  <div style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px' }}>
                     <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>FLAG HISTORY TIMELINE</span>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', paddingLeft: '16px' }}>
                        <div style={{ position: 'absolute', left: '3px', top: '6px', bottom: '0', width: '2px', background: '#252A3D' }}></div>
                        
                        <div style={{ position: 'relative' }}>
                           <div style={{ position: 'absolute', left: '-16px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#FA9B9A' }}></div>
                           <span style={{ fontSize: '9px', color: '#6B7280', display: 'block', marginBottom: '2px' }}>OCT 24, 14:22</span>
                           <h5 style={{ fontSize: '11px', color: '#FFFFFF', margin: '0 0 4px 0' }}>MASS REDIRECTION ALERT</h5>
                           <p style={{ fontSize: '10px', color: '#9CA3AF', margin: 0, lineHeight: '1.4' }}>140 units diverted to unauthorized sector.</p>
                        </div>

                        <div style={{ position: 'relative' }}>
                           <div style={{ position: 'absolute', left: '-16px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#FA9B9A', opacity: 0.5 }}></div>
                           <span style={{ fontSize: '9px', color: '#6B7280', display: 'block', marginBottom: '2px' }}>OCT 22, 09:10</span>
                           <h5 style={{ fontSize: '11px', color: '#9CA3AF', margin: '0 0 4px 0' }}>OTP BYPASS ATTEMPT</h5>
                           <p style={{ fontSize: '10px', color: '#6B7280', margin: 0, lineHeight: '1.4' }}>Agent #552 repeatedly failed SMS sync.</p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

         </div>

      </div>
   );
};

export default DistributorsTab;
