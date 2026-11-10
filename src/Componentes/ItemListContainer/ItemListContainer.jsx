import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Item from '../item/Item';

const ItemListContainer = () => {
  const { productos, cargando, error } = useCart();
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((prod) =>
    (prod.nombre || '').toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) {
    return <h3 style={{ textAlign: 'center', color: '#fff', marginTop: '50px' }}>Cargando catálogo...</h3>;
  }
  if (error) {
    return <h3 style={{ textAlign: 'center', color: '#e74c3c', marginTop: '50px' }}>{error}</h3>;
  }

  return (
    <div style={{ padding: '20px', color: '#fff', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Catálogo de 3D Print Lab</h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Buscar producto por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            width: '100%', maxWidth: '500px', padding: '12px 16px',
            borderRadius: '6px', border: '1px solid #444',
            backgroundColor: '#222', color: '#fff', fontSize: '16px', outline: 'none'
          }}
        />
      </div>

    {productosFiltrados.length > 0 ? (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
    {productosFiltrados.map((prod) => (
      <Item key={prod.id} {...prod} />
    ))}
  </div>
) : (
  <p style={{ textAlign: 'center', fontSize: '18px', color: '#aaa' }}>
    No se encontraron productos que coincidan con tu búsqueda.
  </p>
)}
    </div>
  );
};

export default ItemListContainer;