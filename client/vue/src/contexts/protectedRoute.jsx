import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext.jsx";

const ProtectedRoute = ({ redirectTo , children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return user ? navigate(redirectTo) : children;
};

export default ProtectedRoute;