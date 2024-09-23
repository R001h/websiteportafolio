import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Whitebox from '../components/Whitebox';
import ConsultForm from '../components/ConsultForm';
import ConsultHistory from '../components/ConsultHistory';
import ToolRegForm from '../components/ToolRegForm';
import '../styles/AdminUtilities.css';
import { useNavigate } from 'react-router-dom';

function AdminUtilities() {
  const navigate = useNavigate();

  function cerrarSession (){
    localStorage.removeItem('Autenticado');
    navigate('/');

  };

  return (
    <div>
      AdminUtilities
      <Whitebox />
      <Header />
      <div><button onClick={cerrarSession} >Cerrar Sesion</button></div>
      <div className='taskbox-container'>
        <div className='taskbox'><ConsultForm /></div>
        <div className='taskbox'><ConsultHistory /></div>
      </div>
      <ToolRegForm />
      <br /><br />
      <Footer />
    </div>
  );
}

export default AdminUtilities;
