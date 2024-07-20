import React from 'react';

function Table() {
  const data = [
    { id: 1, name: 'Jon', age: 35 },
    { id: 2, name: 'Cersei', age: 42 },
    // Add more data
  ];

  return (
    <div>
      <h2>Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
