import todoLogo from "../Assets/Img/todo-icon-512x512.png"
import { RxHamburgerMenu } from "react-icons/rx";

import Navbar from "./Navbar"
import { useState } from "react";

const Header = () => {
  const [navShow, setNavShow] = useState(false)
const headerClass = navShow ? "header active" : "header";
  return (
    <div className="header-container">
      <header className={headerClass}>
        <div className="logo-container">
          <img src={todoLogo} alt="" className="logo-img" />
          <h1 className="logo-text"><span>Check</span>Box</h1>
        </div>
        <div>
          <RxHamburgerMenu className="menu-icon" onClick={() => setNavShow(!navShow)} />
        </div>
      </header>
      <Navbar navShow={navShow} />
    </div>
  )
}
export default Header