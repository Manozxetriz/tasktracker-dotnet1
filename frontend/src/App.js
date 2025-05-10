import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
const API_URL = `${process.env.REACT_APP_API_URL}/tasks`;



function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post(API_URL, { title });
    setTitle('');
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await axios.put(`${API_URL}/${task.id}`, {
      ...task,
      isCompleted: !task.isCompleted,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>📝 My Task Tracker</h1>
      <TaskInput title={title} setTitle={setTitle} addTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default App;