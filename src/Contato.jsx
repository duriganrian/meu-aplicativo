import React from 'react';
import './Contato.css'; // Importação do arquivo CSS
import { useNavigate, useLocation } from 'react-router-dom';

function Contato() {
  const navigate = useNavigate();
  const location = useLocation();
  const objeto = location.state.objeto;

  return (
    <div className="contato-container">
      <h1 className="contato-title">Página de Contato</h1>
      <p>Meu nome é {objeto}</p>
    </div>
  );
};

export default Contato;