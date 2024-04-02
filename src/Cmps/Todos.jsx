import { useState, useEffect } from "react"

import Sidenav from "./Sidenav"
import Todo from "./Todo"
import EditTodo from "./EditTodo"

import dataPlaceholder from "../data";

const Todos = () => {

    const [todos, setTodos] = useState('')

    useEffect(() => {
        setTodos(dataPlaceholder)
    }, [])

    if (!todos) return
    console.log(todos);

    return (
        <main className="main-layout">
            <Sidenav />
            <EditTodo />
            <section className="todos">
                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </section>

        </main>
    )
}
export default Todos