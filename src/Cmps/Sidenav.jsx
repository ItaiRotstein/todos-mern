import { useState } from "react"

import TodoFilter from "./TodoFilter"
import AddTodo from "./AddTodo"

import { TbArrowsSort } from "react-icons/tb";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

const Sidenav = ({ onHandleFilter, addTodo }) => {
    const [filter, setFilter] = useState('')

    const onHandleChange = (e) => {
        const { value } = e.target
        setFilter(value)
        onHandleFilter(value)
    }

    return (
        <section className={"sidenav"}>
            <TodoFilter
                filter={filter}
                onHandleChange={onHandleChange}
            />
            <div className="sidenav-container">
                <AddTodo addTodo={addTodo} />
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
            </div>
        </section>
    )
}
export default Sidenav