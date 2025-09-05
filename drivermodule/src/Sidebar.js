import React from 'react';

function Sidebar({ setCurrentPage }) {
  return (
    <div className="sidebar" style={{ 
      width: '200px', 
      backgroundColor: '#1B4332',
      color: 'white',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <div className="logo">JMTC</div>
      <div 
        className="menu-item" 
        onClick={() => setCurrentPage('dashboard')}
        style={{ padding: '10px', cursor: 'pointer' }}
      >
        🏠 Dashboard
      </div>
      <div 
        className="menu-item" 
        onClick={() => setCurrentPage('notifications')}
        style={{ padding: '10px', cursor: 'pointer' }}
      >
        🔔 Notifications
      </div>
      <div 
        className="menu-item" 
        onClick={() => console.log('Logout clicked')}
        style={{ padding: '10px', cursor: 'pointer' }}
      >
        🚪 Logout
      </div>
    </div>
  );
}

export default Sidebar;