import React from "react";
import "./HeaderBar.css";

export default function HeaderBar() {
  return (
    <header className="driver-header">
      <div className="driver-avatar">
        <span role="img" aria-label="avatar">
          👤
        </span>
      </div>
    </header>
  );
}
