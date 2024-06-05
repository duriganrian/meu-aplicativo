import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Remova o useNavigate
import Contato from './Contato';

const Home = () => {
  const navigateToContato = () => {
    window.location.href = '/contato'; // Use window.location.href para navegar para '/contato'
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
