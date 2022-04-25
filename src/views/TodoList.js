import { AddTodo } from "components/AddTodo/AddTodo";
import { ModifyTodoForm } from "components/ModifyTodoForm/ModifyTodoForm";
import { TodoForm } from "components/TodoForm/TodoForm";
import TodoListItem from "components/TodoListItem/TodoListItem";
import { TodosContext } from "providers/TodosProvider";
import React, { useState, useContext } from "react"

export const TodoList = () => {
    const { todos } = useContext(TodosContext)

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


    const [isTodoBeingAdded, setIsTodoBeingAdded] = useState(false);

    return (
        <>
            {todos.map(todo => todo.beingModified ? <ModifyTodoForm todo={todo} /> : <TodoListItem todo={todo} />)}
            {isTodoBeingAdded
                ? <TodoForm toggleAddingTodo={setIsTodoBeingAdded} />
                : <AddTodo toggleAddingTodo={setIsTodoBeingAdded} />}
        </>
    )
}