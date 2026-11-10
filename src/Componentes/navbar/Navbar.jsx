import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', background: '#111', color: '#fff' }}>
     <Link to="/" style={{ color: '#00ffcc', textDecoration: 'none', fontWeight: 'bold', fontSize: '50px' }}>
  🔥 3D Print Lab 🔥
</Link>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/productos" style={{ color: '#fff', textDecoration: 'none' }}>Productos</Link>
        <Link to="/carrito" style={{ color: '#fff', textDecoration: 'none' }}>Carrito</Link>

      
        {user ? (
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#aaa' }}>{user.email}</span>
            <button 
              onClick={logout}
              style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/login" style={{ background: '#333', color: '#fff', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none' }}>
              Login
            </Link>
            <Link to="/register" style={{ background: '#00ffcc', color: '#000', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;