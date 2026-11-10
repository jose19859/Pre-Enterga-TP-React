import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isRegistering) {
        await signup(email, password);
        alert('¡Cuenta creada con éxito!');
      } else {
        await login(email, password);
        alert('¡Inicio de sesión exitoso!');
      }
      navigate('/'); // nos envia al inicio despuesta de autentificacion
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#1a1a1a', color: '#fff' }}>
      <h2>{isRegistering ? 'Registro de Usuario' : 'Iniciar Sesión'}</h2>
      {error && <p style={{ color: '#e74c3c' }}>{error}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ padding: '10px', fontSize: '16px', background: '#222', color: '#fff', border: '1px solid #555', borderRadius: '4px' }}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: '10px', fontSize: '16px', background: '#222', color: '#fff', border: '1px solid #555', borderRadius: '4px' }}
        />
        <button type="submit" style={{ padding: '10px', background: '#00ffcc', color: '#000', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', borderRadius: '4px' }}>
          {isRegistering ? 'Registrarse' : 'Ingresar'}
        </button>
      </form>

      <p style={{ marginTop: '15px', textAlign: 'center' }}>
        {isRegistering ? '¿Ya tenés una cuenta?' : '¿No tenés cuenta?'} 
        <button 
          type="button"
          onClick={() => setIsRegistering(!isRegistering)} 
          style={{ background: 'none', border: 'none', color: '#00ffcc', cursor: 'pointer', textDecoration: 'underline', marginLeft: '5px' }}
        >
          {isRegistering ? 'Iniciá sesión' : 'Registrate'}
        </button>
      </p>
    </div>
  );
}

export default Login;