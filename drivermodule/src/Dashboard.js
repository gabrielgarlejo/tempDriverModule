import React, { useState } from "react";
import TripList from "./TripList";
import TripDetails from "./TripDetails";
import "./Dashboard.css";

export default function Dashboard() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <div className="dashboard-content">
      <TripList onSelect={setSelectedTrip} selectedTrip={selectedTrip} />
      <TripDetails trip={selectedTrip} />
    </div>
  );
}
