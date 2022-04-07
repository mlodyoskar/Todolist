import { useState } from 'react'
import { useQuery } from "react-query"
import { fetcher } from "src/api/fetcher"

export const useTodo = () => {
    const [todos, setTodos] = useState();

    return useQuery("todos", () => fetcher("/todos"))
}