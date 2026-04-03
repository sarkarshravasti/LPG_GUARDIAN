import React from 'react';
import { Target, FileText, AlertTriangle, Shield, CheckCircle } from 'lucide-react';

const CasesTab = () => {
   return (
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
         
         {/* HEADER CONTENT */}
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
               <h1 style={{ fontSize: '28px', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '0.05em' }}>INTELLIGENCE QUEUE</h1>
               <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '4px' }}>Active surveillance and enforcement orchestration for high-risk industrial anomalies.</p>
            </div>
            
            <div style={{ display: 'flex', gap: '24px' }}>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em' }}>ACTIVE INVESTIGATIONS</span>
                  <span style={{ color: '#FA9B9A', fontSize: '24px', fontWeight: 'bold' }}>1,248</span>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em' }}>CRITICAL SEIZURES</span>
                  <span style={{ color: '#FA9B9A', fontSize: '24px', fontWeight: 'bold' }}>42</span>
               </div>
            </div>
         </div>

         {/* 2-COLUMN QUEUE */}
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            
            {/* NEW ARRIVALS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #252A3D', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#FA9B9A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%' }}></div> NEW ARRIVALS
                  </span>
                  <span style={{ fontSize: '10px', background: '#252A3D', color: '#9CA3AF', padding: '2px 8px', borderRadius: '4px' }}>12</span>
               </div>

               <div style={{ background: '#171923', borderRadius: '8px', padding: '20px', borderLeft: '3px solid #6B7280' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                     <span style={{ color: '#6B7280', fontSize: '10px', fontFamily: 'monospace' }}>CASE #LPG-4902</span>
                     <span style={{ color: '#6B7280', fontSize: '10px' }}>2h ago</span>
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '14px', margin: '0 0 4px 0', fontWeight: 'bold' }}>Identity Anomaly: Sector 7</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '0 0 16px 0', lineHeight: '1.4' }}>Multiple distributor accounts linked to single biometric hash in industrial zone.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#252A3D', color: '#9CA3AF', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>JD</div>
                     </div>
                     <span style={{ background: '#252A3D', color: '#FA9B9A', fontSize: '9px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>LOW IMPACT</span>
                  </div>
               </div>
            </div>

            {/* IN-DEPTH ANALYSIS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #252A3D', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#FA9B9A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%' }}></div> IN-DEPTH ANALYSIS
                  </span>
                  <span style={{ fontSize: '10px', background: '#252A3D', color: '#9CA3AF', padding: '2px 8px', borderRadius: '4px' }}>08</span>
               </div>

               <div style={{ background: '#171923', borderRadius: '8px', padding: '20px', borderLeft: '3px solid #DEB887' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                     <span style={{ color: '#6B7280', fontSize: '10px', fontFamily: 'monospace' }}>CASE #LPG-3310</span>
                     <span style={{ color: '#6B7280', fontSize: '10px' }}>4d ago</span>
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '14px', margin: '0 0 4px 0', fontWeight: 'bold' }}>Cross-Border Leakage</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '0 0 16px 0', lineHeight: '1.4' }}>Volume discrepancy of 4,000L detected at Terminal Alpha exit point.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ fontSize: '10px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '4px' }}><Target size={12}/> ZONE B-12</span>
                     <span style={{ background: '#7F1D1D', border: '1px solid #991B1B', color: '#FA9B9A', fontSize: '9px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>ACTIVE ANALYSIS</span>
                  </div>
               </div>

               <div style={{ background: '#171923', borderRadius: '8px', padding: '20px', borderLeft: '3px solid #EF4444' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                     <span style={{ color: '#6B7280', fontSize: '10px', fontFamily: 'monospace' }}>CASE #LPG-2219</span>
                     <span style={{ color: '#6B7280', fontSize: '10px' }}>1d ago</span>
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '14px', margin: '0 0 4px 0', fontWeight: 'bold' }}>Mass Decanting Event</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '0 0 16px 0', lineHeight: '1.4' }}>High-velocity pressure drops across 12 smart-meters in residential cluster.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ fontSize: '10px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '4px' }}>LEAD: MILLER</span>
                     <span style={{ background: '#991B1B', border: '1px solid #EF4444', color: '#FFFFFF', fontSize: '9px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>CRITICAL</span>
                  </div>
               </div>
            </div>

         </div>

         {/* HIGHLIGHTED ACTIVE CASE PANEL */}
         <div style={{ marginTop: '24px', background: '#171923', border: '1px solid #252A3D', borderRadius: '12px', padding: '32px', display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '48px' }}>
            
            {/* Left Main View */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                     <span style={{ background: '#7F1D1D', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', color: '#FA9B9A', marginBottom: '8px', display: 'inline-block', border: '1px solid #FA9B9A' }}>HIGH SEVERITY</span>
                     <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#FFFFFF' }}>CASE #LPG-7742-DEL</h2>
                     <span style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.05em' }}>TARGET: APEX DISTRIBUTION HUB • UNAUTHORIZED RE-BOTTLING FACILITY</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                     <button style={{ background: '#252A3D', border: '1px solid #374151', color: '#FFFFFF', padding: '8px 16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}><FileText size={14}/> EXPORT FILE</button>
                     <button className="ministry-red-pulse" style={{ background: '#991B1B', border: '1px solid #EF4444', color: '#FFFFFF', padding: '8px 16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>! ESCALATE TO HQ</button>
                  </div>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px', background: '#111319', borderRadius: '8px', overflow: 'hidden', border: '1px solid #252A3D' }}>
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                     <span style={{ fontSize: '10px', color: '#6B7280', letterSpacing: '0.1em', fontWeight: 'bold' }}>EVIDENCE CHAIN</span>
                     
                     <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #252A3D', paddingBottom: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Total Flags</span>
                        <span style={{ fontSize: '12px', color: '#FA9B9A', fontWeight: 'bold' }}>14 Active</span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #252A3D', paddingBottom: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Cylinder IDs</span>
                        <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 'bold' }}>482 Linked</span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Pressure Anomalies</span>
                        <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 'bold' }}>98.2% Corr.</span>
                     </div>
                  </div>
                  
                  <div style={{ position: 'relative', background: 'radial-gradient(circle at center, #7F1D1D 0%, #111319 100%)', display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                      <div style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                      <div style={{ zIndex: 10 }}>
                         <span style={{ background: '#FA9B9A', color: '#7F1D1D', fontSize: '9px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>TARGET HOTSPOT</span>
                         <div style={{ color: '#FFFFFF', fontSize: '10px', marginTop: '4px', letterSpacing: '0.05em' }}>LAT: 24.512 • LONG: 54.361</div>
                      </div>
                  </div>
               </div>

               {/* Timeline trace logs */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: '#111319', padding: '24px', borderRadius: '8px', border: '1px solid #252A3D' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                     <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%', marginTop: '6px' }}></div>
                     <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                           <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.05em' }}>CRITICAL LEAKAGE DETECTED</span>
                           <span style={{ fontSize: '10px', color: '#6B7280' }}>OCT 14, 03:14</span>
                        </div>
                        <span style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>Smart sensors triggered at 03:14 AM. Flow deviation {'\>'} 45%.</span>
                     </div>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                     <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%', marginTop: '6px', opacity: 0.5 }}></div>
                     <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                           <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>DIGITAL FINGERPRINTING</span>
                           <span style={{ fontSize: '10px', color: '#6B7280' }}>OCT 14, 04:45</span>
                        </div>
                        <span style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px' }}>Behavioral analysis matched profile 88-X-Gamma.</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Side: Officer Intel Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em' }}>OFFICER INTELLIGENCE</span>
                 <FileText size={14} color="#6B7280" />
               </div>

               <div style={{ background: '#111319', borderLeft: '3px solid #6B7280', padding: '16px', borderRadius: '4px' }}>
                  <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold', display: 'block', marginBottom: '8px', letterSpacing: '0.05em' }}>FIELD_NOTE #1: <span style={{ color: '#9CA3AF', fontWeight: 'normal' }}>Suspect vehicle (PLATE: 44-X-90) spotted entering loading bay 4 times in 12 hours. None recorded in official manifests.</span></span>
                  <span style={{ fontSize: '9px', color: '#6B7280', textTransform: 'uppercase' }}>OFFICER THORNE • 2H AGO</span>
               </div>
               
               <div style={{ background: 'rgba(239, 68, 68, 0.05)', borderLeft: '3px solid #FA9B9A', padding: '16px', borderRadius: '4px' }}>
                  <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 'bold', display: 'block', marginBottom: '8px', letterSpacing: '0.05em' }}>CRITICAL: <span style={{ color: '#FA9B9A', fontWeight: 'normal' }}>Attempt to bypass smart-meter was detected via electromagnetic interference pulse.</span></span>
                  <span style={{ fontSize: '9px', color: '#6B7280', textTransform: 'uppercase' }}>SYSTEM AUTO-GEN • 45M AGO</span>
               </div>

               <input type="text" placeholder="Enter secure officer notes..." style={{ background: '#111319', border: '1px solid #252A3D', color: '#FFFFFF', padding: '12px', borderRadius: '6px', fontSize: '12px', outline: 'none', borderBottom: '2px solid #FA9B9A' }} />
               <button style={{ background: '#FA9B9A', color: '#111319', border: 'none', padding: '12px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>UPDATE CASE FILE</button>

               <div style={{ background: '#7F1D1D', border: '1px solid #991B1B', borderRadius: '8px', padding: '16px', marginTop: '16px' }}>
                  <span style={{ fontSize: '10px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>TACTICAL RECOMMENDATIONS</span>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                     <AlertTriangle size={12} color="#FA9B9A" style={{ shrink: 0, marginTop: '2px' }}/>
                     <span style={{ fontSize: '11px', color: '#FFFFFF' }}>Issue immediate cease-and-desist to Distributor ID #4092.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                     <Shield size={12} color="#FA9B9A" style={{ shrink: 0, marginTop: '2px' }}/>
                     <span style={{ fontSize: '11px', color: '#FFFFFF' }}>Authorize thermal drone flyover of Sector 7 storage facilities.</span>
                  </div>
               </div>
            </div>

         </div>

      </div>
   );
};

export default CasesTab;
