import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/user.css'; // Usaremos el mismo archivo CSS que en el componente User.jsx

export default function Admin() {
  // Datos de ejemplo para los ganadores
  const ganadores = [
    { fecha: '2024-10-20 15:34', nombre: 'Juan Pérez', cedula: '123456789', celular: '987654321', codigo: '123', premio: 'Premio 1' },
    { fecha: '2024-10-21 09:12', nombre: 'Ana López', cedula: '987654321', celular: '123456789', codigo: '456', premio: 'Premio 2' },
    // Más ganadores aquí
  ];

  return (
    <>
      <div className='nav'>
        <h2>Administrador: Juan Admin</h2>
        <div className="Volver-link">
          <Link to="/" className="btn btn-link">Salir</Link>
        </div>
      </div>

      <div className="user-container">
        {/* Sección para mostrar la tabla de ganadores */}
        <div className="codigos-registrados">
          <h4>Ganadores</h4>
          {ganadores.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Nombre</th>
                  <th>Cédula</th>
                  <th>Celular</th>
                  <th>Código</th>
                  <th>Premio</th>
                </tr>
              </thead>
              <tbody>
                {ganadores.map((ganador, index) => (
                  <tr key={index}>
                    <td>{ganador.fecha}</td>
                    <td>{ganador.nombre}</td>
                    <td>{ganador.cedula}</td>
                    <td>{ganador.celular}</td>
                    <td>{ganador.codigo}</td>
                    <td>{ganador.premio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className='sin-info'>No hay ganadores aún.</p>
          )}
        </div>
      </div>
    </>
  );
}
