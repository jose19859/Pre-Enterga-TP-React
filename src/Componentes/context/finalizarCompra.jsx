const finalizarCompra = async (datosComprador, totalCompra) => {
    try {
      const ventasRef = collection(db, "ordenes");
      
      const nuevaOrden = {
        buyer: datosComprador,
        items: carrito,
        total: totalCompra,
        date: new Date()
      };

      const docRef = await addDoc(ventasRef, nuevaOrden);
      alert(`¡Compra exitosa! Tu número de orden es: ${docRef.id}`);
      vaciarCarrito(); // Limpia el carrito y devuelve el stock
      return docRef.id;
    } catch (error) {
      console.error("Error al registrar la compra: ", error);
      alert("Hubo un error al procesar tu compra. Inténtalo de nuevo.");
    }
  };