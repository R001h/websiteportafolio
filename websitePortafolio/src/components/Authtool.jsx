import React, { useState } from 'react';
import '../styles/LoginForm.css'; 
import { GetUsers } from '../services/UserServices'; 
import { useNavigate } from 'react-router-dom';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; // Importar estilos de iziToast

const Authtool = () => {
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Obtener la lista de usuarios
      const users = await GetUsers();
      // Buscar al usuario que coincida con el email y contraseña proporcionados
      const user = users.find(u => u.email === email && u.psw === psw);

      if (user) {
        console.log('Inicio de sesión exitoso:', user);
        iziToast.success({
          title: 'Éxito',
          message: 'Inicio de sesión exitoso.',
          position: 'topRight',
        });
        
        // Redirigir según el rol del usuario
        if (user.role === 'admin') {
          navigate('/AdminUtilities'); // Redirigir a utilidades de admin
        } else if (user.role === 'user') {
          navigate('/AdminShop'); // Redirigir a la tienda de usuarios
        }
      } else {
        setError('Credenciales inválidas');
        iziToast.warning({
          title: 'Advertencia',
          message: 'Email o contraseña incorrectos.',
          position: 'topRight',
        });
      }
    } catch (err) {
      console.error('Error al autenticar el usuario:', err);
      setError('Error al iniciar sesión');
      iziToast.error({
        title: 'Error',
        message: 'Hubo un error al intentar iniciar sesión.',
        position: 'topRight',
      });
    }
  };

  return (
    <div className='LoginBox'>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="box_login">
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default Authtool;
