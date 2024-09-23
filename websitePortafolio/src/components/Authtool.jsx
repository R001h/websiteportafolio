import React, { useState } from 'react';
import '../styles/LoginForm.css'; 
import { GetUsers } from '../services/UserServices'; 
import { useNavigate } from 'react-router-dom';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; 

const Authtool = () => {
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const users = await GetUsers();
      const user = users.find(u => u.email === email && u.psw === psw);
      

      if (user) {
        localStorage.setItem('Autenticado', 'true')
        iziToast.success({
          title: 'Éxito',
          message: 'Inicio de sesión exitoso.',
          position: 'topRight',
        });

        navigate(user.role === 'admin' ? '/AdminUtilities' : '/AdminShop');
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
    } finally {
      setLoading(false);
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
        <button type='submit' id="btnLogin" className="btnLogin" disabled={loading}>
          {loading ? 'Cargando...' : 'Log In'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Authtool;
