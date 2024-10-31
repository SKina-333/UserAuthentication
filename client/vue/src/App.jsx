import { useState,useContext } from 'react'
import { useNavigate  } from "react-router-dom";
import {UserContext} from './contexts/userContext.jsx';


import Nav from './components/navbar.jsx'
import Button from './components/button.jsx'
import Header from './components/header.jsx'
import './App.css'

function App() {
  const { user } = useContext(UserContext);
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const navigateLogin = () => {
    if (user){
      navigate("/");
    }else {
      navigate("/login");
    }
    
  };
  const navigateSignup = () => {
    if (user){
      navigate("/");
    }else {
      navigate("/signup");
    } 
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
