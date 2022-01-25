import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';




function App() {
  const [todos, setTodos] = useState([{ text: 'walk dog', completed: false }]);
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    if (todo != '') {
      setTodos([todo, ...todos]);
      setTodo('');
    }
    e.preventDefault();
  }

  const Todo = (todo) => {
    return (
      <div className={"todo"}>
        <p className="todo-name">{todo.text}</p>
        <input className="todo-checkbox" type="checkbox" />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <div className="todos">
          {todos.map(todo => <Todo todo={todo} />)}
        </div>
        <form className="add" onSubmit={handleSubmit} >
          <input className="todo-input" value={todo} onChange={handleChange} placeholder="Add new todo" />
          <button className="todo-button">Add</button>
        </form>

      </div>
    </div>
  );
}

export default App;
