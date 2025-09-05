import React, { useState } from 'react';

function NotificationForm() {
  const [formData, setFormData] = useState({
    fuelAmount: '',
    mileage: '',
    plateNumber: '',
    issue: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Send Notifications</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Fuel Amount</label>
          <select
            value={formData.fuelAmount}
            onChange={(e) => setFormData({...formData, fuelAmount: e.target.value})}
          >
            <option value="">Select fuel amount</option>
            <option value="full">Full</option>
            <option value="half">Half Empty</option>
            <option value="quarter">Quarter</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Mileage</label>
          <div style={{ display: 'flex', gap: '5px' }}>
            {Array(6).fill(0).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                style={{ width: '40px', textAlign: 'center' }}
              />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Plate Number</label>
          <select
            value={formData.plateNumber}
            onChange={(e) => setFormData({...formData, plateNumber: e.target.value})}
          >
            <option value="">Select plate number</option>
            <option value="1A13212">1A13212</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Issue</label>
          <textarea
            value={formData.issue}
            onChange={(e) => setFormData({...formData, issue: e.target.value})}
            placeholder="Please input the issue here if necessary"
            rows={4}
          />
        </div>

        <button 
          type="submit"
          style={{
            backgroundColor: '#1B4332',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default NotificationForm;