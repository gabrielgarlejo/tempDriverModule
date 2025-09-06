import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import NotificationForm from "./NotificationForm";
import HeaderBar from "./HeaderBar";

function App() {
  const [active, setActive] = useState("dashboard");

  return (
    <div>
      <HeaderBar />
      <Sidebar active={active} onNavigate={setActive} />
      <div
        style={{
          marginLeft: 240,
          marginTop: 70,
          padding: "32px",
          minHeight: "calc(100vh - 70px)",
          background: "#d3d3d3",
        }}
      >
        {active === "dashboard" && <Dashboard />}
        {active === "notifications" && <NotificationForm />}
        {active === "logout" && (
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "2rem",
            }}
          >
            Logged out.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
