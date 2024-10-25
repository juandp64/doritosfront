import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/user.css';

export default function Admin() {
  const [ganadores, setGanadores] = useState([]);

  useEffect(() => {
    const obtenerGanadores = async () => {
      const response = await fetch('https://doritosback.vercel.app/api/tablaAdmin');
      const data = await response.json();
      setGanadores(data.ganadores);
    };

    obtenerGanadores();
  }, []);

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
