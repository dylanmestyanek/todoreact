import React, { useState } from 'react';
import './App.scss';

import TodoItem from "./TodoItem";

function App() {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  };

  const addTask = () => {
    task !== '' && setItems([...items, {value: task, completed: false, id: Date.now()}]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTask('');
  }
 

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="App">
      <h1>To-Do List</h1>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Enter Task"
          value={task}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>  

      <div className="task-list">
        {
          items.map((item, index) => 
            <TodoItem key={index} item={item} items={items} setItems={setItems} />
          )
        }
      </div>
    </form>
  );
}

export default App;
