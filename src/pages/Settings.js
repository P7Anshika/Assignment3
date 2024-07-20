import React, { useState } from 'react';

function Settings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Handle save functionality
    alert(`Saved: Username - ${username}, Email - ${email}`);
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Settings;
