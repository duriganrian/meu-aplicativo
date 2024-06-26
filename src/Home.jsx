import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; // Importação do arquivo CSS

const Home = () => {
  const navigate = useNavigate();

  const navigateToContato = () => {
    navigate('/contato', { state: { objeto: "Rian" }, replace: true});
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <div className="home-container">
        <h1 className="home-title">Página Inicial</h1>
        <button className="home-button" onClick={navigateToContato}>Ir para Contato</button>
        <Link to="/contato" className="home-link">Ir para Contato (Link)</Link>
      </div>
    </div>
  );
};

export default Home;
