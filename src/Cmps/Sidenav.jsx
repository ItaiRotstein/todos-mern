import { useState } from "react"

import TodoFilter from "./TodoFilter"

const Sidenav = ({onHandleFilter}) => {
    const [filter, setFilter] = useState('')

    const onHandleChange = (e) => {
        const {value} = e.target
        setFilter(value)
        onHandleFilter(value)
        // const key = ev.target.name
        // const { value } = ev.target
        // let { filterBy } = this.props
        // filterBy = { ...filterBy, [key]: value }
        // this.props.filterToy(filterBy)
    }

    return (
        <aside className="sidenav">
            <div>
                <input type="checkbox" />
                <label htmlFor="">Completed</label>
            </div>
            <TodoFilter
                filter={filter}
                onHandleChange={onHandleChange}
            />
        </aside>
    )
}
export default Sidenav