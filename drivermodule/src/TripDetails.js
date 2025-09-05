import React from 'react';

function TripDetails({ trip }) {
  return (
    <div className="trip-details" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
      <h3>Vehicle Information</h3>
      <div style={{ marginBottom: '20px' }}>
        <p>Plate : {trip.vehicle.plate}</p>
        <p>Model : {trip.vehicle.model}</p>
      </div>

      <h3>Customer Information</h3>
      <div>
        <p>Name : {trip.customer.name}</p>
        <p>Contact : {trip.customer.contact}</p>
        <p>Destination : {trip.customer.destination}</p>
      </div>
    </div>
  );
}

export default TripDetails;