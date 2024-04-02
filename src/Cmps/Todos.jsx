import { useState, useEffect } from "react"

import Sidenav from "./Sidenav"
import Todo from "./Todo"
import EditTodo from "./EditTodo"
import AddTodo from "./AddTodo";

const Todos = () => {

  const [todos, setTodos] = useState([])
  const [activeTodo, setActiveTodo] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleActiveTodo = (todo) => setActiveTodo(todo)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/todos");
        const data = await res.json();
        setTodos(data)
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        // setLoading(false)
      }
    }
    fetchTodos()
  }, [JSON.stringify(todos)]);

  const addTodo = async (newTodo) => {
    await fetch("http://localhost:8000/api/todos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    return;
  };

  const updateTodo = async (updatedTodo) => {
    await fetch(`http://localhost:8000/api/todos/${updatedTodo._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });
    const idx = todos.findIndex((todo) => todo.id === updatedTodo.id)
    todos[idx] = updatedTodo
    const updatedTodos = [...todos]
    setTodos(updatedTodos)
    return;
  };

  const deleteTodo = async (_id) => {
    await fetch(`http://localhost:8000/api/todos/${_id}`, {
      method: 'DELETE'
    });
    const idx = todos.findIndex((todo) => todo._id === _id)
    todos.splice(idx, 1)
    const updatedTodos = [...todos]
    setTodos(updatedTodos)
    return;
  };
  console.log(todos);

  return (

    !todos ? <h1>Loading...</h1> : (

      <main className="main-layout">
        <Sidenav />
        {show && <EditTodo
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
          todo={activeTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />}
        <AddTodo addTodo={addTodo} />
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
  )
}
export default Todos