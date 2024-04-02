import { useState } from "react";


const Todo = ({ todo, handleShow, handleActiveTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  }

  const clickHanlder = () => {
    handleShow()
    handleActiveTodo(todo)
  }

  return (
    <div className="todo-container" onClick={clickHanlder}>
      <form id="categoryForm" >
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={checkboxHandler}
              onClick={(e) => e.stopPropagation()}
            />
          </label>
        </div>
      </form>
      <div className="todo">
        <div style={{ textDecoration: isChecked ? "line-through" : "none" }}>
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
  )
};
export default Todo;