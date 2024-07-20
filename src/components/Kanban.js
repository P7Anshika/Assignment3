import React, { useState } from 'react';

function Kanban() {
  const [tasks, setTasks] = useState([
    { id: '1', content: 'First task' },
    { id: '2', content: 'Second task' },
    // Add more tasks
  ]);

  const onDragStart = (event, taskId) => {
    event.dataTransfer.setData('taskId', taskId);
  };

  const onDrop = (event) => {
    const taskId = event.dataTransfer.getData('taskId');
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Kanban Board</h2>
      <div
        style={{ display: 'flex', gap: '10px' }}
        onDrop={onDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        {tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={(event) => onDragStart(event, task.id)}
            style={{ padding: '10px', border: '1px solid black' }}
          >
            {task.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kanban;
