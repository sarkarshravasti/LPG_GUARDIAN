import React, { useState } from 'react';
import { MapPin, Battery, Flame, Navigation, Clock, Search, AlertCircle, TrendingDown, CheckCircle, ShieldAlert } from 'lucide-react';
import { MOCK_DISTRIBUTORS } from '../data/mockData';

const UserApp = () => {
  const [selectedArea, setSelectedArea] = useState('Mumbai');
  const [bookings, setBookings] = useState(0);
  const [showFraudBlock, setShowFraudBlock] = useState(false);
  const [successBooking, setSuccessBooking] = useState(false);

  const filteredDistributors = MOCK_DISTRIBUTORS.filter(d => d.region === selectedArea);
  const regions = ["Mumbai", "Delhi", "Chennai", "Kolkata"]; 

  const handleBook = () => {
    if (bookings >= 2) {
      setShowFraudBlock(true);
    } else {
      setBookings(bookings + 1);
      setSuccessBooking(true);
      setTimeout(() => setSuccessBooking(false), 2000);
    }
  };

  return (
    <div className="flex-col gap-6 min-h-screen" style={{ margin: '0 auto', height: 'calc(100vh - 80px)', overflowY: 'auto', backgroundColor: '#f1f5f9' }}>
      
      <div className="flex-col max-w-[600px] w-full mx-auto p-4 gap-6 pt-8">

          {/* Header Container */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center flex-col gap-3 relative overflow-hidden">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, var(--brand-saffron), var(--brand-white), var(--brand-green))' }}></div>
            
            <h1 className="relative z-10 m-0 text-primary font-black tracking-tight text-3xl">LPG Consumer Hub</h1>
            <p className="text-xs uppercase relative z-10 font-black mb-6 tracking-widest text-saffron">Aadhaar Verified Grid Location</p>
            
            <div className="flex-row gap-3 bg-slate-50 border border-gray-200 p-4 rounded-xl shadow-inner group transition-all hover:bg-white hover:border-gray-300">
              <MapPin size={24} className="text-saffron group-hover:scale-110 transition shrink-0" />
              <select 
                value={selectedArea} 
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full bg-transparent text-primary font-black focus:outline-none cursor-pointer"
                style={{ fontSize: '1.25rem' }}
              >
                {regions.map(r => (
                   <option key={r} value={r}>{r} Metropolitan Zone</option>
                ))}
              </select>
            </div>
          </div>

          {/* Dynamic Alerts based on Area */}
          {selectedArea === 'Chennai' ? (
            <div className="bg-red-50 flex-row gap-5 p-6 items-start shadow-md" style={{ borderRadius: '1.5rem', border: '1px solid #fecaca', borderLeft: '8px solid var(--status-red)', background: '#fef2f2' }}>
              <AlertCircle className="text-red pulse-alert mt-1 shrink-0" size={32} />
              <div className="flex-col gap-2">
                <span className="font-black text-red text-xl uppercase tracking-tight m-0 leading-none">Critical Shortage Alert</span>
                <span className="text-xs font-black text-red opacity-80 uppercase tracking-widest">Nodal Rationing Engaged</span>
                <span className="text-sm text-red mt-1 font-bold leading-relaxed opacity-90">Secure remaining stock immediately, or switch to Induction hubs to prevent service delays.</span>
              </div>
            </div>
          ) : (
            <div className="bg-green-50 flex-row gap-5 p-6 items-center shadow-md" style={{ borderRadius: '1.5rem', border: '1px solid #bbf7d0', borderLeft: '8px solid var(--brand-green)', background: '#f0fdf4' }}>
              <CheckCircle className="text-green mt-1 shrink-0" size={32} />
              <div className="flex-col gap-1">
                <span className="font-black text-green text-xl uppercase tracking-tight m-0 leading-none">Supply Chain Nominal</span>
                <span className="text-sm font-bold text-green mt-1 opacity-90">Logistics metrics report normal behavior in {selectedArea}. You can place normal bookings.</span>
              </div>
            </div>
          )}

          {/* Smart Suggestions */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex-col gap-5">
            <h3 className="flex-row gap-3 m-0 text-primary font-black text-lg border-b pb-4 border-gray-100 uppercase tracking-widest"><Flame className="text-saffron" size={24} /> Recommended Alternatives</h3>
            
            <div className="flex-row gap-4">
              <div className="flex-col bg-blue-50 bg-opacity-[0.05] p-5 rounded-2xl flex-1 text-center border-b-4 border-blue hover:-translate-y-1 transition duration-200 cursor-pointer shadow-sm" style={{ background: '#f0f9ff' }}>
                 <Battery className="text-blue mx-auto mb-3" size={36} />
                 <span className="font-black text-md text-blue tracking-tight">Electric Induction</span>
                 <span className="text-[10px] uppercase font-black text-green mt-2 bg-green bg-opacity-20 px-2 py-1 flex justify-center mx-auto rounded border border-green" style={{ width: 'max-content' }}>14% Govt Subsidy</span>
              </div>
              <div className="flex-col bg-green-50 bg-opacity-[0.05] p-5 rounded-2xl flex-1 text-center border-b-4 border-green hover:-translate-y-1 transition duration-200 cursor-pointer shadow-sm" style={{ background: '#f0fdf4' }}>
                 <TrendingDown className="text-green mx-auto mb-3" size={36} />
                 <span className="font-black text-md text-green tracking-tight">City Biogas Line</span>
                 <span className="text-[10px] uppercase font-black text-green mt-2 bg-green bg-opacity-20 px-2 py-1 flex justify-center mx-auto rounded border border-green" style={{ width: 'max-content' }}>Instant Output</span>
              </div>
            </div>
          </div>

          {/* Nearby Distributors */}
          <div className="flex-col gap-6 mt-4 pb-12">
            <h3 className="text-primary font-black flex-row justify-between items-center m-0 uppercase tracking-widest px-2 text-sm border-b border-gray-300 pb-2">
               Verified Local Hubs 
               <span className="text-xs bg-slate-200 text-slate-700 font-black px-3 py-1 rounded-full shadow-inner">{filteredDistributors.length}</span>
            </h3>
            
            {filteredDistributors.length === 0 ? (
               <p className="text-center font-black text-slate-400 m-4 bg-white p-8 rounded-3xl border-2 border-dashed border-slate-300">No dispatch hubs active in your selected radius.</p>
            ) : (
               filteredDistributors.map(dist => (
                <div key={dist.id} className="bg-white flex-col rounded-3xl border border-gray-200 shadow-md overflow-hidden transition relative" style={{ transform: 'translateZ(0)' }}>
                  
                  {dist.status === 'OUT' && <div className="absolute inset-0 bg-red bg-opacity-[0.03] z-0 pointer-events-none"></div>}

                  <div className="p-6 pb-4 relative z-10 flex-col gap-1 border-b border-gray-100">
                    <span className="font-black text-primary text-2xl tracking-tight m-0">{dist.name}</span>
                    <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest flex-row items-center gap-2"><div style={{ width: 6, height: 6, background: '#cbd5e1', borderRadius: '50%'}}></div> NODE ID: {Math.floor(Math.random() * 8000) + 1000}</span>
                  </div>
                  
                  {/* Neatly Padded Metric Ribbon Component */}
                  <div className="flex-row bg-slate-50 relative z-10">
                     <div className="flex-1 flex-col p-4 border-r border-gray-200 text-center gap-2 justify-center">
                        <span className="text-[10px] uppercase text-gray-500 font-black tracking-widest">Route Distance</span>
                        <span className="font-black text-primary text-xl flex-row items-center justify-center gap-1"><Navigation size={14} className="text-saffron"/> {dist.distance}</span>
                     </div>
                     <div className="flex-1 flex-col p-4 border-r border-gray-200 text-center gap-2 justify-center">
                        <span className="text-[10px] uppercase text-gray-500 font-black tracking-widest">Est. Wait</span>
                        <span className="font-black text-yellow text-xl flex-row items-center justify-center gap-1" style={{ color: '#d97706' }}><Clock size={14}/> {dist.waitTime}</span>
                     </div>
                     <div className="flex-1 flex-col p-4 text-center gap-2 justify-center">
                        <span className="text-[10px] uppercase text-gray-500 font-black tracking-widest">Live Stock</span>
                        {dist.status === 'HIGH' && <span className="font-black text-green text-xl">Stable ✅</span>}
                        {dist.status === 'LOW' && <span className="font-black text-yellow text-xl" style={{ color: '#b45309' }}>Rationing</span>}
                        {dist.status === 'OUT' && <span className="font-black text-red text-xl">Depleted 🛑</span>}
                     </div>
                  </div>

                  <div className="p-5 flex-col gap-3 bg-white relative z-10">
                    <div className="flex-row justify-between items-center w-full px-1">
                       <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">Total Supplied: <span className="text-gray-600">{dist.supply_received} MT</span></span>
                       <span className="text-[10px] font-black uppercase tracking-wider text-green px-2 py-1 rounded bg-green bg-opacity-10 border border-green">KYC Verified</span>
                    </div>

                    {dist.status !== 'OUT' ? (
                      <button onClick={handleBook} className="btn bg-saffron text-white py-3 w-full rounded-xl font-black shadow-md border-b-4 border-orange-700 hover:bg-orange-[600] uppercase tracking-wider transition text-sm">
                         Lock In Cylinder Booking
                      </button>
                    ) : ( 
                      <button className="btn bg-slate-100 text-slate-400 py-3 w-full rounded-xl font-black cursor-not-allowed uppercase tracking-wider border border-slate-200 text-sm">
                         Cannot Dispense Due to Stock
                      </button>
                    )}
                  </div>

                </div>
               ))
            )}
          </div>
          
      </div>

      {/* Absolute Overlays for Interactive States */}
      {successBooking && (
         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl flex-col text-center border-b-[8px] border-green shadow-2xl z-50 w-[350px]">
            <CheckCircle className="text-green mx-auto mb-4 pulse-alert" size={64} />
            <span className="font-black text-primary text-2xl tracking-tight mb-2">Booking Verified!</span>
            <span className="text-sm font-black text-gray-500 bg-slate-50 p-4 rounded-xl border border-gray-200 shadow-inner block uppercase tracking-widest leading-relaxed">System Tracking Code <br/><span className="text-lg text-primary my-1 inline-block">CYL-{Math.floor(Math.random() * 90000)}</span><br/> Linked to Aadhaar Vault</span>
         </div>
      )}

      {showFraudBlock && (
         <div className="fixed inset-0 flex-col justify-center items-center p-6 z-50" style={{ background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(10px)' }}>
            <div className="bg-white text-center flex-col gap-6 shadow-2xl p-10 rounded-3xl relative overflow-hidden w-full max-w-[450px]" style={{ border: '4px solid #b91c1c' }}>
               
               {/* Diagonal Hazard Background */}
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '12px', background: 'repeating-linear-gradient(45deg, #b91c1c, #b91c1c 10px, transparent 10px, transparent 20px)' }}></div>
               
               <ShieldAlert size={80} className="text-red mx-auto mt-6 pulse-alert" style={{ color: '#b91c1c' }} />
               <h2 className="text-red font-black m-0 tracking-tighter text-3xl uppercase">Federal Halt</h2>
               
               <p className="text-sm font-black leading-relaxed" style={{ color: 'white' }}>You have exceeded the strategic national rationing limit mandated by the Nodal Authority.</p>
               
               <div className="bg-red bg-opacity-[0.05] p-5 rounded-xl text-xs text-red font-black text-left border border-red flex-col items-start gap-3 shadow-inner">
                  <span className="bg-red text-white py-1 px-2 rounded-md uppercase tracking-widest flex w-full justify-between items-center">
                     AI Diagnostic Override <MapPin size={14}/>
                  </span>
                  <span className="leading-normal tracking-wide opacity-90">Suspicious accumulation vectors mathematically detected. This exact booking has been logged & reported for direct human review.</span>
               </div>
               
               <button onClick={() => { setShowFraudBlock(false); setBookings(0); }} className="btn py-4 bg-slate-800 text-white font-black hover:bg-black uppercase tracking-widest text-sm shadow-xl rounded-xl mt-4 w-full">
                 Acknowledge Limit Liability
               </button>
            </div>
         </div>
      )}

    </div>
  );
};

export default UserApp;
