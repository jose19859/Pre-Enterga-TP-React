import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((prod) => prod.id === Number(id));
        setProducto(encontrado);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar el detalle:", error);
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <h3 style={{ textAlign: 'center', padding: '40px' }}>Cargando detalle del producto...</h3>;
  }

  if (!producto) {
    return <h3 style={{ textAlign: 'center', padding: '40px' }}>Producto no encontrado.</h3>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
      
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>{producto.nombre}</h2>
        
        
        <span style={{ background: '#e0f7fa', color: '#00796b', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          {producto.categoria || 'Impresión 3D'}
        </span>

        <p style={{ color: '#666', lineHeight: '1.6', margin: '15px 0' }}>{producto.descripcion}</p>
        
        
        <div style={{ background: '#f9f9f9', padding: '12px', borderRadius: '6px', marginBottom: '15px', fontSize: '0.9rem', color: '#444' }}>
          <p style={{ margin: '4px 0' }}><strong>Material:</strong> {producto.material || 'PLA de alta resistencia'}</p>
          
        </div>

        <h3 style={{ color: '#27ae60', fontSize: '1.5rem', marginBottom: '5px' }}>${producto.precio}</h3>
        <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>Stock disponible: {producto.stock} unidades</p>
        
        <button 
          onClick={() => agregarAlCarrito(producto)}
          style={{ background: '#3498db', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;