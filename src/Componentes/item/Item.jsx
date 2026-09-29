import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, nombre, precio, stock, imagen }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '220px', textAlign: 'center', background: '#fff' }}>
      <img src={imagen} alt={nombre} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{nombre}</h3>
      <p style={{ fontWeight: 'bold', color: '#27ae60' }}>${precio}</p>
      <p style={{ fontSize: '0.85rem', color: '#666' }}>Stock disponible: {stock}</p>
      
      <Link to={`/producto/${id}`}>
        <button style={{ background: '#3498db', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
          Ver Detalle
        </button>
      </Link>
    </div>
  );
}

export default Item;