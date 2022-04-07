import React, { useState } from "react"
import { AddTodo } from '../../molecules/AddTodo';
import { TodoForm } from '../../molecules/TodoForm/TodoForm';
import { ModifyTodoForm } from '../../molecules/ModifyTodoForm/ModifyTodoForm';
import { todosData } from "../../../data/todos";
import { nanoid } from "nanoid";
import TodoListItem from "../../molecules/TodoListItem";
import { toast, ToastContainer } from "react-toastify";
import { useQuery } from "react-query";

const initialFormState = { name: '', completed: false, tags: [], dueDate: "" };



export const TodoList = () => {
    // const [todos, setTodos] = useState(todosData);

    const [isTodoBeingAdded, setIsTodoBeingAdded] = useState(false);
    const [addFormValues, setAddFormValues] = useState(initialFormState);
    const [editFormValues, setEditFormValues] = useState(initialFormState);


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
    const notify = () => {
        toast.error("Success Notification !");
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        notify();
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
    const handleModifySubmit = (e, id) => {
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

    return (
        <>
            <div className="container">
                {todos.map(todo => {
                    return (
                        todo.beingModified ?
                            <ModifyTodoForm
                                handleInputChange={handleEditTodoInputChange}
                                toggleBeingModified={toggleBeingModified}
                                handleSubmit={handleModifySubmit}
                                formValues={editFormValues}
                                todo={todo}
                            /> :
                            <TodoListItem
                                todo={todo}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                                toggleBeingModified={toggleBeingModified}
                            />
                    )
                })}
                {isTodoBeingAdded ?
                    <TodoForm
                        handleInputChange={handleAddTodoInputChange}
                        handleSubmit={handleSubmit}
                        toggleAddingTodo={toggleAddingTodo}
                        formValues={addFormValues}

                    /> :
                    <AddTodo toggleAddingTodo={toggleAddingTodo} />
                }
            </div>
            <ToastContainer />
        </>
    )
}