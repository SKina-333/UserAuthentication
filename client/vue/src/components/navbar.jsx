import { useState } from 'react'
import { Link } from "react-router-dom";


function Nav() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Sign Up</Link>
      </nav>
    </>
  )
}

export default Nav
