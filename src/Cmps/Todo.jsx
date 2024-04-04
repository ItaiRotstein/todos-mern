import { useState } from "react";

import EditTodo from "./EditTodo";

const Todo = ({ todo, updateTodo, deleteTodo }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
    {show && <EditTodo
      show={show}
      handleShow={handleShow}
      handleClose={handleClose}
      todo={todo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />}
    <div className="todo-container" onClick={handleShow}>

      <div className="todo">
        <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </div>
        <div className="time-and-date">
          <div>
            {todo.date}
          </div>
          <div>
            {todo.time}
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default Todo;