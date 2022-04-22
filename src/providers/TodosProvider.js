import { todos as todosData } from "data/todos"
import React, { useReducer } from "react"

const actionTypes = {
    addTodo: 'ADD TODO',
    deleteTodo: 'DELETE TODO',
    toggleCompletedTodo: 'TOGGLE COMPLETED TODO'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.addTodo:
            return [...state, action.payload.todo]

        case actionTypes.toggleCompletedTodo:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })

        case actionTypes.deleteTodo:
            return state.filter(todo => todo.id != action.payload.id)

        default:
            return state
    }
}

export const TodosContext = React.createContext({
    todos: [],
    addTodo: () => { },
    deleteTodo: () => { },
    toggleComplete: () => { },
}
)

export const TodosProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, todosData)

    const deleteTodo = (id) => {
        dispatch({
            type: actionTypes.deleteTodo,
            payload: {
                id
            }
        })
    }

    const addTodo = (todo) => {
        dispatch({
            type: actionTypes.addTodo,
            payload: {
                todo
            }
        })

    }

    const toggleComplete = (id) => {
        dispatch({
            type: actionTypes.toggleCompletedTodo,
            payload: {
                id
            }
        })
    }

    return (
        <TodosContext.Provider
            value={{
                todos,
                addTodo,
                deleteTodo,
                toggleComplete,
            }}
        >
            {children}
        </TodosContext.Provider>
    )
}
