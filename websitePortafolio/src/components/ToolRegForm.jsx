import React, { useState, useEffect } from 'react';
import '../styles/RegisterForm.css';
import { GetUsers, PostUser } from '../services/UserServices';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; // Importar estilos de iziToast

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
  const [users, setUsers] = useState([]);

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
      iziToast.warning({
        title: 'Advertencia',
        message: 'Este email ya está registrado. Por favor, utiliza otro.',
        position: 'topRight',
      });
      return;
    }

    try {
      // Crear un nuevo usuario con rol 'user' por defecto
      const newUser = await PostUser(email, psw, 'user'); 
      console.log('Nuevo usuario registrado:', newUser);
      iziToast.success({
        title: 'Éxito',
        message: 'Registro exitoso.',
        position: 'topRight',
      });

      // Limpiar el formulario
      setEmail('');
      setPsw('');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      iziToast.error({
        title: 'Error',
        message: 'Error al registrar el usuario. Inténtalo nuevamente.',
        position: 'topRight',
      });
    }
  };

  return (
    <div className='LoginBox'>
      <h2>Crear Usuarios nuevos</h2>
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
        <button type='submit' id="btnSignUp" className="btnSignUp">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterForm;
