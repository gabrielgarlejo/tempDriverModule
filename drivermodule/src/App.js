import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import NotificationForm from './NotificationForm';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="app-container" style={{ display: 'flex' }}>
      <Sidebar setCurrentPage={setCurrentPage} />
      <div className="main-content" style={{ flex: 1, padding: '20px' }}>
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'notifications' && <NotificationForm />}
      </div>
    </div>
  );
}

export default App;