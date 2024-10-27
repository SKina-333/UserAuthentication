import { useState } from 'react'
import axios from "axios";
import './loginPage.css'
import Nav from '../../components/navbar.jsx'
function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
          await axios.post("/login", { username, password });
          alert("Logged in!");
        } catch (error) {
          alert("Login failed");
        }
    };

  return (
    <>
        <Nav/>
        <header className="header-container">
            <h1>Welcome to my login page</h1>
        </header>
        <main className="main-container">
            
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

        </main>
    </>
  )
}

export default LoginPage
