import { AddTodo } from "components/AddTodo/AddTodo";
import { ModifyTodoForm } from "components/ModifyTodoForm/ModifyTodoForm";
import { TodoForm } from "components/TodoForm/TodoForm";
import TodoListItem from "components/TodoListItem/TodoListItem";
import { TodosContext } from "providers/TodosProvider";
import React, { useState, useContext } from "react"
import { Wrapper } from "./TodoList.styles";

export const TodoList = () => {
    const { todos } = useContext(TodosContext)

    const [isTodoBeingAdded, setIsTodoBeingAdded] = useState(false);

    return (
        <Wrapper>
            {todos.map(todo => todo.beingModified ? <ModifyTodoForm todo={todo} /> : <TodoListItem todo={todo} />)}
            {isTodoBeingAdded
                ? <TodoForm toggleAddingTodo={setIsTodoBeingAdded} />
                : <AddTodo toggleAddingTodo={setIsTodoBeingAdded} />}
        </Wrapper >
    )
}