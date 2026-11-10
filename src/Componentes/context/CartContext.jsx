import React, { createContext, useState, useContext, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "productos"))
      .then((snap) =>
        setProductos(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
      )
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setError("No se pudieron cargar los productos");
      })
      .finally(() => setCargando(false));
  }, []);

  const agregarAlCarrito = (producto, cantidadSeleccionada) => {
    const cantidad = Number(cantidadSeleccionada);
    const existe = carrito.some((item) => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: Number(item.cantidad) + cantidad }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  // Función para restar de a uno productos
  const eliminarDelCarrito = (id) => {
    const productoEnCarrito = carrito.find((item) => item.id === id);
    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad > 1) {
        setCarrito(
          carrito.map((item) =>
            item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
          )
        );
      } else {
        setCarrito(carrito.filter((item) => item.id !== id));
      }
    }
  };

  // vaciar carrito
  const eliminarProductoCompleto = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const precioTotal = carrito.reduce(
    (acc, item) => acc + Number(item.precio) * Number(item.cantidad),
    0
  );

  const finalizarCompra = async (datosComprador) => {
    try {
      const docRef = await addDoc(collection(db, "ordenes"), {
        buyer: datosComprador,
        items: carrito,
        total: precioTotal,
        date: new Date(),
      });
      setCarrito([]); 
      return docRef.id;
    } catch (err) {
      console.error("Error al registrar la compra:", err);
      alert("Hubo un error al procesar tu compra. Inténtalo de nuevo.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        productos, cargando, error,
        carrito, precioTotal,
        agregarAlCarrito, eliminarDelCarrito, eliminarProductoCompleto,
        vaciarCarrito, limpiarCarrito: vaciarCarrito,
        finalizarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};