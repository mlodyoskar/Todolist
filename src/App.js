import { Todo } from './components/molecules/Todo';
import { AddTodo } from './components/molecules/AddTodo';
import { TodoForm } from './components/molecules/TodoForm';
import { ModifyTodoForm } from './components/molecules/ModifyTodoForm';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { useTodo } from './hooks/useTodo';

const initialFormState = { name: '', completed: false, tags: [], dueDate: "" };


function App() {
  const [todos, setTodos] = useState([
    { id: nanoid(), name: 'walk dog', completed: false, beingModified: false, tags: ["Sport", "Habit"], dueDate: "Feb 8, 2022 03: 24: 00" },
    { id: nanoid(), name: 'set up a blog', completed: false, beingModified: false, tags: ["Education"], dueDate: "Feb 2, 2022 03: 24: 00" }]);

  const data = useTodo()

  const [addFormValues, setAddFormValues] = useState(initialFormState);
  const [editFormValues, setEditFormValues] = useState(initialFormState);

  const [isTodoBeingAdded, setIsTodoBeingAdded] = useState(false);

  const handleAddTodoInputChange = (e) => {
    setAddFormValues({
      ...addFormValues,
      [e.target.name]: e.target.value,
    });
  }

  const handleEditTodoInputChange = (e) => {
    setEditFormValues({
      ...editFormValues,
      [e.target.name]: e.target.value,
    });
  }

  const deleteTodo = (id) => {
    let filteredTodos = todos.filter(todo => {
      return todo.id !== id;
    })
    setTodos(filteredTodos);
  }

  const toggleComplete = (id) => {
    let filteredTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(filteredTodos);
  }

  const toggleBeingModified = (id) => {
    let modifiedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.beingModified = !todo.beingModified;
        setEditFormValues(todo);
      }
      return todo;
    })

    setTodos(modifiedTodos);
  }

  const toggleAddingTodo = () => {
    setIsTodoBeingAdded((prevIsTodoBeingAdded) => {
      return !prevIsTodoBeingAdded;
    })
    setAddFormValues(initialFormState)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      name: addFormValues.name,
      completed: false,
      beingModified: false,
      tags: [],
      dueDate: Date.now()
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        newTodo
      ]
    })
    setAddFormValues(initialFormState);
    toggleAddingTodo();
  }
  const handleModifySubmit = (e, id, name) => {
    e.preventDefault();
    toggleBeingModified(id);
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.name = editFormValues.name;
        }
        return todo;
      })
    )
  }


  const todosList = todos.map(todo =>
    todo.beingModified ?
      <ModifyTodoForm
        handleInputChange={handleEditTodoInputChange}
        toggleBeingModified={toggleBeingModified}
        handleSubmit={handleModifySubmit}
        formValues={editFormValues}
        todo={todo}
      /> :
      <Todo
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        todo={todo}
        toggleBeingModified={toggleBeingModified}
        formValues={addFormValues} />
  )
  return (
    <div className="App">
      <div className="container">
        <div className="todos">
          {todosList}
        </div>
        {isTodoBeingAdded ?
          <TodoForm
            handleInputChange={handleAddTodoInputChange}
            handleSubmit={handleSubmit}
            toggleAddingTodo={toggleAddingTodo}
            formValues={addFormValues}
          /> :
          <AddTodo toggleAddingTodo={toggleAddingTodo} />}
      </div>
    </div >
  );
}

export default App;
