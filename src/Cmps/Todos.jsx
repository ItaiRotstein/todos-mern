import { useState, useEffect } from "react"

import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../services/todo.service";
import Sidenav from "./Sidenav"
import Todo from "./Todo"
import AddTodo from "./AddTodo";

const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const data = fetchTodos()
    data.then((res) => setTodos(res))
  }, []);

  const onAddTodo = async (newTodo) => {
      addTodo()
      const updatedTodos = [...todos, newTodo]
      setTodos(updatedTodos)
  };

  const onUpdateTodo = async (updatedTodo) => {
    updateTodo(updatedTodo)
    const idx = todos.findIndex((todo) => todo.id === updatedTodo.id)
    todos[idx] = updatedTodo
    const updatedTodos = [...todos]
    setTodos(updatedTodos)
    return;
  };

  const onDeleteTodo = async (_id) => {
    deleteTodo(_id)
    const idx = todos.findIndex((todo) => todo._id === _id)
    todos.splice(idx, 1)
    const updatedTodos = [...todos]
    setTodos(updatedTodos)
  };

  console.log(todos);

  return (
    !todos ? <h1>Loading...</h1> : (
      <main className="main-layout">
        <Sidenav />
        <AddTodo addTodo={onAddTodo} />
        <section className="todos">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              updateTodo={onUpdateTodo}
              deleteTodo={onDeleteTodo}
            />
          ))}
        </section>
      </main>
    )
  )
}
export default Todos