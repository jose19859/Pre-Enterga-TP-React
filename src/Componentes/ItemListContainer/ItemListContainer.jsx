import React, { useState, useEffect } from 'react';
import Item from '../item/Item'; 

function ItemListContainer({ Mensaje }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos 3D:", error);
        setCargando(false); 
      });
  }, []);

  if (cargando) {
    return <h3 style={{ textAlign: 'center', padding: '40px' }}>Cargando catálogo de impresión 3D...</h3>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{Mensaje}</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;