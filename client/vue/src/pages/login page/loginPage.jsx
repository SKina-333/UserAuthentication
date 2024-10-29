import { useState } from 'react'
import axios from "axios";
import './loginPage.css'
import Nav from '../../components/navbar.jsx'
import Header from '../../components/header.jsx'
import InputGroup from '../../components/inputGroup.jsx';
import Button from '../../components/button.jsx';
import { useNavigate  } from "react-router-dom";
function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
          await axios.post("http://localhost:5000/login", { username, password });
          alert("Logged in!");
        } catch (error) {
          console.log(error);
          alert("Login failed");
        }
    };
    const navigate = useNavigate();
    const navigateSignup = () => {
      navigate("/signup"); 
    };

  return (
    <>
        <Nav/>
        <Header label="Login Page"/>
        <div className="input-container loginPage">
          <InputGroup type="text" placeholder="JohnDoe123" value={username} onChange={(e) => setUsername(e.target.value)} labelName="USERNAME" name="username" />
          <InputGroup type="password" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)} labelName="PASSWORD" name="password" />
        </div>
        <div className="button-group loginPage">
          <Button label="Login" onClick={handleLogin}/>
          <Button label="Register" onClick={navigateSignup}/>
        </div>
    </>
  )
}

export default LoginPage
