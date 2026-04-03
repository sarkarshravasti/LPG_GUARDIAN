import React, { useState } from 'react';
import { 
  ShieldAlert, Activity, Users, Map as MapIcon, FileText, 
  Settings, Briefcase, Bell, Search
} from 'lucide-react';

import OverviewTab from '../components/ministry/OverviewTab';
import TraceabilityTab from '../components/ministry/TraceabilityTab';
import BehavioralTab from '../components/ministry/BehavioralTab';
import DistributorsTab from '../components/ministry/DistributorsTab';
import GhostAccountsTab from '../components/ministry/GhostAccountsTab';
import ReportsTab from '../components/ministry/ReportsTab';
import PolicyTab from '../components/ministry/PolicyTab';
import CasesTab from '../components/ministry/CasesTab';

const MinistryIntelligence = ({ onLogout }) => {
  const [activeNav, setActiveNav] = useState('Overview');
  
  const navItems = [
    { name: 'Overview', icon: <Activity size={16} /> },
    { name: 'Traceability', icon: <MapIcon size={16} /> },
    { name: 'Behavioral', icon: <Users size={16} /> },
    { name: 'Distributors', icon: <Briefcase size={16} /> },
    { name: 'Ghost Accounts', icon: <ShieldAlert size={16} /> },
    { name: 'Reports', icon: <FileText size={16} /> },
    { name: 'Policy', icon: <Settings size={16} /> },
    { name: 'Cases', icon: <Activity size={16} /> },
  ];

  const renderActiveTab = () => {
     switch(activeNav) {
        case 'Overview': return <OverviewTab />;
        case 'Traceability': return <TraceabilityTab />;
        case 'Behavioral': return <BehavioralTab />;
        case 'Distributors': return <DistributorsTab />;
        case 'Ghost Accounts': return <GhostAccountsTab />;
        case 'Reports': return <ReportsTab />;
        case 'Policy': return <PolicyTab />;
        case 'Cases': return <CasesTab />;
        default: return <OverviewTab />;
     }
  };

  const getSubHeader = () => {
     switch(activeNav) {
        case 'Overview': return 'Anti-Black Market Overview';
        case 'Traceability': return 'Asset Ledger & Audit Flow';
        case 'Behavioral': return 'Fraud Detection Engine';
        case 'Distributors': return 'Accountability Center';
        case 'Ghost Accounts': return 'Reverification Queue';
        case 'Reports': return 'Incoming Intelligence Feed';
        case 'Policy': return 'Dynamic Enforcement Panel';
        case 'Cases': return 'Case Management Center';
        default: return 'Monitoring Systems';
     }
  }

  return (
    <div className="ministry-dark-root" style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden', background: '#111319', color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 🧭 LEFT SIDEBAR */}
      <aside style={{ width: '220px', background: '#171923', borderRight: '1px solid #252A3D', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
        
        <div style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#7F1D1D', padding: '6px', borderRadius: '6px', border: '1px solid #991B1B' }}>
             <ShieldAlert size={18} color="#FA9B9A" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '18px', letterSpacing: '0.05em', fontWeight: '800', margin: 0, color: '#FA9B9A' }}>SENTINEL</h1>
            <span style={{ fontSize: '8px', letterSpacing: '0.15em', color: '#9CA3AF', fontWeight: 'bold' }}>LPG OVERSIGHT</span>
          </div>
        </div>

        <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto' }}>
          {navItems.map(item => {
            const isActive = activeNav === item.name;
            return (
              <button 
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '6px',
                  background: isActive ? 'rgba(250, 155, 154, 0.1)' : 'transparent',
                  color: isActive ? '#FA9B9A' : '#9CA3AF',
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  borderLeft: isActive ? '3px solid #FA9B9A' : '3px solid transparent',
                  fontWeight: isActive ? '600' : '500',
                  fontSize: '13px',
                  transition: 'all 0.2s ease'
                }}
              >
                {item.icon} {item.name}
              </button>
            );
          })}
        </nav>
        
        <div style={{ padding: '20px', borderTop: '1px solid #252A3D', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={onLogout}>
           <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: '#252A3D', border: '1px solid #4B5563', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <ShieldAlert size={14} color="#FA9B9A" />
           </div>
           <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#FFFFFF' }}>ID: SEN-402</span>
              <span style={{ fontSize: '9px', color: '#9CA3AF' }}>Level 5 Clearance (Logout)</span>
           </div>
        </div>
      </aside>

      {/* 🧠 MAIN CONTENT AREA */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* 🔝 TOP HEADER */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', background: '#111319', borderBottom: '1px solid #252A3D' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '14px', letterSpacing: '0.05em', fontWeight: '900', color: '#FFFFFF' }}>ANTI-BLACK MARKET INTELLIGENCE CENTER</span>
              <div style={{ height: '20px', width: '1px', background: '#252A3D' }}></div>
              <span style={{ fontSize: '11px', color: '#FA9B9A', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{getSubHeader()}</span>
           </div>
           
           <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                 <Bell color="#9CA3AF" size={18} style={{ cursor: 'pointer' }}/>
                 <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#252A3D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <span style={{ fontSize: '10px', color: '#9CA3AF' }}>L</span>
                 </div>
              </div>
              
              <button style={{ background: '#991B1B', border: '1px solid #DC2626', color: '#FFFFFF', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', letterSpacing: '0.05em' }} className="ministry-red-pulse">
                <div style={{ width: '6px', height: '6px', background: '#FA9B9A', borderRadius: '50%' }}></div> LIVE ALERTS
              </button>
           </div>
        </header>

        {/* 🔀 DYNAMIC TAB RENDER */}
        {renderActiveTab()}

        {/* 📢 BOTTOM TICKER OVERRIDE */}
        <div style={{ height: '28px', background: '#111319', borderTop: '1px solid #252A3D', display: 'flex', alignItems: 'center', overflow: 'hidden', flexShrink: 0 }}>
           <div style={{ background: '#7F1D1D', color: '#FA9B9A', height: '100%', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: '9px', fontWeight: 'bold', letterSpacing: '0.1em', zIndex: 10, borderRight: '1px solid #991B1B' }}>SYSTEM INTEGRITY: SECURE</div>
           <div style={{ flex: 1, overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <div className="ministry-ticker-text" style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                 <span style={{ color: '#FA9B9A' }}>⚠️ FRAUD ALERT: UNUSUAL VOLUME DETECTED IN SECTOR 7</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <span style={{ color: '#9CA3AF' }}>● CRITICAL: DISTRIBUTOR #402 OFF-LINE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <span style={{ color: '#9CA3AF' }}>● NEW CASE: IDENTITY ANOMALY DETECTED</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <span style={{ color: '#FA9B9A' }}>⚠️ FRAUD ALERT: UNUSUAL VOLUME DETECTED IN SECTOR 7</span>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default MinistryIntelligence;
