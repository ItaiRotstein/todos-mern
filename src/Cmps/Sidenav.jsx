import { useState } from "react"

import TodoFilter from "./TodoFilter"
import AddTodo from "./AddTodo"

import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbArrowsSort } from "react-icons/tb";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

const Sidenav = ({ onHandleFilter, addTodo }) => {
    const [filter, setFilter] = useState('')
    const [isChecked, setIsChecked] = useState(null)

    const onHandleChange = (e) => {
        const { value } = e.target
        setFilter(value)
        onHandleFilter(value)
    }

    return (
        <aside className="sidenav">
            <div className="sidenav-container">
                <div className="add-task-menu menu-item">
                    <AddTodo addTodo={addTodo} />
                    Add Task
                </div>
                {/* <div className="completed">
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                <label htmlFor="">Completed</label>
            </div> */}
                <div className="menu-item">
                    <HiMagnifyingGlass className="icon" />
                    Search
                </div>
                <div className="menu-item">
                    <TbArrowsSort className="icon" />
                    Sort
                </div>
                <div className="menu-item">
                    <IoCalendarNumberOutline className="icon" />
                    Today
                </div>
                <div className="menu-item">
                    <LuCalendarDays className="icon" />
                    Upcoming
                </div>
                <TodoFilter
                className="todo-filter menu-item"
                filter={filter}
                onHandleChange={onHandleChange}
            />
            </div>
        </aside>
    )
}
export default Sidenav