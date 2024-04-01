import { useState, useEffect } from "react"

import Sidenav from "./Sidenav"
import Todo from "./Todo"
import EditTodo from "./EditTodo"

const Todos = () => {

    const [todos, setTodos] = useState('')

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await fetch('https://dummyjson.com/todos');
                const data = await res.json();
                setTodos(data.todos);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                // setLoading(false)
            }
        }
        fetchTodos()
    }, [])

    if (!todos) return
    console.log(todos);

    return (
        <main className="main-layout">
            <Sidenav/>
            <EditTodo/>
            <section className="todos">
                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.id}/>
                ))}
            </section>

        </main>
    )
}
export default Todos