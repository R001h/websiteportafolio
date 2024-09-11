import React, { useState, useEffect } from 'react';
import '../styles/RegisterForm.css';
import GetUsers from '../services/GetUsers';
import PostUsers from '../services/PostUsers';
import { useNavigate } from 'react-router-dom';

function RegisterForm(props) {
  const [email, setEmail] = useState('');
  const [cedula, setCedula] = useState('');
  const [username, setUsername] = useState('');
  const [psw, setPsw] = useState('');
  const [users, setUsers] = useState([]);
  
  const navigate = useNavigate(); // Use relocation boton

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await GetUsers();
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
      const newUser = await PostUsers(username, email, psw, cedula);
      console.log('Nuevo usuario registrado:', newUser);
      alert('Registro exitoso.');
      
      
      props.onformSwitch('Login');
      navigate('/'); 
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert(' error usuario. Inténtalo nuevamente.');
    }
  };

  return (

    
    <>
    <div className='LoginBox'>
      <form onSubmit={handleSubmit} className="box_login" >
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" placeholder="E-mail" className='email' name='email' id="email" required maxlength="45" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <label htmlFor="username">User Name:</label>
        <input type="text" placeholder="User Name" className='username' name='username' id="username" required maxlength="45"value={username} onChange={(e)=> setUsername(e.target.value)} />
        <br />
        <label htmlFor="cedula">Cedula:</label>
        <input type="number" placeholder="Cedula" className='cedula' name='cedula' id="cedula" required min="1" max="999999999" value={cedula} onChange={(e)=> setCedula(e.target.value)}  /> 

        <label htmlFor="psw">Password:</label>
        <input type="password" placeholder="Contraseña" className='psw'name='psw' id="psw" required maxlength="45"value={psw} onChange={(e)=> setPsw(e.target.value)}  />
        <br />
        
        <button  onClick= {() => props.onformSwitch('Login')} type='submit' id="btnSignUp" className="btnSignUp">Register </button>
      
      </form>
    </div>
    
    </>
 
  )
}

export default RegisterForm;
