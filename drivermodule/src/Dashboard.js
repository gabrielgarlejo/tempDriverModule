import React, { useState } from 'react';
import TripList from './TripList.js';
import TripDetails from './TripDetails';

function Dashboard() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [filterPeriod, setFilterPeriod] = useState('weekly');

  const trips = [
    {
      id: 1,
      date: 'July 25, 2025',
      time: '9:00 AM',
      destination: 'Baguio',
      status: 'upcoming',
      vehicle: { plate: '1A13212', model: 'Suv' },
      customer: {
        name: 'Manny Villarico',
        contact: '09485587535',
        destination: 'Baguio'
      }
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2>Scheduled Trips</h2>
          <select 
            value={filterPeriod} 
            onChange={(e) => setFilterPeriod(e.target.value)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <TripList trips={trips} onSelectTrip={setSelectedTrip} />
      </div>
      {selectedTrip && (
        <div style={{ flex: 1 }}>
          <TripDetails trip={selectedTrip} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;