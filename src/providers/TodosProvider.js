import { todos as todosData } from "data/todos"
import React, { useState } from "react"

export const TodosContext = React.createContext({
    todos: [],
    addTodo: () => { },
    deleteTodo: () => { },
    toggleComplete: () => { },
}
)

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState(todosData)

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

    return (
        <TodosContext.Provider
            value={{
                todos,
                deleteTodo,
                toggleComplete,
            }}
        >
            {children}
        </TodosContext.Provider>
    )
}
