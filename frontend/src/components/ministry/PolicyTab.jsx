import React from 'react';
import { AlertOctagon, Settings, ShieldAlert, Clock, ChevronDown } from 'lucide-react';

const ENFORCEMENT_HISTORY = [
   { title: 'RESTR_ACT_902', desc: 'Sector IV Connection Freeze', date: '22 Oct', user: 'Southern Port' },
   { title: 'SIM_EXEC_44', desc: 'Simulation: Tier 2 Rationing', date: '21 Oct', user: 'System Auto' },
   { title: 'CRISIS_MODE_OFF', desc: 'Sector IV Stabilization Reached', date: '20 Oct', user: 'System Auto' },
   { title: 'AUTH_OVERRIDE', desc: 'Manual Override by Chief Officer', date: '19 Oct', user: 'Chief Officer' }
];

const PolicyTab = () => {
   return (
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, overflowY: 'auto' }}>
         
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
               <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px 0', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>DYNAMIC POLICY ENFORCEMENT</h1>
               <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0, lineHeight: '1.5', maxWidth: '600px' }}>
                  Active mitigation and legislative automation interface. Monitor regional supply constraints, simulate demand-side interventions, and execute emergency crisis protocols in real-time.
               </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
               <span style={{ fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em' }}>CURRENT THREAT LEVEL</span>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '24px', fontWeight: '900', color: '#FA9B9A', letterSpacing: '0.05em' }}>ELEVATED</span>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FA9B9A' }} className="ministry-red-pulse"></div>
               </div>
            </div>
         </div>

         <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)', gap: '24px' }}>
            
            {/* LEFT COLUMN: RESTRICTIONS & SIMULATOR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               
               {/* Active Restrictions Table */}
               <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #252A3D' }}>
                     <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <AlertOctagon size={14} color="#FA9B9A"/> ACTIVE RESTRICTIONS TABLE
                     </span>
                     <span style={{ fontSize: '9px', background: '#252A3D', color: '#9CA3AF', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>9 ACTIVE NODES</span>
                  </div>

                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                     <thead>
                        <tr style={{ borderBottom: '1px solid #252A3D' }}>
                           <th style={{ textAlign: 'left', padding: '12px 24px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>REGION</th>
                           <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>RESTRICTION</th>
                           <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>ORIGIN</th>
                           <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>SUPPLY</th>
                           <th style={{ textAlign: 'center', padding: '12px 24px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>ACTION</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr style={{ borderBottom: '1px solid #252A3D' }}>
                           <td style={{ padding: '16px 24px' }}>
                              <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '4px' }}>NORTH SECTOR VII</span>
                              <span style={{ display: 'block', fontSize: '9px', color: '#9CA3AF' }}>Industrial Hub</span>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#FA9B9A', marginBottom: '4px' }}>New Connection Freeze</span>
                              <span style={{ display: 'block', fontSize: '9px', color: '#9CA3AF' }}>Trigger: Bulk Hoarding Detected</span>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                 <ShieldAlert size={12} color="#FA9B9A"/>
                                 <span style={{ fontSize: '9px', color: '#9CA3AF', fontFamily: 'monospace' }}>2023-10-<br/>24 09:12</span>
                              </div>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                 <div style={{ width: '40px', height: '4px', background: '#252A3D', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: '15%', height: '100%', background: '#EF4444' }}></div>
                                 </div>
                                 <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#EF4444' }}>CRITICAL<br/>(15%)</span>
                              </div>
                           </td>
                           <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                              <span style={{ fontSize: '18px', color: '#6B7280', cursor: 'pointer' }}>...</span>
                           </td>
                        </tr>

                        <tr style={{ borderBottom: '1px solid #252A3D' }}>
                           <td style={{ padding: '16px 24px' }}>
                              <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '4px' }}>EASTERN FRINGE</span>
                              <span style={{ display: 'block', fontSize: '9px', color: '#9CA3AF' }}>Rural Settlement</span>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#FA9B9A', marginBottom: '4px' }}>15-Day Booking Gap</span>
                              <span style={{ display: 'block', fontSize: '9px', color: '#9CA3AF' }}>Trigger: Logistics Failure</span>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                 <Clock size={12} color="#9CA3AF"/>
                                 <span style={{ fontSize: '9px', color: '#9CA3AF', fontFamily: 'monospace' }}>2023-10-<br/>23 14:45</span>
                              </div>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                 <div style={{ width: '40px', height: '4px', background: '#252A3D', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: '45%', height: '100%', background: '#F97316' }}></div>
                                 </div>
                                 <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#F97316' }}>MODERATE<br/>(45%)</span>
                              </div>
                           </td>
                           <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                              <span style={{ fontSize: '18px', color: '#6B7280', cursor: 'pointer' }}>...</span>
                           </td>
                        </tr>

                        <tr>
                           <td style={{ padding: '16px 24px' }}>
                              <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '4px' }}>CENTRAL PLAZA</span>
                              <span style={{ display: 'block', fontSize: '9px', color: '#9CA3AF' }}>High-Density Urban</span>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '4px' }}>Single Cylinder Cap</span>
                              <span style={{ display: 'block', fontSize: '9px', color: '#9CA3AF' }}>Deact: Inventory {'>'} 60%</span>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                 <ShieldAlert size={12} color="#FA9B9A"/>
                                 <span style={{ fontSize: '9px', color: '#9CA3AF', fontFamily: 'monospace' }}>2023-10-<br/>25 02:00</span>
                              </div>
                           </td>
                           <td style={{ padding: '16px 8px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                 <div style={{ width: '40px', height: '4px', background: '#252A3D', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: '65%', height: '100%', background: '#DEB887' }}></div>
                                 </div>
                                 <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#DEB887' }}>STABLE<br/>(65%)</span>
                              </div>
                           </td>
                           <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                              <span style={{ fontSize: '18px', color: '#6B7280', cursor: 'pointer' }}>...</span>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>

               {/* Policy Simulator */}
               <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <div style={{ background: 'rgba(250, 155, 154, 0.2)', padding: '12px', borderRadius: '8px' }}>
                        <Settings size={20} color="#FA9B9A" />
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#FFFFFF', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>POLICY SIMULATOR</h2>
                        <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em' }}>PREDICTIVE IMPACT ANALYSIS</span>
                     </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)', gap: '16px' }}>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>TARGET REGION</label>
                        <div style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '4px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                           <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: '500' }}>Select Region...</span>
                           <ChevronDown size={14} color="#6B7280" />
                        </div>
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>BOOKING GAP (DAYS)</label>
                        <input type="text" placeholder="e.g. 15" style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '4px', padding: '12px 16px', color: '#FFFFFF', fontSize: '12px', outline: 'none' }} />
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>MAX CYLINDERS</label>
                        <input type="text" placeholder="1-5" style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '4px', padding: '12px 16px', color: '#FFFFFF', fontSize: '12px', outline: 'none' }} />
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <label style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>CONNECTION FREEZE</label>
                        <div style={{ width: '48px', height: '24px', background: '#FA9B9A', borderRadius: '12px', position: 'relative', marginTop: '6px', cursor: 'pointer' }}>
                           <div style={{ width: '20px', height: '20px', background: '#FFFFFF', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                        </div>
                     </div>
                  </div>

                  <div style={{ background: '#111319', borderRadius: '8px', padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', border: '1px solid #1F2937' }}>
                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <span style={{ fontSize: '28px', fontWeight: '900', color: '#FA9B9A', marginBottom: '8px' }}>-22%</span>
                        <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em' }}>PROJECTED DEMAND<br/>REDUCTION</span>
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <span style={{ fontSize: '28px', fontWeight: '900', color: '#FFFFFF', marginBottom: '8px' }}>12.4K</span>
                        <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em' }}>HOUSEHOLDS AFFECTED</span>
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <span style={{ fontSize: '28px', fontWeight: '900', color: '#DEB887', marginBottom: '8px' }}>48H</span>
                        <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em' }}>MARKET STABILIZATION</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* RIGHT COLUMN: CRISIS MODE CONTROLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               
               <div style={{ background: '#2E1015', border: '1px solid #7F1D1D', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <div style={{ background: '#FA9B9A', color: '#7F1D1D', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>!</div> 
                     CRISIS MODE CONTROLS
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <label style={{ fontSize: '9px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.05em' }}>EMERGENCY REGION</label>
                     <div style={{ background: '#111319', border: '1px solid #7F1D1D', borderRadius: '4px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: '500' }}>Select Crisis Zone...</span>
                        <ChevronDown size={14} color="#FA9B9A" />
                     </div>
                  </div>

                  <div style={{ background: '#7F1D1D', border: '1px solid #991B1B', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '14px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '0.05em' }}>CRISIS STATUS</span>
                        <span style={{ fontSize: '9px', color: '#FA9B9A', letterSpacing: '0.05em' }}>WAITING FOR AUTH</span>
                     </div>
                     <div style={{ width: '48px', height: '24px', background: '#991B1B', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                        <div style={{ width: '20px', height: '20px', background: '#FFFFFF', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                     </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <label style={{ fontSize: '9px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.05em' }}>MANDATORY REASON (AUTH LOG)</label>
                     <textarea placeholder="Describe the crisis trigger..." style={{ background: '#111319', border: '1px solid #7F1D1D', borderRadius: '4px', padding: '12px 16px', color: '#FFFFFF', fontSize: '12px', outline: 'none', height: '80px', resize: 'none' }}></textarea>
                  </div>

                  <button style={{ background: '#FA9B9A', color: '#7F1D1D', border: 'none', padding: '16px', borderRadius: '6px', fontSize: '12px', fontWeight: '900', letterSpacing: '0.1em', cursor: 'pointer', textAlign: 'center', transition: 'background 0.2s ease',  }} className="ministry-card-lift">
                     EXECUTE EMERGENCY PROTOCOL
                  </button>
               </div>

               {/* Enforcement History Timeline */}
               <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                     <span style={{ fontSize: '10px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em' }}>ENFORCEMENT HISTORY</span>
                     <Clock size={12} color="#6B7280" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                     <div style={{ position: 'absolute', left: '3px', top: '5px', bottom: '5px', width: '2px', background: '#252A3D' }}></div>
                     
                     {ENFORCEMENT_HISTORY.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative', paddingLeft: '16px' }}>
                           <div style={{ position: 'absolute', left: '0', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: idx < 2 ? '#FA9B9A' : '#4B5563' }}></div>
                           <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '4px' }}>
                              <h5 style={{ color: '#FFFFFF', fontSize: '11px', margin: 0, fontWeight: 'bold' }}>{item.title}</h5>
                              <p style={{ color: '#9CA3AF', fontSize: '10px', margin: 0 }}>{item.date} | {item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>

         </div>
      </div>
   );
};

export default PolicyTab;
