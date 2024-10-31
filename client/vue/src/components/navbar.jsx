import {  useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import {UserContext} from '../contexts/userContext.jsx';
import axios from "axios";
import './css/navbar.css';

function Nav() {
  const { user, logout } = useContext(UserContext);
  const isActive = (path) => location.pathname === path;


  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/login/logout")
      .then(
        function (response){
           if (response.status === 200){
              logout();
           } // Set user context
          
        }
      )
      .catch(
        function (error) {
          console.log(error);
        }
      );
      
    } catch (error) {
      console.log(error);
      
    }
};
  return (
        <>
          {user ? (
              <nav className="navbar-container">
                <Link 
                  to="/" 
                  className={`navItem ${isActive("/") ? "active" : ""}`}
                  onClick={(e) => isActive("/") && e.preventDefault()}
                >Home</Link>
                <p className='profile'>Welcome, {user.username}!</p>
                <Link to="/" className='navItem' onClick={handleLogout} >Logout</Link>
              </nav>
            ) : (
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
            )}
        </>
  )
}

export default Nav
