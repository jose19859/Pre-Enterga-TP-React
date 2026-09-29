import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    const index = carrito.findIndex((prod) => prod.id === producto.id);
    if (index !== -1) {
      const carritoCopied = [...carrito];
      carritoCopied[index].cantidad += cantidad;
      setCarrito(carritoCopied);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
    alert(`¡Agregaste ${producto.nombre} al carrito! 🛒`);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;