import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
      <Link to="/productos" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Productos</Link>
      <Link to="/carrito" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>🛒 Carrito</Link>
    </nav>
  );
}

export default Nav;