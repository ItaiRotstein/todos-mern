import { useState } from "react";

const Todo = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className="todo-container" >
      <form id="categoryForm" >
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={checkboxHandler}
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