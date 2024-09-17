import React from 'react';
import '../styles/Register.css'
import RegisterForm from '../components/RegisterForm'
import FooterBase from '../components/FooterBase';



function Register() {

  return (
    <>
      <div className='LoginBox' >
      <RegisterForm />
      <FooterBase />
      </div>
    </>
  )
}


export default Register;
