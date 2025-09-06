import React, { useState } from "react";
import "./TripList.css";

const trips = [
  {
    id: 1,
    date: "July 25, 2025",
    time: "9:00 AM",
    route: "Baguio",
    status: "Upcoming",
    plate: "1A13212",
    model: "Suv",
    customer: "Manny Villarico",
    contact: "09485687535",
    destination: "Baguio",
  },
  {
    id: 2,
    date: "July 25, 2025",
    time: "9:00 AM",
    route: "Baguio",
    status: "Ongoing",
    plate: "1A13212",
    model: "Suv",
    customer: "Manny Villarico",
    contact: "09485687535",
    destination: "Baguio",
  },
  {
    id: 3,
    date: "July 25, 2025",
    time: "9:00 AM",
    route: "Baguio",
    status: "Completed",
    plate: "1A13212",
    model: "Suv",
    customer: "Manny Villarico",
    contact: "09485687535",
    destination: "Baguio",
  },
];

export default function TripList({ onSelect, selectedTrip }) {
  const [filter, setFilter] = useState("Weekly");

  return (
    <div className="triplist-container">
      <div className="triplist-header">
        <span>Scheduled Trips</span>
        <select
          className="triplist-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <table className="triplist-table">
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Route & Destination</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr
              key={trip.id}
              className={
                selectedTrip && selectedTrip.id === trip.id ? "selected" : ""
              }
              onClick={() => onSelect(trip)}
            >
              <td>
                {trip.date}
                <br />
                {trip.time}
              </td>
              <td>{trip.route}</td>
              <td>
                <span className={`status-badge ${trip.status.toLowerCase()}`}>
                  {trip.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
