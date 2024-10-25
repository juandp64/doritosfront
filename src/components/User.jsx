import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/user.css';

export default function User() {
  const [codigo, setCodigo] = useState('');
  const [codigosIngresados, setCodigosIngresados] = useState([]);

  useEffect(() => {
    // Obtener códigos del usuario logueado desde el backend
    const obtenerCodigos = async () => {
      const response = await fetch('https://doritosback.vercel.app/api/tablaUser');
      const data = await response.json();
      setCodigosIngresados(data.codigos);
    };

    obtenerCodigos();
  }, []);

  const registrarCodigo = async () => {
    if (codigo.length === 3) {
      const response = await fetch('https://doritosback.vercel.app/api/registrarCodigo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo })
      });
      const data = await response.json();

      if (data.success) {
        setCodigosIngresados([...codigosIngresados, data.codigo]);
        alert(data.mensaje);
      } else {
        alert('Error al registrar código');
      }

      setCodigo('');
    } else {
      alert('Por favor, ingrese un código de 3 dígitos.');
    }
  };

  return (
    <>
      <div className='nav'>
        <h2>Usuario</h2>
        <div className="Volver-link">
          <Link to="/" className="btn btn-link">Salir</Link>
        </div>
      </div>

      <div className="user-container">
        {/* Sección para ingresar el código */}
        <div className="codigo-ingreso">
          <input
            type="text"
            value={codigo}
            onChange={manejarCambioCodigo}
            placeholder="Ingrese tu código"
            maxLength={3}
            className="form-control"
          />
          <button onClick={registrarCodigo} className="btn btn-primary">Registrar</button>
        </div>

        {/* Sección para mostrar los códigos ingresados en una tabla */}
        <div className="codigos-registrados">
          <h4>Códigos Registrados</h4>
          {codigosIngresados.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Código</th>
                  <th>Premio</th>
                </tr>
              </thead>
              <tbody>
                {codigosIngresados.map((item, index) => (
                  <tr key={index}>
                    <td>{item.fecha}</td>
                    <td>{item.codigo}</td>
                    <td>{item.premio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className='sin-info'>No has ingresado ningún código aún.</p>
          )}
        </div>
      </div>
    </>
  );
}

