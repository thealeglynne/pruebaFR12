import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import LoginForm from './componentes/loginForm';
import Home from './componentes/home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes className='Init'>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
