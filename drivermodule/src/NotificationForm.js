import React, { useState } from "react";
import "./NotificationForm.css";

const plates = ["1A13212", "2B45678", "3C98765"];

export default function NotificationForm() {
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState(["", "", "", "", ""]);
  const [plate, setPlate] = useState("");
  const [issue, setIssue] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const errs = {};
    if (!fuel) errs.fuel = "Please select a fuel amount";
    if (mileage.some((m) => !m))
      errs.mileage = "Please enter the current mileage";
    if (!plate) errs.plate = "Please select a plate number";
    return errs;
  }

  function handleSend(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setTimeout(() => setSent(false), 2000);
      setFuel("");
      setMileage(["", "", "", "", ""]);
      setPlate("");
      setIssue("");
    }
  }

  return (
    <div className="notificationform-container">
      <div className="notificationform-title">Send Notifications</div>
      <form className="notificationform-form" onSubmit={handleSend}>
        <label>Fuel Amount</label>
        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className={errors.fuel ? "error" : ""}
        >
          <option value="">Select fuel amount</option>
          <option>Full</option>
          <option>Half Empty</option>
          <option>Empty</option>
        </select>
        {errors.fuel && <span className="error-msg">{errors.fuel}</span>}

        <label>Mileage</label>
        <div className="mileage-inputs">
          {mileage.map((m, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={m}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                setMileage(mileage.map((v, idx) => (idx === i ? val : v)));
              }}
              className={errors.mileage ? "error" : ""}
            />
          ))}
        </div>
        {errors.mileage && <span className="error-msg">{errors.mileage}</span>}

        <label>Plate Number</label>
        <select
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          className={errors.plate ? "error" : ""}
        >
          <option value="">Select plate number</option>
          {plates.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        {errors.plate && <span className="error-msg">{errors.plate}</span>}

        <label>Issue</label>
        <input
          type="text"
          placeholder="Please input the issue here if necessary"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <button type="submit" className="send-btn">
          Send
        </button>
      </form>
      {sent && (
        <div className="notificationform-modal">
          <div className="modal-content">
            <span className="modal-close" onClick={() => setSent(false)}>
              &#10005;
            </span>
            <div className="modal-icon">&#x2714;</div>
            <div className="modal-text">Sent Sucessfully</div>
          </div>
        </div>
      )}
    </div>
  );
}
