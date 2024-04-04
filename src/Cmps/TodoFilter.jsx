const TodoFilter = ({ filter, onHandleChange }) => {
    return (
        <>
            <input type="search" placeholder="Search.." value={filter} onChange={onHandleChange}/>
        </>
    )
}
export default TodoFilter