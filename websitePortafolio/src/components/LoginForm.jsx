import React, { useState } from 'react';
import '../styles/LoginForm.css'; // Asegúrate de que este archivo esté en la ruta correcta
import GetUsers from '../services/GetUsers'; 
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [psw, setPsw] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Use relocation button

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Obtener la lista de usuarios
      const users = await GetUsers();
      // Buscar al usuario que coincida con el email y contraseña proporcionados
      const user = users.find(u => u.email === email && u.psw === psw);
      if (user) {
        console.log('Inicio de sesión exitoso:', user);
        alert('Inicio de sesión exitoso.');
        // Navegar a la ruta deseada
        navigate('/home'); // Cambia '/home' a la ruta que desees
      } else {
        alert('Email o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al autenticar el usuario:', error);
      alert('Hubo un error al intentar iniciar sesión.');
    }
  };

  return (
    <div className='LoginBox'>
      <form onSubmit={handleSubmit} className="box_login">
        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          placeholder="E-mail" 
          className='email' 
          id="email" 
          required 
          maxLength="45" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label htmlFor="username">User Name:</label>
        <input 
          type="text" 
          placeholder="User Name" 
          className='username' 
          id="username" 
          required 
          maxLength="45" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
   
        <label htmlFor="psw">Password:</label>
        <input 
          type="password" 
          placeholder="*************" 
          className='psw' 
          id="psw" 
          required 
          value={psw} 
          onChange={(e) => setPsw(e.target.value)} 
        />
        <br />
        <button type='submit' id="btnLogin" className="btnLogin">Log In</button>
      </form>
      
      <div className="containerButtons">
        <br />
        <button id="btnSignUp" className="btnSignUp">
          <a href="/register">If you don't have an account, create one.</a> 
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
