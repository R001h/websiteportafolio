import React from 'react';
import '../styles/Register.css'
import Footer from '../components/Footer'
import RegisterForm from '../components/RegisterForm'



function Register() {

  return (
    <>
      <div className='LoginBox' >
      <RegisterForm />
      <Footer />
      </div>
    </>
  )
}


export default Register;
