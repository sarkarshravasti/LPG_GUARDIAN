import React from 'react';
import { Target, Search, AlertCircle, FileText, Calendar, CheckSquare, Clock, MapPin } from 'lucide-react';

const REVERIFICATION_QUEUE = [
   { id: '#LPG-829-QX', name: 'Karan M. Sharma', reason: 'DUPLICATE ADDRESS', volume: '12.4kg/wk', status: 'PENDING RE-VERIFY', alert: true },
   { id: '#LPG-012-ZK', name: 'Anil Kumar', reason: 'FAILED AADHAAR', volume: '45.0kg/wk', status: 'FLAGGED GHOST', alert: true },
   { id: '#LPG-445-WR', name: 'M/S Saffron Logistics', reason: 'IMPLAUSIBLE VOLUME', volume: '120.5kg/wk', status: 'MONITORING', alert: false },
   { id: '#LPG-992-MM', name: 'Sunita Verma', reason: 'DUPLICATE ADDRESS', volume: '8.2kg/wk', status: 'PENDING RE-VERIFY', alert: false },
];

const GhostAccountsTab = () => {
   return (
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, overflowY: 'auto' }}>
         
         {/* TOP HEADER & METRICS */}
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px' }}>
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
               <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Total Connections (Reverification)</span>
               <span style={{ fontSize: '32px', fontWeight: '900', color: '#FFFFFF' }}>14,282</span>
               <span style={{ fontSize: '11px', color: '#6B7280' }}>↗ +1.2% THIS WEEK</span>
            </div>
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
               <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Suspended Connections</span>
               <span style={{ fontSize: '32px', fontWeight: '900', color: '#FA9B9A' }}>842</span>
               <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 'bold' }}>▲ CRITICAL ACTION REQ</span>
            </div>
            <div style={{ background: '#2E1015', border: '1px solid #7F1D1D', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
               <span style={{ fontSize: '10px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Ghost Accounts Confirmed</span>
               <span style={{ fontSize: '32px', fontWeight: '900', color: '#FFFFFF' }}>154</span>
               <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold' }}>⊗ FRAUD LOSS: $42K</span>
            </div>
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', borderRight: '4px solid #DEB887' }}>
               <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Reverification Completion</span>
               <span style={{ fontSize: '32px', fontWeight: '900', color: '#FFFFFF' }}>92.4%</span>
            </div>
         </div>

         {/* MAIN SPLIT */}
         <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)', gap: '24px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               
               {/* QUEUE TABLE */}
               <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                     <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em' }}>SELECTION ACTIONS:</span>
                        <button style={{ background: '#252A3D', color: '#FFFFFF', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>SEND REVERIFICATION</button>
                        <button style={{ background: '#7F1D1D', color: '#FA9B9A', border: '1px solid #991B1B', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>SUSPEND ALL</button>
                        <button style={{ background: '#252A3D', color: '#FFFFFF', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>ESCALATE CASE</button>
                     </div>
                  </div>

                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                     <thead>
                        <tr style={{ borderBottom: '1px solid #252A3D' }}>
                           <th style={{ padding: '12px 0', width: '30px' }}><div style={{ width: '14px', height: '14px', border: '1px solid #4B5563', borderRadius: '2px' }}></div></th>
                           <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>CONNECTION ID</th>
                           <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>ENTITY / NAME</th>
                           <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>FLAG REASON</th>
                           <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>CONSUMPTION</th>
                           <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '9px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.05em' }}>STATUS</th>
                        </tr>
                     </thead>
                     <tbody>
                        {REVERIFICATION_QUEUE.map((item, idx) => (
                           <tr key={idx} style={{ borderBottom: '1px solid #252A3D' }}>
                              <td style={{ padding: '16px 0' }}><div style={{ width: '14px', height: '14px', border: '1px solid #4B5563', borderRadius: '2px' }}></div></td>
                              <td style={{ padding: '16px 8px', fontSize: '11px', color: '#9CA3AF', fontFamily: 'monospace' }}>{item.id}</td>
                              <td style={{ padding: '16px 8px' }}>
                                 <span style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '2px' }}>{item.name}</span>
                                 <span style={{ fontSize: '10px', color: '#6B7280' }}>Block 4, Industrial Area 7</span>
                              </td>
                              <td style={{ padding: '16px 8px' }}>
                                 <span style={{ background: '#7F1D1D', color: '#FFFFFF', fontSize: '9px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>{item.reason}</span>
                              </td>
                              <td style={{ padding: '16px 8px', fontSize: '12px', color: '#FFFFFF', fontWeight: 'bold' }}>
                                 {item.volume} {item.alert && <span style={{ color: '#FA9B9A' }}>▲</span>}
                              </td>
                              <td style={{ padding: '16px 8px', fontSize: '10px', color: '#DEB887', fontWeight: 'bold' }}>
                                 <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#DEB887', marginRight: '6px' }}></span>{item.status}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               {/* BATCH ACTION QUEUE */}
               <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                     <span style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Reverification Queue</span>
                     <span style={{ fontSize: '11px', color: '#6B7280' }}>SORT: URGENCY</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                     <div style={{ background: 'rgba(250, 155, 154, 0.05)', border: '1px solid #FA9B9A', borderLeft: '4px solid #FA9B9A', borderRadius: '4px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                           <div style={{ background: '#FA9B9A', padding: '8px', borderRadius: '50%' }}><Clock size={16} color="#7F1D1D" /></div>
                           <div>
                              <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 'bold', display: 'block', marginBottom: '4px', letterSpacing: '0.05em' }}>EXPRESS DIST. #402 — 12 CONNECTIONS</span>
                              <span style={{ fontSize: '10px', color: '#FA9B9A' }}>KYC EXPIRY: IN 24 HOURS</span>
                           </div>
                        </div>
                        <button style={{ background: '#FA9B9A', color: '#7F1D1D', border: 'none', padding: '10px 16px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>INITIATE BATCH SCAN</button>
                     </div>

                     <div style={{ background: '#111319', border: '1px solid #252A3D', borderLeft: '4px solid #F97316', borderRadius: '4px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                           <div style={{ background: '#252A3D', padding: '8px', borderRadius: '50%' }}><Calendar size={16} color="#F97316" /></div>
                           <div>
                              <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 'bold', display: 'block', marginBottom: '4px', letterSpacing: '0.05em' }}>INDUSTRIAL ZONE CLUSTER B — 45 CONNECTIONS</span>
                              <span style={{ fontSize: '10px', color: '#9CA3AF' }}>KYC EXPIRY: IN 3 DAYS</span>
                           </div>
                        </div>
                        <button style={{ background: '#252A3D', color: '#FFFFFF', border: '1px solid #4B5563', padding: '10px 16px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>SCHEDULE TASK</button>
                     </div>
                  </div>
               </div>

            </div>

            {/* DEDUPLICATION MAP */}
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em' }}>ADDRESS DEDUPLICATION MAP</span>
                  <MapPin size={16} color="#6B7280" />
               </div>

               <div style={{ width: '100%', height: '280px', borderRadius: '8px', border: '1px solid #252A3D', position: 'relative', overflow: 'hidden', marginBottom: '24px', background: '#0A0F1E' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                  
                  {/* Glowing Cluster Radars */}
                  <div style={{ position: 'absolute', top: '30%', left: '40%', width: '60px', height: '60px', background: 'radial-gradient(circle, rgba(250, 155, 154, 0.4) 0%, transparent 70%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%', boxShadow: '0 0 10px #FA9B9A' }}></div>
                  </div>

                  <div style={{ position: 'absolute', bottom: '40%', right: '30%', width: '40px', height: '40px', background: 'radial-gradient(circle, rgba(250, 155, 154, 0.4) 0%, transparent 70%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%', boxShadow: '0 0 10px #FA9B9A' }}></div>
                  </div>
                  
                  <span style={{ position: 'absolute', bottom: '8px', left: '8px', fontSize: '9px', fontFamily: 'monospace', color: '#9CA3AF' }}>COORD: 28.6139° N, 77.2090° E</span>
               </div>

               <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #252A3D', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.05em' }}>DETECTED CLUSTERS ({'>'}3)</span>
                  <span style={{ fontSize: '12px', color: '#FA9B9A', fontWeight: 'bold' }}>12</span>
               </div>

               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <span style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.05em' }}>AVG RADIUS DEVIATION</span>
                  <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 'bold' }}>4.2M</span>
               </div>

               <p style={{ fontSize: '11px', color: '#FA9B9A', lineHeight: '1.5', margin: '0 0 24px 0' }}>
                  <strong style={{ color: '#EF4444' }}>WARNING:</strong> RED MARKERS INDICATE HIGH-PROBABILITY GHOST WAREHOUSES. SYSTEM RECOMMENDS IMMEDIATE VERIFICATION OF "CENTRAL LOGISTICS HUB" SECTOR.
               </p>

               <button style={{ background: '#252A3D', color: '#FFFFFF', border: '1px solid #4B5563', padding: '16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '0.1em', marginTop: 'auto' }}>GENERATE SECTOR REPORT</button>
            </div>

         </div>
      </div>
   );
};

export default GhostAccountsTab;
