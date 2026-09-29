import React from 'react';
import Nav from './Nav'; 

function Header() {
  return (
    <header style={{ background: '#65f009', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>🔥 3D Print Lab 🔥</h1>
      <Nav />
    </header>
  );
}

export default Header;