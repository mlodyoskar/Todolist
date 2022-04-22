import TodoListItem from "components/TodoListItem/TodoListItem";
import React, { useState } from "react"

const initialFormState = { name: '', completed: false, tags: [], dueDate: "" };


export const TodoList = () => {
    // const [addFormValues, setAddFormValues] = useState(initialFormState);
    // const [editFormValues, setEditFormValues] = useState(initialFormState);

    // const [isTodoBeingAdded, setIsTodoBeingAdded] = useState(false);

    // const handleAddTodoInputChange = (e) => {
    //     setAddFormValues({
    //         ...addFormValues,
    //         [e.target.name]: e.target.value,
    //     });
    // }

    // const handleEditTodoInputChange = (e) => {
    //     setEditFormValues({
    //         ...editFormValues,
    //         [e.target.name]: e.target.value,
    //     });
    // }

    // const toggleBeingModified = (id) => {
    //     let modifiedTodos = todos.map(todo => {
    //         if (todo.id === id) {
    //             todo.beingModified = !todo.beingModified;
    //             setEditFormValues(todo);
    //         }
    //         return todo;
    //     })

    //     setTodos(modifiedTodos);
    // }

    // const toggleAddingTodo = () => {
    //     setIsTodoBeingAdded((prevIsTodoBeingAdded) => {
    //         return !prevIsTodoBeingAdded;
    //     })
    //     setAddFormValues(initialFormState)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newTodo = {
    //         id: nanoid(),
    //         name: addFormValues.name,
    //         completed: false,
    //         beingModified: false,
    //         tags: [],
    //         dueDate: Date.now()
    //     }
    //     setTodos((prevTodos) => {
    //         return [
    //             ...prevTodos,
    //             newTodo
    //         ]
    //     })
    //     setAddFormValues(initialFormState);
    //     toggleAddingTodo();
    // }
    // const handleModifySubmit = (e, id, name) => {
    //     e.preventDefault();
    //     toggleBeingModified(id);
    //     setTodos(
    //         todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.name = editFormValues.name;
    //             }
    //             return todo;
    //         })
    //     )
    // }


    // const todosList = todos.map(todo =>
    //     todo.beingModified ?
    //         <ModifyTodoForm
    //             handleInputChange={handleEditTodoInputChange}
    //             toggleBeingModified={toggleBeingModified}
    //             handleSubmit={handleModifySubmit}
    //             formValues={editFormValues}
    //             todo={todo}
    //         /> :
    //         <Todo
    //             toggleComplete={toggleComplete}
    //             deleteTodo={deleteTodo}
    //             todo={todo}
    //             toggleBeingModified={toggleBeingModified}
    //             formValues={addFormValues} />
    // )
    return (
        <>
            <TodoListItem todo={{ name: "ASD", completed: false, tags: ["ASD"], dueDate: "24 Apr 2022" }} />
            <h1>ASD</h1>
        </>
    )
}