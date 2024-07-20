import React from 'react';

function Chart() {
  return (
    <div>
      <h2>Chart</h2>
      <svg width="400" height="100">
        <rect width="100%" height="100%" fill="lightgrey" />
        <circle cx="50" cy="50" r="40" fill="blue" />
        <circle cx="150" cy="50" r="40" fill="green" />
        <circle cx="250" cy="50" r="40" fill="red" />
      </svg>
    </div>
  );
}

export default Chart;
