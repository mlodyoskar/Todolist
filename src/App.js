import { Todo } from './components/Todo/Todo';
import { Form } from './components/Form/Form';
import React, { useState } from 'react';
import './App.css';

const initialFormState = { name: '', completed: false };


function App() {
  const [todos, setTodos] = useState([{ name: 'walk dog', completed: false }]);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }
  const deleteTodo = (name) => {
    let filteredTodos = todos.filter(todo => {
      return todo.name !== name;
    })
    setTodos(filteredTodos);
  }
  const toggleComplete = (name) => {
    let filteredTodos = todos.map(todo => {
      if (todo.name === name) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    console.log(filteredTodos)
    setTodos(filteredTodos);
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      name: formValues.name,
      completed: formValues.completed
    }
    if (newTodo.name !== "") {
      setTodos([newTodo, ...todos]);
      setFormValues(initialFormState);
    }

  }

  return (
    <div className="App">
      <div className="container">
        <Form formValues={formValues} handleInputChange={handleInputChange} handleAddTodo={handleAddTodo} />
        <div className="todos">
          {todos.map(todo => <Todo toggleComplete={toggleComplete} deleteTodo={deleteTodo} todo={todo} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
