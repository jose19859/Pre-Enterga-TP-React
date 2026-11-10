import React from 'react';
import Navbar from '../navbar/Navbar'; 
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Navbar /> 
      <main style={{ minHeight: '70vh', padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;