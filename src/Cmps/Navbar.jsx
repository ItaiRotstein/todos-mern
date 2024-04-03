const Navbar = ({ navShow }) => {
  
  const navClass = navShow ? "navbar active" : "navbar"
  
  console.log(navClass);
  return (
    <div className={navClass}>
      <form action="">
        <input type="text" placeholder="Search.." />
      </form>
    </div>
  )
}
export default Navbar