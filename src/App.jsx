import { Routes, Route } from 'react-router-dom';
import Layout from './Componentes/layout/Layout';
import Home from './Componentes/home/Home';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'; 
import Cart from './Componentes/cart/Cart';
import Login from './Componentes/auth/Login'; 
import ProtectedRoute from './Componentes/auth/ProtectedRoute'; 
import AdminRoute from './Componentes/auth/AdminRoute'; 
import AdminProductos from "./Componentes/Admin/AdminProductos";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer Mensaje="Catálogo de Diseños 3D" />} />
        
        {/* Rutas de Detalle de Producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />

        <Route path="/carrito" element={<Cart />} />
        
        {/* Rutas de Autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        
        {/* Ruta Protegida: Perfil de Usuario */}
        <Route 
          path="/perfil" 
          element={
            <ProtectedRoute>
              <div><h2>Panel de Usuario / Perfil Privado</h2></div>
            </ProtectedRoute>
          } 
        />

        {/* Ruta Protegida: Panel de Administración */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminProductos />
            </AdminRoute>
          } 
        />
      </Route>
    </Routes>
  );
}

export default App;