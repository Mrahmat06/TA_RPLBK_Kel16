import React from 'react';

const Logout = ({ onLogout, username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Logout;