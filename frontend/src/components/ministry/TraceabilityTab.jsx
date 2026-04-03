import React from 'react';
import { Search, MapPin, Box, Truck, AlertTriangle, User, Download, Flag, Eye } from 'lucide-react';

const RECENT_ALERTS = [
   { id: 'LPG-BZ-109', time: '02m ago', title: 'GPS Variance Detected: 12km', tag: 'HIGH URGENCY' },
   { id: 'LPG-AX-442', time: '14m ago', title: 'Duplicate Seal ID Detected', tag: 'INVESTIGATION REQ.' },
   { id: 'LPG-TR-881', time: '28m ago', title: 'Rapid Succession Scan: 5s', tag: 'BOT BEHAVIOR' },
];

const TraceabilityTab = () => {
   return (
      <div style={{ padding: '24px 32px', display: 'flex', gap: '32px', flex: 1, overflowY: 'auto' }}>
         
         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* SEARCH FRAME */}
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px' }}><Search size={14} /> CYLINDER IDENTIFICATION SEARCH</span>
                  <span style={{ fontSize: '10px', color: '#6B7280', letterSpacing: '0.05em' }}>READY: 0.02ms LATENCY</span>
               </div>
               
               <input 
                  type="text" 
                  placeholder="ENTER SERIAL NUMBER (E.G. LPG-AX-99420)..." 
                  style={{ width: '100%', background: '#111319', border: '1px solid #252A3D', padding: '16px', borderRadius: '4px', color: '#FFFFFF', fontSize: '12px', outline: 'none', marginBottom: '16px', letterSpacing: '0.05em' }}
               />
               
               <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ background: '#252A3D', color: '#9CA3AF', fontSize: '10px', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer' }}>LPG-AX-99420</span>
                  <span style={{ background: '#252A3D', color: '#9CA3AF', fontSize: '10px', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer' }}>LPG-BZ-10291</span>
                  <span style={{ background: '#252A3D', color: '#9CA3AF', fontSize: '10px', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer' }}>LPG-CY-44822</span>
               </div>
            </div>

            {/* AUDIT TIMELINE */}
            <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '32px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                  <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em' }}>JOURNEY AUDIT TIMELINE: <span style={{ color: '#FA9B9A' }}>LPG-AX-99420</span></span>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '10px', color: '#9CA3AF', letterSpacing: '0.05em' }}>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '6px', background: '#DEB887', borderRadius: '50%' }}></div> VERIFIED</span>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '6px', background: '#FA9B9A', borderRadius: '50%' }}></div> ANOMALY</span>
                  </div>
               </div>

               <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', padding: '0 24px' }}>
                  <div style={{ position: 'absolute', top: '24px', left: '48px', right: '48px', height: '2px', background: '#252A3D', zIndex: 0 }}></div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1, width: '120px' }}>
                     <div style={{ width: '48px', height: '48px', background: '#2E1015', border: '1px solid #7F1D1D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Box color="#DEB887" size={20}/></div>
                     <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#FFFFFF', letterSpacing: '0.05em', textAlign: 'center' }}>BOTTLING PLANT</span>
                     <span style={{ fontSize: '9px', color: '#9CA3AF', textAlign: 'center' }}>OCT 12, 09:40<br/>12.98, 77.59</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1, width: '120px' }}>
                     <div style={{ width: '48px', height: '48px', background: '#2E1015', border: '1px solid #7F1D1D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Truck color="#DEB887" size={20}/></div>
                     <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#FFFFFF', letterSpacing: '0.05em', textAlign: 'center' }}>DEPOT DISPATCH</span>
                     <span style={{ fontSize: '9px', color: '#9CA3AF', textAlign: 'center' }}>OCT 14, 11:22<br/>13.01, 77.62</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1, width: '120px' }}>
                     <div style={{ width: '48px', height: '48px', background: '#7F1D1D', border: '2px solid #FA9B9A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="ministry-glow-red"><AlertTriangle color="#FA9B9A" size={20}/></div>
                     <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#FA9B9A', letterSpacing: '0.05em', textAlign: 'center' }}>DISTRIBUTOR REC.</span>
                     <span style={{ fontSize: '9px', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>MISSING SCAN<br/><span style={{ color: '#6B7280', fontWeight: 'normal' }}>EST. OCT 15</span></span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1, width: '120px', opacity: 0.3 }}>
                     <div style={{ width: '48px', height: '48px', background: '#111319', border: '1px solid #252A3D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin color="#6B7280" size={20}/></div>
                     <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#FFFFFF', letterSpacing: '0.05em', textAlign: 'center' }}>AGENT PICKUP</span>
                     <span style={{ fontSize: '9px', color: '#6B7280', textAlign: 'center' }}>PENDING</span>
                  </div>
               </div>
            </div>

            {/* ASSET INTEL & LOC */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)', gap: '24px' }}>
               
               <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                     <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em' }}>ASSET INTELLIGENCE CARD</span>
                     <span style={{ background: '#7F1D1D', color: '#FFFFFF', padding: '2px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: 'bold' }}>STATUS: DIVERSION WARNING</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                     <div>
                        <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>CYLINDER SERIAL</span>
                        <span style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: '900', letterSpacing: '0.05em' }}>LPG-AX-99420</span>
                     </div>
                     <div>
                        <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>BATCH REFERENCE</span>
                        <span style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: '900', letterSpacing: '0.05em' }}>BT-2023-X9</span>
                     </div>
                     <div>
                        <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>PRIMARY DISTRIBUTOR</span>
                        <span style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold', display: 'block', marginBottom: '2px' }}>APEX ENERGY SOLUTIONS LTD.</span>
                        <span style={{ fontSize: '10px', color: '#9CA3AF' }}>LICENSE #44192-A</span>
                     </div>
                     <div>
                        <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>LAST VERIFIED SCAN</span>
                        <span style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold', display: 'block', marginBottom: '2px' }}>4 DAYS, 12 HOURS AGO</span>
                        <span style={{ fontSize: '10px', color: '#9CA3AF' }}>THRESHOLD EXCEEDED</span>
                     </div>
                  </div>

                  <div style={{ background: '#111319', border: '1px solid #252A3D', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
                     <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>TARGET CONSUMER DATA</span>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '40px', height: '40px', background: '#252A3D', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User color="#9CA3AF" size={20}/></div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                           <span style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold' }}>Johnathan H. (ID: 0021-X)</span>
                           <span style={{ fontSize: '11px', color: '#9CA3AF' }}>Sector 12, Urban District - Residence #402</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                           <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.05em' }}>SUBSIDY STATUS</span>
                           <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold' }}>ACTIVE ELIGIBLE</span>
                        </div>
                     </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                     <button style={{ flex: 1, background: '#111319', border: '1px solid #4B5563', color: '#FFFFFF', padding: '14px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}><Download size={14}/> EXPORT DOSSIER</button>
                     <button style={{ flex: 1.5, background: '#991B1B', border: '1px solid #EF4444', color: '#FFFFFF', padding: '14px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', letterSpacing: '0.05em' }}><Flag size={14}/> FLAG SUSPICIOUS ACTIVITY</button>
                  </div>
               </div>

               <div style={{ background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '16px' }}>LOCATION VISUALIZATION</span>
                  <div style={{ flex: 1, background: '#111319', border: '1px solid #252A3D', borderRadius: '6px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                     <div style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '15px 15px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                     <div style={{ width: '80px', height: '80px', border: '1px dashed #FA9B9A', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '8px', height: '8px', background: '#FA9B9A', borderRadius: '50%', boxShadow: '0 0 10px #FA9B9A' }} className="ministry-red-pulse"></div>
                     </div>
                  </div>
                  <span style={{ fontSize: '10px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.05em', display: 'block', textAlign: 'center' }}>LAST KNOWN: SECTOR 7 DEPOT</span>
               </div>
            </div>
         </div>

         {/* SIDEBAR RECENT ALERTS */}
         <div style={{ width: '280px', background: '#171923', border: '1px solid #252A3D', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '24px 20px', borderBottom: '1px solid #252A3D', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '0.1em', lineHeight: '1.4' }}>RECENT SUSPICIOUS ALERTS</span>
               <span style={{ background: '#FA9B9A', color: '#7F1D1D', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 'bold' }}>10</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
               {RECENT_ALERTS.map(alert => (
                  <div key={alert.id} style={{ background: 'transparent', padding: '20px', borderBottom: '1px solid #252A3D', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer', transition: 'background 0.2s ease' }} className="ministry-card-lift">
                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '10px', color: '#FFFFFF', fontWeight: 'bold', fontFamily: 'monospace' }}>{alert.id}</span>
                        <span style={{ fontSize: '9px', color: '#6B7280' }}>{alert.time}</span>
                     </div>
                     <span style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: '1.4' }}>{alert.title}</span>
                     <span style={{ fontSize: '9px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.05em' }}>{alert.tag}</span>
                  </div>
               ))}
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '10px', color: '#6B7280' }}>LPG-GH-002</span><span style={{ fontSize: '10px', color: '#9CA3AF' }}>Unusual Volume</span></div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '10px', color: '#6B7280' }}>LPG-BZ-552</span><span style={{ fontSize: '10px', color: '#9CA3AF' }}>Inactive 30d+</span></div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '10px', color: '#6B7280' }}>LPG-XC-990</span><span style={{ fontSize: '10px', color: '#9CA3AF' }}>Route Deviation</span></div>
            </div>

            <button style={{ margin: 'auto 20px 20px 20px', background: '#252A3D', color: '#FFFFFF', border: '1px solid #4B5563', padding: '12px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }}>VIEW ALL FLAGGED RECORDS</button>
         </div>

      </div>
   );
};

export default TraceabilityTab;
