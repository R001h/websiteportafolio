import React from 'react';
import '../styles/Login.css'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'



function Login() {

  return (
    <> 
      <div className='divbox' >
      <LoginForm />
      <Footer />
      </div>
    </>
  )
}



export default Login;
