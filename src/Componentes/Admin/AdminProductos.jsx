import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  
  //  Estados de carga y error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
 
  const [form, setForm] = useState({ nombre: '', precio: '', stock: '', descripcion: '' });

  // Función para obtener productos con manejo de carga y errores
  const obtenerProductos = async () => {
    setLoading(true);
    setError(null);
    try {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const lista = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(lista);
    } catch (err) {
      console.error("Error al obtener productos:", err);
      setError("No se pudieron cargar los productos. Verificá tu conexión a internet.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  // Función para agregar producto con manejo de errores
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addDoc(collection(db, "productos"), {
        nombre: form.nombre,
        precio: Number(form.precio),
        stock: Number(form.stock),
        descripcion: form.descripcion
      });
      setForm({ nombre: '', precio: '', stock: '', descripcion: '' });
      obtenerProductos();
    } catch (error) {
      console.error("Error al guardar:", error);
      setError("Ocurrió un error al guardar el producto. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>Panel de Administración - 3D Print Lab</h2>

      {/* Mostrar indicador de carga */}
      {loading && <p style={{ color: '#00ffcc' }}> Cargando datos, por favor espere...</p>}

      {/* Mostrar mensaje de error si ocurre */}
      {error && (
        <div style={{ background: '#ff4d4d', color: '#fff', padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
          ⚠️ <strong>Error:</strong> {error}
        </div>
      )}

      {/* Tu formulario de carga */}
      <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
        
      </form>

     
      <h3>Listado de Artículos Existentes</h3>
      <ul>
        {productos.map(prod => (
          <li key={prod.id}>{prod.nombre} - ${prod.precio} (Stock: {prod.stock})</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductos;