import { useState } from "react";

import EditTodo from "./EditTodo";

import { TiDeleteOutline } from "react-icons/ti";

const Todo = ({ todo, updateTodo, deleteTodo }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isTodoHover, setTodoHover] = useState(false)

  const todoClassHover = isTodoHover ? "todo-delete-button hover-todo" : "todo-delete-button"

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    deleteTodo(todo._id)
  }

  return (<>
    {show && <EditTodo
      show={show}
      handleShow={handleShow}
      handleClose={handleClose}
      todo={todo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />}
    <div className={"todo-container"} onClick={handleShow} onMouseEnter={() => setTodoHover(true)} onMouseLeave={() => setTodoHover(false)}>
      <div className="todo">
        <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </div>
        <div className="todo-buttons">
          <div className="time-and-date">
            <div>
              {todo.date}
            </div>
            <div>
              {todo.time}
            </div>
          </div>
          <TiDeleteOutline className={todoClassHover} onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  </>
  )
};

export default Todo;