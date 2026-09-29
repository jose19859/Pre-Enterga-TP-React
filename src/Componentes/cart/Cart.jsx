import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { carrito, vaciarCarrito } = useContext(CartContext); // Importamos la función

  if (carrito.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>🛒 Tu carrito está vacío</h2>
        <p style={{ color: '#666', margin: '20px 0' }}>Todavía no has agregado ningún diseño 3D.</p>
        <Link to="/productos">
          <button style={{ background: '#e67e22', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            Ir al Catálogo
          </button>
        </Link>
      </div>
    );
  }

  const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>🛒 Carrito de Compras</h2>
      
      <div style={{ marginTop: '20px' }}>
        {carrito.map((prod) => (
          <div key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '15px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <div>
              <h4>{prod.nombre}</h4>
              <p style={{ color: '#666' }}>Cantidad: {prod.cantidad}</p>
            </div>
            <p style={{ fontWeight: 'bold', color: '#27ae60' }}>${prod.precio * prod.cantidad}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        {/* Botón para vaciar todo el carrito */}
        <button 
          onClick={vaciarCarrito}
          style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Vaciar Carrito 🗑️
        </button>

        <h3 style={{ margin: 0 }}>Total a pagar: ${total}</h3>
      </div>
    </div>
  );
}

export default Cart;