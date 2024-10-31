import { useState } from 'react'
import axios from "axios";
import './signupPage.css'
import Nav from '../../components/navbar.jsx'
import Header from '../../components/header.jsx'
import InputGroup from '../../components/inputGroup.jsx';
import Button from '../../components/button.jsx';

import Alert from '../../components/alert.jsx';

import { Link  } from "react-router-dom";
function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [flashMessage, setFlashMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleRegister = async () => {
        try {
          await axios.post("http://localhost:5000/login/new", { username, password })
          .then(
            function (response) {
                if (response.status === 201) {
                    setFlashMessage("Sucessful"); 
                    setShowAlert(true)
                    setUsername('');
                    setPassword('');
                }
            }
          )
          .catch(
            function (error) {
              if (error.response){
               
                    setFlashMessage("Failed"); 
                    setShowAlert(true)
                    
              }
            }
          );
          
        } catch (error) {
          setFlashMessage("An error occurred. Please try again later.");
          setShowAlert(true)
        }
    };

  return (
    <>
        <Nav/>
        <Header label="Register Page"/>
        <Alert alert={flashMessage} isShown={showAlert}/>
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
