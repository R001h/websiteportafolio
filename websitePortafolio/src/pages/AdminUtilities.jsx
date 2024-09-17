import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Whitebox from '../components/Whitebox'
import ConsultForm from '../components/ConsultForm';
import ConsultHistory from '../components/ConsultHistory';

function AdminUtilities() {
  return (
    <div>AdminUtilities
        < Whitebox  />
        <Header />
        <main>
         <ConsultForm />
         <ConsultHistory />
        </main>
        <Footer />



    </div>
  )
}

export default AdminUtilities;