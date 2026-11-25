import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const ProtectedRoutes = () => {
  const { loading, isAuthenticated } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};
