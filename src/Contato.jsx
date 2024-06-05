import React from 'react';
import { Link } from 'react-router-dom';
import './Contato.css'; // Importação do arquivo CSS
import { useLocation } from 'react-router-dom';

function Contato() {
  const location = useLocation();
  const objeto = location.state && location.state.objeto;

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <div className="contato-container">
        <h1 className="contato-title">Página de Contato</h1>
        {objeto ? (
          <p>Meu nome é {objeto}</p>
        ) : (
          <p>Meu nome é Rian Durigan</p>
        )}
      </div>
    </div>
  );
};

export default Contato;
