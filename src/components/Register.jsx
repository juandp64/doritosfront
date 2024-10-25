import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import '../styles/register.css';

export default function Register() {
  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
        </div>
        <div className="mb-3">
          <input type="date" className="form-control" id="fecha-nacimiento" placeholder="Fecha de nacimiento" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="cedula" placeholder="Cédula" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="correo" placeholder="Correo" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="celular" placeholder="Celular" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="ciudad" placeholder="Ciudad" />
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
