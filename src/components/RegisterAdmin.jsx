import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import '../styles/register.css';

export default function RegisterAdmin() {
  return (
    <div className="register-container">
      <h2>Registro Administrador</h2>
      <form>
        <div className="mb-3">
          <input type="email" className="form-control" id="correo" placeholder="Correo" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrarse</button>
      </form>
      <div className="Volver-link mt-3">
        <Link to="/" className="btn btn-link">Volver</Link>
      </div>
    </div>
  );
}