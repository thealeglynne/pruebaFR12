import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validUsers from './validUsers.json'; 
import "../css/loginForm.css"


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (validUsers[username] === password) {
      
      navigate('/home');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-form">
      <h2>INICIAR SESION</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">USUARIO:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='clave' htmlFor="password">CLAVE</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btnn' type="submit">INICIAR</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default LoginForm;
