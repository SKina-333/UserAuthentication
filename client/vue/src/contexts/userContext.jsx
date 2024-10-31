import { createContext, useState, useEffect } from "react";
//instead of localStorage can grab the username from session table in the database (can either store username in or grab the username by id stored in the session table)
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage if available
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username) => {
    setUser({ username });
    localStorage.setItem("user", JSON.stringify({ username })); 
  };

  const logout = () => {
    setUser(null);
    console.log(user);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};