import React from 'react';
import { useCart } from '.././context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { carrito, precioTotal, eliminarDelCarrito, vaciarCarrito, finalizarCompra } = useCart();
  const navigate = useNavigate();

  const handleTerminarCompra = async () => {
   
    const datosComprador = { nombre: "juan", email: "juan@3dprintlab.com" };
    
    
    await finalizarCompra(datosComprador);

    // mensaje de agradecimiento
    alert("¡Muchas gracias por su compra! Su pedido se ha procesado con éxito.");

    // nos manda al inicio de la web
    navigate("/");
  };

  if (!carrito || carrito.length === 0) {
    return (
      <div style={{ padding: '40px', color: '#fff', textAlign: 'center' }}>
        <h2>Tu carrito está vacío</h2>
        <p style={{ color: '#aaa', margin: '20px 0' }}>¡Explora el catálogo y añade tus impresiones 3D favoritas!</p>
        <Link 
          to="/" 
          style={{ background: '#00ffcc', color: '#000', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Ver Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', color: '#fff', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Carrito de Compras</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {carrito.map((producto) => (
          <div 
            key={producto.id} 
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1a1a1a', padding: '15px', borderRadius: '8px', border: '1px solid #444', flexWrap: 'wrap', gap: '15px' }}
          >
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <div style={{ flex: '1', minWidth: '200px' }}>
              <h4>{producto.nombre}</h4>
              <p>Cantidad: {producto.cantidad}</p>
              <p style={{ color: '#00ffcc', fontWeight: 'bold' }}>Precio u.: ${producto.precio}</p>
            </div>
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Subtotal: ${producto.precio * producto.cantidad}</p>
              <button 
                onClick={() => eliminarDelCarrito(producto.id)}
                style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px', textAlign: 'right', borderTop: '1px solid #444', paddingTop: '20px' }}>
        <h3>Total a Pagar: ${precioTotal}</h3>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '15px', flexWrap: 'wrap' }}>
          <button 
            onClick={vaciarCarrito}
            style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Vaciar Carrito
          </button>
          
         
          <button 
            onClick={handleTerminarCompra}
            style={{ background: '#00ffcc', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Terminar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;