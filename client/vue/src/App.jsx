import { useState } from 'react'
import { Link } from "react-router-dom";

import Nav from './components/navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <header className="header-container">
        <h1>Welcome to my home page</h1>
      </header>
      <main className="main-container">
        
        <div className="button-group">
          <button><Link to="login">Login</Link></button>
          
          <button className="Button">Sign Up</button>
        </div>

      </main>
    </>
  )
}

export default App
