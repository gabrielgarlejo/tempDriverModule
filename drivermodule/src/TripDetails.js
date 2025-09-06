import React from "react";
import "./TripDetails.css";

export default function TripDetails({ trip }) {
  if (!trip) {
    return (
      <div className="tripdetails-container empty">
        <span>Select a trip to view details</span>
      </div>
    );
  }
  return (
    <div className="tripdetails-container">
      <div className="tripdetails-title">Vehicle information</div>
      <div className="tripdetails-info">
        <div>Plate : {trip.plate}</div>
        <div>Model : {trip.model}</div>
      </div>
      <div className="tripdetails-title">Customer information</div>
      <div className="tripdetails-info">
        <div>Name : {trip.customer}</div>
        <div>Contact : {trip.contact}</div>
        <div>Destination : {trip.destination}</div>
      </div>
    </div>
  );
}
