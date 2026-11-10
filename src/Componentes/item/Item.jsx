import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, imagen, precio, stock }) => {
  const imagenPorDefecto = "https://via.placeholder.com/200?text=3D+Print+Lab";

  return (
    <div style={{ border: '1px solid #444', padding: '15px', borderRadius: '8px', background: '#1a1a1a', width: '250px', color: '#fff' }}>
      <img 
        src={imagen || imagenPorDefecto} 
        alt={nombre} 
        style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      
      <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{nombre}</h3>
      <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#00ffcc' }}>${precio}</p>
      <p style={{ fontSize: '14px', color: '#aaa' }}>Stock: {stock}</p>

      <Link 
        to={`/item/${id}`} 
        style={{ display: 'block', textAlign: 'center', background: '#00ffcc', color: '#000', padding: '8px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', marginTop: '15px' }}
      >
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;