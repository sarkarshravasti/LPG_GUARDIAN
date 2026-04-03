import React from 'react';
import { Target, MapPin, Eye, Zap, AlertCircle } from 'lucide-react';

const ReportsTab = () => {
   return (
      <div style={{ padding: '24px 32px', display: 'flex', gap: '32px', flex: 1 }}>
         
         {/* INCOMING REPORTS FEED (LEFT) */}
         <div style={{ width: '320px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #252A3D', paddingBottom: '16px' }}>
               <h2 style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFFFFF', letterSpacing: '0.1em', margin: 0 }}>INCOMING REPORTS FEED</h2>
               <span style={{ background: '#252A3D', color: '#9CA3AF', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>24 NEW</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               
               <div style={{ background: 'transparent', borderLeft: '3px solid #EF4444', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                     <span style={{ fontSize: '10px', color: '#9CA3AF', fontFamily: 'monospace' }}>ID: #REP-8821</span>
                     <span style={{ background: '#7F1D1D', color: '#FFFFFF', fontSize: '9px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '8px' }}>CRITICAL</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF', margin: '0 0 8px 0' }}>Black Market Sale</h3>
                  <span style={{ fontSize: '11px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}><MapPin size={12}/> Sector 7-B Warehouse District</span>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                     <span style={{ fontSize: '10px', color: '#6B7280', letterSpacing: '0.05em' }}>CORROBORATION SCORE</span>
                     <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#FA9B9A' }}>92%</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: '#252A3D', borderRadius: '2px', overflow: 'hidden' }}>
                     <div style={{ width: '92%', height: '100%', background: '#EF4444' }}></div>
                  </div>
                  <span style={{ fontSize: '10px', color: '#6B7280', marginTop: '8px', display: 'block', textAlign: 'right' }}>12m ago</span>
               </div>

               <div style={{ background: '#111319', borderLeft: '3px solid #F97316', padding: '16px', borderTop: '1px solid #252A3D', borderRight: '1px solid #252A3D', borderBottom: '1px solid #252A3D', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                     <span style={{ fontSize: '10px', color: '#9CA3AF', fontFamily: 'monospace' }}>ID: #REP-8819</span>
                     <span style={{ background: '#9A3412', color: '#FFFFFF', fontSize: '9px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '8px' }}>WARNING</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF', margin: '0 0 8px 0' }}>Overcharging</h3>
                  <span style={{ fontSize: '11px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}><MapPin size={12}/> Apex Distribution Hub</span>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                     <span style={{ fontSize: '10px', color: '#6B7280', letterSpacing: '0.05em' }}>CORROBORATION SCORE</span>
                     <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#F97316' }}>64%</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: '#252A3D', borderRadius: '2px', overflow: 'hidden' }}>
                     <div style={{ width: '64%', height: '100%', background: '#F97316' }}></div>
                  </div>
                  <span style={{ fontSize: '10px', color: '#6B7280', marginTop: '8px', display: 'block', textAlign: 'right' }}>45m ago</span>
               </div>

            </div>
         </div>

         {/* INTELLIGENCE REPORT DETAIL (RIGHT) */}
         <div style={{ flex: 1, background: '#171923', borderRadius: '12px', padding: '32px', border: '1px solid #252A3D', display: 'flex', flexDirection: 'column' }}>
            
            {/* Header Area */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
               <div>
                  <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>INTELLIGENCE REPORT: #REP-8821</h1>
                  <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.1em' }}>PRIORITY ALPHA • CORROBORATION 92% • IMMEDIATE RESPONSE RECOMMENDED</span>
               </div>
               <div style={{ display: 'flex', gap: '12px' }}>
                  <button style={{ background: '#FA9B9A', color: '#111319', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>OPEN CASE</button>
                  <button style={{ background: '#252A3D', color: '#FFFFFF', border: '1px solid #4B5563', padding: '8px 16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>FIELD INSPECTION</button>
               </div>
            </div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
               
               {/* Statement & Photo */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                     <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>STATEMENT</span>
                     <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#D1D5DB', margin: 0, lineHeight: '1.6', borderLeft: '2px solid #FA9B9A', paddingLeft: '16px' }}>
                        "Three unmarked delivery trucks loaded 50+ industrial cylinders (15kg) between 02:00 and 03:30 AM. No official manifest was presented. Vehicles headed toward the Northern bypass. Local distributor #D-998 seen coordinating."
                     </p>
                  </div>
                  
                  <div>
                     <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>PHOTO EVIDENCE (FRAME 042)</span>
                     <div style={{ width: '100%', height: '180px', background: '#111319', borderRadius: '8px', border: '1px solid #252A3D', position: 'relative', overflow: 'hidden' }}>
                        {/* Simulated Industrial Photo (Wireframe Placeholder) */}
                        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: 'linear-gradient(135deg, #1f2937 25%, transparent 25%) -50px 0, linear-gradient(225deg, #1f2937 25%, transparent 25%) -50px 0, linear-gradient(315deg, #1f2937 25%, transparent 25%), linear-gradient(45deg, #1f2937 25%, transparent 25%)', backgroundSize: '100px 100px', backgroundColor: '#111319' }}></div>
                        <div style={{ position: 'absolute', top: '12px', left: '12px', color: '#FFFFFF', fontSize: '9px', fontFamily: 'monospace', textShadow: '0 1px 2px black' }}>GPS: 40.7128° N, 74.0060° W</div>
                        <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: '#FFFFFF', fontSize: '9px', fontFamily: 'monospace', textShadow: '0 1px 2px black' }}>TIMESTAMP: 2023-11-24T02:44:12Z<br/>CAMERA_ID: ANONYMOUS_APP_EXT</div>
                        <div style={{ position: 'absolute', right: '12px', top: '12px', width: '24px', height: '24px', borderRadius: '50%', background: '#FA9B9A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                     </div>
                  </div>
               </div>

               {/* Map & Tags */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ width: '100%', height: '160px', background: '#111319', borderRadius: '8px', border: '1px solid #252A3D', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     {/* Circular map radar effect */}
                     <div style={{ width: '120px', height: '120px', border: '1px dashed #374151', borderRadius: '50%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '30px', height: '30px', background: 'rgba(250, 155, 154, 0.2)', border: '1px solid #FA9B9A', borderRadius: '4px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                           <div style={{ width: '4px', height: '4px', background: '#FA9B9A', borderRadius: '50%' }}></div>
                        </div>
                     </div>
                     <span style={{ position: 'absolute', bottom: '12px', left: '12px', fontSize: '9px', fontWeight: 'bold', color: '#9CA3AF', letterSpacing: '0.1em' }}>SECTOR_GRID_MAP_V4</span>
                  </div>

                  <div>
                     <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: 'bold', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>EXTRACTED CYLINDER IDS</span>
                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ background: '#111319', border: '1px solid #252A3D', padding: '12px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <span style={{ fontSize: '11px', color: '#FFFFFF', fontFamily: 'monospace' }}>#LPG-CN-4402</span>
                           <span style={{ fontSize: '9px', color: '#FA9B9A', fontWeight: 'bold' }}>STOLEN</span>
                        </div>
                        <div style={{ background: '#111319', border: '1px solid #252A3D', padding: '12px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <span style={{ fontSize: '11px', color: '#FFFFFF', fontFamily: 'monospace' }}>#LPG-CN-4409</span>
                           <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold' }}>UNTRACKED</span>
                        </div>
                        <div style={{ background: '#111319', border: '1px solid #252A3D', padding: '12px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <span style={{ fontSize: '11px', color: '#FFFFFF', fontFamily: 'monospace' }}>#LPG-CN-4412</span>
                           <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold' }}>UNTRACKED</span>
                        </div>
                        <div style={{ background: '#111319', border: '1px solid #252A3D', padding: '12px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <span style={{ fontSize: '11px', color: '#FFFFFF', fontFamily: 'monospace' }}>#LPG-CN-4415</span>
                           <span style={{ fontSize: '9px', color: '#FA9B9A', fontWeight: 'bold' }}>STOLEN</span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            {/* CORROBORATION ENGINE BOTTOM */}
            <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '0.1em' }}><Zap size={14} color="#FA9B9A"/> CORROBORATION ENGINE SUMMARY</span>
                  <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.1em' }}>ALGORITHM V2.4 ACTIVE</span>
               </div>
               
               <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)', gap: '16px' }}>
                  
                  <div style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>TOP ENTITY FLAG</span>
                        <span style={{ fontSize: '10px', background: '#7F1D1D', color: '#FA9B9A', padding: '2px 4px', borderRadius: '4px', fontWeight: 'bold' }}>98.2</span>
                     </div>
                     <h4 style={{ fontSize: '14px', color: '#FFFFFF', margin: '0 0 8px 0' }}>Distributor #402</h4>
                     <p style={{ fontSize: '11px', color: '#9CA3AF', margin: 0, lineHeight: '1.4' }}>Cross-referenced with 14 independent reports in Sector 7.</p>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                        <span style={{ fontSize: '10px', color: '#FA9B9A', fontWeight: 'bold' }}>AUTO-ESCALATION</span>
                        <span style={{ fontSize: '10px', color: '#FFFFFF', border: '1px solid #4B5563', padding: '2px 8px', borderRadius: '4px' }}>ACTIVE</span>
                     </div>
                  </div>

                  <div style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>SUSPICIOUS HUB</span>
                        <span style={{ fontSize: '10px', background: '#9A3412', color: '#FFFFFF', padding: '2px 4px', borderRadius: '4px', fontWeight: 'bold' }}>76.5</span>
                     </div>
                     <h4 style={{ fontSize: '14px', color: '#FFFFFF', margin: '0 0 8px 0' }}>North Logistics Pt</h4>
                     <p style={{ fontSize: '11px', color: '#9CA3AF', margin: 0, lineHeight: '1.4' }}>Movement patterns deviate from baseline industrial usage.</p>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                        <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold' }}>MONITORING ONLY</span>
                        <Eye size={14} color="#6B7280"/>
                     </div>
                  </div>

                  <div style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>IDENTITY ANOMALY</span>
                        <span style={{ fontSize: '10px', background: '#4B5563', color: '#FFFFFF', padding: '2px 4px', borderRadius: '4px', fontWeight: 'bold' }}>44.1</span>
                     </div>
                     <h4 style={{ fontSize: '14px', color: '#FFFFFF', margin: '0 0 8px 0' }}>Consumer Cluster 09</h4>
                     <p style={{ fontSize: '11px', color: '#9CA3AF', margin: 0, lineHeight: '1.4' }}>Multiple accounts registered to non-existent addresses.</p>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                        <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold' }}>UNDER REVIEW</span>
                        <span style={{ fontSize: '12px', color: '#6B7280' }}>...</span>
                     </div>
                  </div>

               </div>
            </div>

         </div>

      </div>
   );
};

export default ReportsTab;
