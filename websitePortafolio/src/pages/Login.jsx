import React from 'react';
import '../styles/Login.css'
import LoginForm from '../components/LoginForm'
import FooterBase from '../components/FooterBase';



function Login() {

  return (
    <> 
      <div className='divbox' >
      <LoginForm />
      <FooterBase />
      </div>
    </>
  )
}



export default Login;
