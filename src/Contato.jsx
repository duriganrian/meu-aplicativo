import React from 'react';
import './Contato.css'; // Importação do arquivo CSS
import { useNavigate, useLocation } from 'react-router-dom';

function Contato() {
  const navigate = useNavigate();
  const location = useLocation();
  const objeto = location.state && location.state.objeto;

  return (
    <div className="contato-container">
      <h1 className="contato-title">Página de Contato</h1>
      {objeto ? (
        <p>Meu nome é {objeto}</p>
      ) : (
        <p>Meu nome é Rian Durigan</p>
      )}
    </div>
  );
};

export default Contato;
