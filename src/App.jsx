import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; // Importe useNavigate
import Contato from './Contato';

const Home = () => {
  const navigate = useNavigate(); // Renomeie handleNavigate para navigate

  const navigateToContato = () => {
    navigate('/contato', { state: { objeto: "Rian Durigan" }, replace: true});
  };

  return (
    <div>
      <h1>Página Inicial</h1>
      <button onClick={navigateToContato}>Ir para Contato</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
