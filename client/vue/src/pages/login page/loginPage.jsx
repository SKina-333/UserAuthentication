import { useState, useContext } from 'react'
import axios from "axios";
import './loginPage.css'
import Nav from '../../components/navbar.jsx'
import Header from '../../components/header.jsx'
import InputGroup from '../../components/inputGroup.jsx';
import Button from '../../components/button.jsx';
import { useNavigate  } from "react-router-dom";

import {UserContext} from '../../contexts/userContext.jsx';

import Alert from '../../components/alert.jsx';
function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(UserContext);
    const [flashMessage, setFlashMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleLogin = async () => {
        try {
          await axios.post("http://localhost:5000/login", { username, password })
          .then(
            function (response){
              if (response.data.username) {
                login(response.data.username); // Set user context
              }
            }
          )
          .catch();
          
        } catch (error) {
          console.log(error);
          
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
