import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', paddingBottom: '40px' }}>
      
      {/* cartel principal */}
      <section style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://images.unsplash.com/photo-1631548259606-cfd16f860538?auto=format&fit=crop&w=1400&q=80") center/cover', 
        color: '#fff', 
        textAlign: 'center', 
        padding: '100px 20px',
        borderRadius: '12px',
        marginBottom: '40px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: '3.2rem', marginBottom: '20px', textShadow: '2px 2px 4px rgba(222, 241, 45, 0.5)' }}>
          Los Mejores Productos en 3D!
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
          Entra y conoce nuestra variedad de productos. Diseños únicos y personalizados.
        </p>
        <Link to="/productos">
          <button style={{ 
            background: 'linear-gradient(135deg, #e67e22, #d35400)', 
            color: '#fff', 
            border: 'none', 
            padding: '14px 32px', 
            fontSize: '1.1rem', 
            fontWeight: 'bold',
            borderRadius: '30px', 
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(230, 126, 34, 0.4)',
            transition: 'transform 0.2s'
          }}>
            Explorar Catálogo 3D
          </button>
        </Link>
      </section>

      {/* parte de Beneficios */}
      <section style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '25px', marginBottom: '50px' }}>
        
        <div style={{ background: 'linear-gradient(135deg, #ffffff, #f7f9fa)', padding: '25px', borderRadius: '12px', width: '280px', textAlign: 'center', borderTop: '4px solid #3498db', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>💎</div>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Alta Definición</h3>
          <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>Detalles ultra precisos y acabados profesionales en cada una de nuestras piezas impresas.</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #ffffff, #f7f9fa)', padding: '25px', borderRadius: '12px', width: '280px', textAlign: 'center', borderTop: '4px solid #e74c3c', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🎨</div>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Materiales Premium</h3>
          <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>Filamentos PLA y PETG de gran durabilidad, resistencia térmica y amplia gama de colores.</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #ffffff, #f7f9fa)', padding: '25px', borderRadius: '12px', width: '280px', textAlign: 'center', borderTop: '4px solid #2ecc71', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⚡</div>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Producción Rápida</h3>
          <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>Despachos seguros y tiempos de entrega optimizados para que tengas tu diseño al instante.</p>
        </div>

      </section>

      {/* Galería  */}
      <section style={{ textAlign: 'center', background: '#f8f9fa', padding: '40px 20px', borderRadius: '12px' }}>
        <h2 style={{ marginBottom: '10px', color: '#2c3e50' }}>Inspiración para tus Proyectos</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '30px' }}>Mirá algunas de nuestras creaciones más populares</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1aTXPJ36KV-FYdjYnzB-IACCvBi6EHn-nbxZrmzbzg&s=10" alt="Impresión 3D 1" style={{ width: '260px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
          <img src="https://images.cults3d.com/l9IZRUruicb0m-EtAOsuPZw4UuY=/246x246/filters:no_upscale()/https://fbi.cults3d.com/uploaders/33/illustration-file/e8d1d0b9-1f2a-41a5-9cb3-67b900728aa8/Capture%20d%E2%80%99e%CC%81cran%202018-01-08%20a%CC%80%2012.08.43.png" alt="Impresión 3D 2" style={{ width: '260px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
          <img src="https://images.cults3d.com/YsNqN-ZR_lTRFBOPs0D1unS8A0g=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/13784525/illustration-file/072f969a-8bf0-41c3-ab23-ba4741711402/DSC08874.JPG" alt="Impresión 3D 3" style={{ width: '260px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

    </div>
  );
}

export default Home;