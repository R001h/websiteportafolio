import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Whitebox from '../components/Whitebox';
import ConsultForm from '../components/ConsultForm';
import ConsultHistory from '../components/ConsultHistory';
import ToolRegForm from '../components/ToolRegForm';
import '../styles/AdminUtilities.css';

function AdminUtilities() {
  return (
    <div>
      AdminUtilities
      <Whitebox />
      <Header />
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
