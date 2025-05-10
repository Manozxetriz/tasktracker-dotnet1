import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.isCompleted ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task)}
      />
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
