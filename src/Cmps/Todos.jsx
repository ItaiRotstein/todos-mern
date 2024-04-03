import { useState, useEffect } from "react"

import Sidenav from "./Sidenav"
import Todo from "./Todo"
import EditTodo from "./EditTodo"
import AddTodo from "./AddTodo";

import { IoAddCircleSharp } from "react-icons/io5"; 

const Todos = () => {

  const [todos, setTodos] = useState([])
  const [activeTodo, setActiveTodo] = useState(null)
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

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

  return (

    !todos ? <h1>Loading...</h1> : (

      <main className="main-layout">
        <Sidenav />

        {showEdit && <EditTodo
          show={showEdit}
          handleShow={handleShowEdit}
          handleClose={handleCloseEdit}
          todo={activeTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          />}
        <AddTodo addTodo={addTodo} show={showAdd} handleClose={handleCloseAdd}/>
        <section className="todos">
          <IoAddCircleSharp className="add-button" onClick={handleShowAdd}/>
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              handleShow={handleShowEdit}
              handleClose={handleCloseEdit}
              handleActiveTodo={handleActiveTodo}
            />
          ))}
        </section>
      </main>
    )
  )
}
export default Todos