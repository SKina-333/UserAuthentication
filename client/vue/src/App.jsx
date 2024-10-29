import { useState } from 'react'
import { useNavigate  } from "react-router-dom";

import Nav from './components/navbar.jsx'
import Button from './components/button.jsx'
import Header from './components/header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateSignup = () => {
    navigate("/signup"); 
  };

  return (
    <>
      <Nav/>
      <Header label="Welcome to my Homepage"/>
      <main className="main-container">
        
        <div className="button-group">
          <Button label="Sign In" onClick={navigateLogin}/>
          <Button label="Sign Up" onClick={navigateSignup}/>  
        </div>

      </main>
    </>
  )
}

export default App
