import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import Logo from '../img/DoritosLogo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://doritosback.vercel.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (data.success) {
        // Redirige según el rol del usuario
        if (data.rol === 'admin') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      } else {
        alert('Login fallido, revisa tus credenciales');
      }
    } catch (error) {
      console.error('Error en el login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="login-logo" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
      </form>
      <div className="register-link mt-3">
        <Link to="/register" className="btn btn-link">¿No tienes cuenta? Regístrate</Link>
      </div>
    </div>
  );
}
