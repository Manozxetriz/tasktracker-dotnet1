import React from 'react';

function TaskInput({ title, setTitle, addTask }) {
  return (
    <div className="task-input">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTask}>➕ Add</button>
    </div>
  );
}

export default TaskInput;
