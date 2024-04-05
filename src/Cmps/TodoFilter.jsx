const TodoFilter = ({ filter, onHandleChange }) => {
    return (
        <>
            <input
                type="text"
                placeholder="Search.."
                value={filter}
                onChange={onHandleChange}
                className="todo-filter "
            />
        </>
    )
}
export default TodoFilter