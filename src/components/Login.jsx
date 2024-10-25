import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/login.css';
import Logo from '../img/DoritosLogo.png'; // Asegúrate de usar el nombre 'Logo'

export default function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="login-logo" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="username" placeholder="Correo electrónico" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="password" placeholder="Contraseña" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
      </form>
      <div className="register-link mt-3">
        <Link to="/register" className="btn btn-link">¿No tienes cuenta? Regístrate</Link>
      </div>
    </div>
  );
}
