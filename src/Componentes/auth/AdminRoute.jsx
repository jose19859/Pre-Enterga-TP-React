import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import { verificarRolAdmin } from "../../firebase/authRoles";

export function AdminRoute({ children }) {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const chequearPermisos = async () => {
      if (!user) {
        setIsAdmin(false);
        return;
      }
      const esAdmin = await verificarRolAdmin(user.uid);
      setIsAdmin(esAdmin);
    };

    chequearPermisos();
  }, [user]);

  if (isAdmin === null) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: '50px' }}>Verificando permisos de administrador...</div>;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
