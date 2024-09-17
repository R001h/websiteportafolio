import React, { useState } from 'react'; // Importa React y useState desde 'react'
import '../styles/LoginForm.css'; // Importa el archivo de estilos CSS para el componente
import { getUsers } from '../services/UserServices'; // Importa la función getUsers desde UserServices.js
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación

function LoginForm() {
  // Definición de estados usando useState
  const [username, setUsername] = useState(''); // Estado para almacenar el nombre de usuario
  const [psw, setPsw] = useState(''); // Estado para almacenar la contraseña
  const [email, setEmail] = useState(''); // Estado para almacenar el email
  const navigate = useNavigate(); // Hook para manejar la navegación

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    try {
      // Obtiene la lista de usuarios desde el servicio
      const users = await getUsers();
      // Busca al usuario que coincida con el email y la contraseña proporcionados
      const user = users.find(u => u.email === email && u.psw === psw);
      if (user) {
        console.log('Inicio de sesión exitoso:', user); // Muestra el usuario en la consola (opcional)
        alert('Inicio de sesión exitoso.'); // Muestra un mensaje de éxito
        // Navega a la ruta deseada (cambia '/home' a la ruta que desees)
        navigate('/home'); 
      } else {
        alert('Email o contraseña incorrectos.'); // Muestra un mensaje de error si no se encuentra el usuario
      }
    } catch (error) {
      console.error('Error al autenticar el usuario:', error); // Muestra el error en la consola
      alert('Hubo un error al intentar iniciar sesión.'); // Muestra un mensaje de error en caso de excepción
    }
  };

  return (
    <div className='LoginBox'> {/* Contenedor principal del formulario de inicio de sesión */}
      <form onSubmit={handleSubmit} className="box_login"> {/* Formulario de inicio de sesión */}
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
        <button type='submit' id="btnLogin" className="btnLogin">Log In</button> {/* Botón para enviar el formulario */}
      </form>
      
      <div className="containerButtons"> {/* Contenedor para botones adicionales */}
        <br />
        <button id="btnSignUp" className="btnSignUp">
          <a href="/register">If you don't have an account, create one.</a> {/* Enlace para crear una cuenta */}
        </button>
      </div>
    </div>
  );
}

export default LoginForm; // Exporta el componente LoginForm
