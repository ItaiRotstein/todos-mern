import { useState, useEffect } from "react"

import Sidenav from "./Sidenav"
import Todo from "./Todo"
import EditTodo from "./EditTodo"

import dataPlaceholder from "../data";

const Todos = () => {

    const [todos, setTodos] = useState('')
    const [activeTodo, setActiveTodo] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleActiveTodo = (todo) => setActiveTodo(todo)

    useEffect(() => {
        setTodos(dataPlaceholder)
    }, [])

    if (!todos) return

    return (
        <main className="main-layout">
            <Sidenav />
            {show && <EditTodo
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                todo={activeTodo}
            />}
            <section className="todos">
                {todos.map((todo) => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        handleShow={handleShow}
                        handleClose={handleClose}
                        handleActiveTodo={handleActiveTodo}
                    />
                ))}
            </section>

        </main>
    )
}
export default Todos