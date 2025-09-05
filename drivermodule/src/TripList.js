import React from 'react';

function TripList({ trips, onSelectTrip }) {
  return (
    <div className="trip-list">
      {trips.map(trip => (
        <div 
          key={trip.id}
          onClick={() => onSelectTrip(trip)}
          style={{
            padding: '15px',
            border: '1px solid #ddd',
            marginBottom: '10px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div>{trip.date}</div>
              <div>{trip.time}</div>
              <div>{trip.destination}</div>
            </div>
            <div style={{
              padding: '5px 10px',
              borderRadius: '15px',
              backgroundColor: 
                trip.status === 'upcoming' ? '#007bff' :
                trip.status === 'ongoing' ? '#ffc107' : '#28a745',
              color: 'white'
            }}>
              {trip.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TripList;