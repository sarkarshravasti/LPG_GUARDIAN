import React, { useState } from 'react';
import Login from './pages/Login';
import GovDashboard from './pages/GovDashboard';
import UserApp from './pages/UserApp';
import DistributorPanel from './pages/DistributorPanel';
import FraudDetection from './components/FraudDetection';
import MinistryIntelligence from './pages/MinistryIntelligence';
import { LayoutDashboard, Smartphone, Factory, ShieldCheck, Zap, LogOut } from 'lucide-react';
import './index.css';

function App() {
  const [role, setRole] = useState(null); // 'govt', 'user', 'distributor', or null
  const [activeTab, setActiveTab] = useState('govt');

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    setActiveTab(selectedRole === 'govt' ? 'govt' : selectedRole);
  };

  const handleLogout = () => {
    setRole(null);
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  if (role === 'ministry') {
    return <MinistryIntelligence onLogout={handleLogout} />;
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'govt': return <GovDashboard />;
      case 'user': return <UserApp />;
      case 'distributor': return <DistributorPanel />;
      case 'fraud': return <FraudDetection />;
      default: return <GovDashboard />;
    }
  };

  return (
    <div className="flex-col w-full h-screen overflow-hidden">
      
      {/* Top Navigation Bar */}
      <nav className="glass-panel flex-row justify-between p-4" style={{ borderRadius: 0, borderBottom: '1px solid var(--border-color)', borderTop: 0, borderLeft: 0, borderRight: 0, zIndex: 50, background: 'rgba(12, 17, 28, 0.8)' }}>
        
        <div className="flex-row gap-3">
          <div style={{ padding: '8px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--brand-saffron), var(--brand-green))' }}>
            <Zap className="text-white" size={24} />
          </div>
          <div className="flex-col">
            <h2 className="font-bold m-0" style={{ fontSize: '1.2rem', margin: 0, background: 'linear-gradient(90deg, var(--brand-saffron), white, var(--brand-green))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
               LPG Guardian
            </h2>
            <span className="text-xs text-secondary">Smart Crisis Management</span>
          </div>
        </div>

        {/* Dynamic Navigation per Role */}
        <div className="flex-row gap-4">
          
          {role === 'govt' && (
            <>
              <button onClick={() => setActiveTab('govt')} className={`btn flex-row gap-2 ${activeTab === 'govt' ? 'bg-secondary text-white border-b-2 border-saffron' : 'btn-outline text-muted'}`} style={{ border: activeTab !== 'govt' ? 'none' : '', borderBottom: activeTab==='govt' ? '2px solid var(--brand-saffron)' : 'none', borderRadius: activeTab==='govt'? '0.5rem 0.5rem 0 0' : '0.5rem' }}>
                <LayoutDashboard size={18} /> Central Dashboard
              </button>
              <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)', margin: '0 8px' }}></div>
              <button onClick={() => setActiveTab('fraud')} className={`btn flex-row gap-2 ${activeTab === 'fraud' ? 'btn-primary pulse-alert text-white' : 'btn-outline border-saffron text-saffron'}`} style={{ border: activeTab !== 'fraud' ? '1px solid var(--brand-saffron)' : 'none' }}>
                <ShieldCheck size={18} /> AI Fraud Engine
              </button>
            </>
          )}

          {role === 'user' && (
            <button className="btn bg-secondary text-white border-b-2" style={{ borderBottom: '2px solid var(--brand-green)', borderRadius: '0.5rem 0.5rem 0 0' }}>
              <Smartphone size={18} /> Consumer Portal
            </button>
          )}

          {role === 'distributor' && (
            <button className="btn bg-secondary text-white border-b-2" style={{ borderBottom: '2px solid var(--brand-primary)', borderRadius: '0.5rem 0.5rem 0 0' }}>
              <Factory size={18} /> Distributor Portal
            </button>
          )}
          
          <button onClick={handleLogout} className="btn btn-outline text-muted ml-4 hover:text-red">
            <LogOut size={18} /> Logout
          </button>
        </div>

      </nav>

      {/* Main Content Area */}
      <div className="w-full flex-1 relative" style={{ overflow: 'hidden' }}>
         <div className="relative z-10 h-full w-full">
            {renderContent()}
         </div>
      </div>
    </div>
  );
}

export default App;
