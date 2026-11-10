import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Si no está logueado, lo redirige al login
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;