import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'; 
import { useCart } from '../context/CartContext';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidadAgregada, setCantidadAgregada] = useState(false);
  const [cantidad, setCantidad] = useState(1); // 👈 Estado para manejar las unidades elegidas
  
  // Capturamos el id que viene en la URL (:id)
  const { id } = useParams();
  
  // Traemos la función correcta desde el contexto de una sola vez
  const { agregarAlCarrito } = useCart(); 

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error("El producto no existe");
        }
      })
      .catch((error) => console.error("Error al cargar el detalle:", error))
      .finally(() => setLoading(false));
  }, [id]);

  // Funciones para sumar y restar del contador local
  const handleSumar = () => {
    if (producto && cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto, cantidad); // 👈 Enviamos la cantidad seleccionada en lugar de un 1 fijo
    setCantidadAgregada(true);            // Cambiamos el estado visual para mostrar el botón de ir al carrito
  };

  if (loading) {
    return <h3 style={{ textAlign: 'center', color: '#fff', marginTop: '50px' }}>Cargando detalle...</h3>;
  }

  if (!producto) {
    return <h3 style={{ textAlign: 'center', color: '#e74c3c', marginTop: '50px' }}>Producto no encontrado.</h3>;
  }

  return (
    <div style={{ padding: '20px', color: '#fff', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '30px', background: '#1a1a1a', padding: '20px', borderRadius: '8px', border: '1px solid #444', flexWrap: 'wrap', justifyContent: 'center' }}>
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          style={{ width: '350px', height: '300px', objectFit: 'cover', borderRadius: '6px' }} 
        />
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h2>{producto.nombre}</h2>
          <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#00ffcc', margin: '15px 0' }}>${producto.precio}</p>
          <p style={{ color: '#aaa', marginBottom: '15px' }}>Stock disponible: {producto.stock}</p>
          <p style={{ marginBottom: '20px' }}>{producto.descripcion || "Impresión 3D de alta calidad."}</p>

          {/* Botón de compra / agregar al carrito condicional */}
          {cantidadAgregada ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ color: '#00ffcc', fontWeight: 'bold' }}>¡Producto agregado al carrito!</span>
              <Link 
                to="/carrito" 
                style={{ background: '#00ffcc', color: '#000', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center' }}
              >
                Terminar mi compra (Ir al Carrito)
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* Controles de cantidad (+ y -) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: 'bold' }}>Cantidad:</span>
                <button 
                  onClick={handleRestar}
                  style={{ background: '#444', color: '#fff', border: 'none', width: '30px', height: '30px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                >
                  -
                </button>
                <span style={{ fontSize: '18px', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{cantidad}</span>
                <button 
                  onClick={handleSumar}
                  style={{ background: '#444', color: '#fff', border: 'none', width: '30px', height: '30px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAgregarAlCarrito}
                style={{ background: '#00ffcc', color: '#000', border: 'none', padding: '12px 24px', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Comprar / Agregar al Carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;