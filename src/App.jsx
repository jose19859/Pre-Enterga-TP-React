import { Routes, Route } from 'react-router-dom';
import Layout from './Componentes/layout/Layout';
import Home from './Componentes/home/Home';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'; 
import Cart from './Componentes/cart/Cart';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer Mensaje="Catálogo de Diseños 3D" />} />
        
        {/* Ruta de Detalle de Producto por ID dinámico */}
        <Route path="/producto/:id" element={<ItemDetailContainer />} />

        <Route path="/carrito" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;