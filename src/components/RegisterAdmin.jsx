import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

export default function RegisterAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://doritosback.vercel.app/api/newAdmin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, rol: 'admin' })
      });
      const data = await response.json();

      if (data.success) {
        alert('Registro de administrador exitoso');
        navigate('/');
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro Administrador</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="correo"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="contraseña"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrarse</button>
      </form>
    </div>
  );
}
