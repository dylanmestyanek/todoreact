import React, { useState } from 'react';
import './App.scss';

function App() {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  };

  const addTask = () => {
    task !== '' && setItems([...items, {value: task, completed: false, id: Date.now()}]);
    setTask('');
  }

  const toggleCompleted = (value) => {
  //  setItems([...items, {value: "test", completed: true}])
  };

  const removeTask = (item) => {
    let filteredArr = items.filter(task => task.id !== item.id && item)
    setItems(filteredArr);
  };
  
 

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        placeholder="Enter Task"
        value={task}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
      {
        items.map(item => 
          <div className="task-container">
            <li><input type="checkbox" onChange={toggleCompleted} />{item.value}</li>
            <button aria-label="delete" onClick={() => removeTask(item)}><i class="fas fa-trash-alt"></i></button>
          </div>
        )
      }
      </ul>
    </div>
  );
}

export default App;
