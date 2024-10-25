import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    nombre: '', fechaNacimiento: '', cedula: '', email: '', celular: '', ciudad: '', password: ''
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://doritosback.vercel.app/api/newUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, rol: 'user' })
      });
      const data = await response.json();

      if (data.success) {
        alert('Registro exitoso');
        navigate('/');
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        {/* Campos de registro */}
        {Object.keys(formData).map((key) => (
          <div className="mb-3" key={key}>
            <input
              type={key === 'fechaNacimiento' ? 'date' : 'text'}
              className="form-control"
              id={key}
              placeholder={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary mt-3">Registrarse</button>
      </form>
    </div>
  );
}
