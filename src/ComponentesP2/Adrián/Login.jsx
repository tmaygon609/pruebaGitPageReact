import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  //Crea un estado para los componentes
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Manejador de eventos
  const login = (e) => {
    //No recarga la pagina
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className='recuadro'>
      <h1>Inicio de sesión</h1>
    <form onSubmit={login} className="form">
      <label>
        Usuario:
        {/*Llama a las funciones y le asigna el valor*/}
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input'/>
      </label>
      <button type="submit" className='button'>Iniciar sesión</button>
    </form>
    </div>
  );
};

export default Login;