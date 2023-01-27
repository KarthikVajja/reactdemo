import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (taskName, key) => {
    setTodoList(todoList.slice(0,key).concat(todoList.slice(key+1)));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <div key={key}>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task, key)}>X</button>
            </div>  
          )
        })}
      </div>
    </div>
  );
}



export default App;
