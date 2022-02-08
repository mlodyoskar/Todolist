import { Todo } from './components/molecules/Todo/Todo';
import { AddTodo, Form } from './components/molecules/AddTodo/AddTodo';
import { TodoForm } from './components/molecules/TodoForm/TodoForm';
import React, { useState } from 'react';
import './App.css';

const initialFormState = { name: '', completed: false, tags: [], dueDate: "" };


function App() {
  const [todos, setTodos] = useState([
    { name: 'walk dog', completed: false, beingModified: false, tags: ["Sport", "Habit"], dueDate: "Feb 8, 2022 03: 24: 00" },
    { name: 'set up a blog', completed: false, beingModified: false, tags: ["Education"], dueDate: "Feb 2, 2022 03: 24: 00" }]);
  const [formValues, setFormValues] = useState(initialFormState);
  const [isTodoBeingAdded, setIsTodoBeingAdded] = useState(false);

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
    setTodos(filteredTodos);
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      name: formValues.name,
      completed: formValues.completed,
      dueDate: Date.now()
    }
    if (newTodo.name !== "") {
      setTodos([...todos, newTodo]);
      setFormValues(initialFormState);
    }
  }

  const toggleAddingTodo = () => {
    setIsTodoBeingAdded((prevIsTodoBeingAdded) => {
      return !prevIsTodoBeingAdded;
    })
    setFormValues(initialFormState)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          name: formValues.name,
          completed: false,
          beingModified: false,
          tags: [],
          dueDate: Date.now()
        }
      ]
    })
    setFormValues(initialFormState);
    toggleAddingTodo();
  }
  return (
    <div className="App">
      <div className="container">
        <div className="todos">
          {todos.map(todo => <Todo
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            todo={todo}
            formValues={formValues} />)
          }
        </div>
        {isTodoBeingAdded ?
          <TodoForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            toggleAddingTodo={toggleAddingTodo}
            formValues={formValues}
          /> :
          <AddTodo toggleAddingTodo={toggleAddingTodo} />}
      </div>
    </div>
  );
}

export default App;
