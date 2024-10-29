import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import './css/navbar.css';

function Nav() {
  
  const isActive = (path) => location.pathname === path;
  return (
    
      <nav className="navbar-container">
        <Link 
          to="/" 
          className={`navItem ${isActive("/") ? "active" : ""}`}
          onClick={(e) => isActive("/") && e.preventDefault()}
        >Home</Link>
        <Link 
          to="/login" 
          className={`navItem ${isActive("/login") ? "active" : ""}`}
          onClick={(e) => isActive("/login") && e.preventDefault()}
        >Login</Link>
        <Link 
          to="/signup" 
          className={`navItem ${isActive("/signup") ? "active" : ""}`}
          onClick={(e) => isActive("/signup") && e.preventDefault()}
        >Sign Up</Link>
      </nav>
    
  )
}

export default Nav
