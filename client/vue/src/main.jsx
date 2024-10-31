import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import LoginPage from './pages/login page/loginPage.jsx';
import SignUpPage from './pages/signup page/signupPage.jsx';
import {UserProvider } from './contexts/userContext.jsx';
import ProtectedRoute from './contexts/protectedRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: (
      <ProtectedRoute redirectTo="/">
        <LoginPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "signup",
    element: (
      <ProtectedRoute redirectTo="/">
        <SignUpPage />
      </ProtectedRoute>
    ),
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    
  </StrictMode>,
)
