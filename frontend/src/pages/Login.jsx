import React, { useState } from 'react';
import { Shield, User, Truck, Zap, Lock, AlertCircle, HelpCircle, Eye } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [selectedPortal, setSelectedPortal] = useState(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePortalSelect = (portal) => {
    setSelectedPortal(portal);
    setPassword('');
    setError('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (selectedPortal === 'ministry' && password === '999') {
      onLogin('ministry');
    } else if (selectedPortal === 'govt' && password === '123') {
      onLogin('govt');
    } else if (selectedPortal === 'distributor' && password === '1234') {
      onLogin('distributor');
    } else if (selectedPortal === 'user' && password.length > 0) {
      onLogin('user'); // Any password for User per spec
    } else {
      setError('Invalid Authentication Credentials.');
    }
  };

  if (selectedPortal) {
    return (
      <div className="flex-col justify-center h-screen w-full relative" style={{ alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--brand-saffron), var(--brand-white), var(--brand-green))' }}></div>
        <div className="glass-panel flex-col gap-6" style={{ width: '380px', padding: '2rem' }}>
          
          <button onClick={() => handlePortalSelect(null)} className="btn btn-outline" style={{ width: 'fit-content', padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>&larr; Back</button>
          
          <div className="text-center flex-col gap-2">
            {selectedPortal === 'govt' && <Shield size={42} className="text-saffron mx-auto" />}
            {selectedPortal === 'distributor' && <Truck size={42} className="text-primary mx-auto" />}
            {selectedPortal === 'user' && <User size={42} className="text-green mx-auto" />}
            
            <h2 className="m-0 text-primary">
              {selectedPortal === 'ministry' && 'Sentinel Intelligence Root Access'}
              {selectedPortal === 'govt' && 'Nodal Agency Authentication'}
              {selectedPortal === 'distributor' && 'Supplier Gateway'}
              {selectedPortal === 'user' && 'Consumer Profile Gateway'}
            </h2>
            <p className="text-xs text-secondary mb-4">Secured via National Energy Grid Identity Vault</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="flex-col gap-4">
             {error && (
                <div className="bg-red text-red p-2 rounded text-xs flex-row gap-2">
                   <AlertCircle size={16} /> {error}
                </div>
             )}
             
             <div className="flex-col gap-1">
                <label className="text-xs font-bold text-secondary">Aadhaar Vault / Department ID</label>
                <input type="text" className="input-field" defaultValue={selectedPortal === 'ministry' ? 'HQ-SENTINEL-ROOT' : selectedPortal === 'govt' ? 'NODAL-992A' : selectedPortal === 'distributor' ? 'DIST-MUM-01' : 'USER-CYL-88X'} disabled />
             </div>

             <div className="flex-col gap-1">
                <label className="text-xs font-bold text-secondary">Security PIN / Password</label>
                <div className="relative">
                   <Lock size={16} className="text-muted absolute" style={{ top: '12px', left: '12px' }} />
                   <input 
                     type="password" 
                     className="input-field" 
                     style={{ paddingLeft: '36px' }} 
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)} 
                     placeholder="Enter your secure PIN"
                     autoFocus
                   />
                </div>
             </div>

             <button type="submit" className={`btn mt-2 ${selectedPortal === 'ministry' ? '' : selectedPortal === 'govt' ? 'btn-primary' : selectedPortal === 'user' ? 'btn-secondary' : 'btn-primary'}`} style={{ backgroundColor: selectedPortal === 'ministry' ? '#0A0F1E' : selectedPortal === 'distributor' ? 'var(--brand-primary)' : '', color: 'white' }}>
                Secure Login
             </button>
          </form>

        </div>
      </div>
    );
  }

  return (
    <div className="flex-col justify-center h-screen w-full relative" style={{ alignItems: 'center' }}>
      
      {/* Background Indian Decor */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '8px', background: 'linear-gradient(90deg, var(--brand-saffron) 33%, var(--brand-white) 33%, var(--brand-white) 66%, var(--brand-green) 66%)' }}></div>

      <div className="glass-panel flex-col text-center gap-6" style={{ width: '400px', zIndex: 10, padding: '3rem 2rem' }}>
        
        <div className="flex-col gap-2 align-center justify-center">
            <div className="flex-row justify-center mb-2">
               <Zap size={48} className="text-saffron" />
            </div>
            <h1>LPG Guardian</h1>
            <p className="text-muted text-sm">Smart Crisis Management & Anti-Hoarding Network</p>
        </div>

        <div className="flex-col gap-4 mt-4">
           <p className="text-sm font-bold text-left text-muted mb-2">Select Access Portal</p>
           
           <button onClick={() => handlePortalSelect('ministry')} className="btn glass-card flex-row gap-4 justify-between transition-shadow">
              <div className="flex-row gap-3">
                 <div className="p-2 rounded-md" style={{ background: 'rgba(250, 155, 154, 0.1)' }}><Eye className="text-primary" size={24}/></div>
                 <div className="flex-col text-left">
                    <span className="font-bold text-primary">Ministry of Petroleum (HQ)</span>
                 </div>
              </div>
              <Lock size={16} className="text-muted" />
           </button>

           <button onClick={() => handlePortalSelect('govt')} className="btn glass-card flex-row gap-4 justify-between transition-shadow">
              <div className="flex-row gap-3">
                 <div className="p-2 rounded-md" style={{ background: 'rgba(255, 153, 51, 0.1)' }}><Shield className="text-saffron" size={24}/></div>
                 <div className="flex-col text-left">
                    <span className="font-bold text-primary">Government Agency</span>
                 </div>
              </div>
              <Lock size={16} className="text-muted" />
           </button>

           <button onClick={() => handlePortalSelect('distributor')} className="btn glass-card flex-row gap-4 justify-between">
              <div className="flex-row gap-3">
                 <div className="p-2 rounded-md" style={{ background: 'rgba(37, 99, 235, 0.1)' }}><Truck className="text-blue" size={24}/></div>
                 <div className="flex-col text-left">
                    <span className="font-bold text-primary">Supplier / Distributor</span>
                 </div>
              </div>
              <Lock size={16} className="text-muted" />
           </button>

           <button onClick={() => handlePortalSelect('user')} className="btn glass-card flex-row gap-4 justify-between">
              <div className="flex-row gap-3">
                 <div className="p-2 rounded-md" style={{ background: 'rgba(19, 136, 8, 0.1)' }}><User className="text-india-green" size={24}/></div>
                 <div className="flex-col text-left">
                    <span className="font-bold text-primary">Citizen Portal</span>
                 </div>
              </div>
              <Lock size={16} className="text-muted" />
           </button>

        </div>
        
        <div className="mt-4 text-xs flex-col align-center justify-center border-t border-color pt-4 gap-2">
           <a href="#" className="flex-row gap-2 text-primary font-bold hover:underline justify-center"><HelpCircle size={14}/> Need Help? Contact Support (1906 / 1800-2333-555)</a>
           <span className="text-muted">Managed by Ministry of Petroleum</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
