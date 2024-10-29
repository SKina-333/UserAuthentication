import { useState } from 'react'
import axios from "axios";
import './signupPage.css'
import Nav from '../../components/navbar.jsx'
import Header from '../../components/header.jsx'
import InputGroup from '../../components/inputGroup.jsx';
import Button from '../../components/button.jsx';

import { Link  } from "react-router-dom";
function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
          await axios.post("http://localhost:5000/new", { username, password });
          alert("Logged in!");
        } catch (error) {
          console.log(error);
          alert("Login failed");
        }
    };

  return (
    <>
        <Nav/>
        <Header label="Register Page"/>
        <div className="input-container registerPage">
          <InputGroup type="text" placeholder="type your username" value={username} onChange={(e) => setUsername(e.target.value)} labelName="USERNAME" name="username" />
          <InputGroup type="password" placeholder="type your password" value={password} onChange={(e) => setPassword(e.target.value)} labelName="PASSWORD" name="password" />
        </div>
        <div className="button-group registerPage">
          <Button label="Register" onClick={handleRegister}/>
          <div className="link-container registerPage">
            <Link to="/" className='cancel-link'>Back to Homepage</Link>
          </div>
          
        </div>
    </>
  )
}

export default SignupPage
