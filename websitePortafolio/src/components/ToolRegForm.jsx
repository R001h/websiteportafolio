import React, { useState, useEffect } from 'react';
import '../styles/RegisterForm.css';
import { GetUsers, PostUser } from '../services/UserServices'; // Capitalized imports
import { useNavigate } from 'react-router-dom';

function ToolRegForm(props) {
  const [email, setEmail] = useState('');
  const [cedula, setCedula] = useState('');
  const [username, setUsername] = useState('');
  const [psw, setPsw] = useState('');
  const [users, setUsers] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await GetUsers(); // Capitalized function
        setUsers(usersData);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userWithEmail = users.find(user => user.email === email);
    if (userWithEmail) {
      alert('Este email ya está registrado. Por favor, utiliza otro.');
      return;
    }

    try {
      const newUser = await PostUser(username, email, psw, cedula); // Capitalized function
      console.log('Nuevo usuario registrado:', newUser);
      alert('Registro exitoso.');
      
      props.onformSwitch('Login');
      navigate('/');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario. Inténtalo nuevamente.');
    }
  };

  return (
    <>
      <div className='LoginBox'>
        <form onSubmit={handleSubmit} className="box_login">
          <br />
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            placeholder="E-mail" 
            className='email' 
            name='email' 
            id="email" 
            required 
            maxLength="45" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <br />
          <label htmlFor="username">User Name:</label>
          <input 
            type="text" 
            placeholder="User Name" 
            className='username' 
            name='username' 
            id="username" 
            required 
            maxLength="45" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <br />
          <label htmlFor="cedula">Cedula:</label>
          <input 
            type="number" 
            placeholder="Cedula" 
            className='cedula' 
            name='cedula' 
            id="cedula" 
            required 
            min="1" 
            max="999999999" 
            value={cedula} 
            onChange={(e) => setCedula(e.target.value)}  
          />
          <br />
          <label htmlFor="psw">Password:</label>
          <input 
            type="password" 
            placeholder="Contraseña" 
            className='psw' 
            name='psw' 
            id="psw" 
            required 
            maxLength="45" 
            value={psw} 
            onChange={(e) => setPsw(e.target.value)}  
          />
          <br />
          <button type='submit' id="btnSignUp" className="btnSignUp">Register</button>
        </form>
      </div>
    </>
  );
}

export default ToolRegForm;
