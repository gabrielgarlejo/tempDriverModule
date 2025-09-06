import React from "react";
import "./Sidebar.css";

export default function Sidebar({ active, onNavigate }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">JMTC</div>
      <div
        className={`sidebar-item ${active === "dashboard" ? "active" : ""}`}
        onClick={() => onNavigate("dashboard")}
      >
        <span className="icon">&#x1F3E0;</span> Dashboard
      </div>
      <div
        className={`sidebar-item ${active === "notifications" ? "active" : ""}`}
        onClick={() => onNavigate("notifications")}
      >
        <span className="icon">&#x1F514;</span> Notifications
      </div>
      <div className="sidebar-item" onClick={() => onNavigate("logout")}>
        <span className="icon">&#x1F511;</span> Logout
      </div>
    </div>
  );
}
