import React from 'react';
import '../styles/Login.css'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';



function Login() {

  return (
    <> 
      <div className='divbox' >
      <Navbar />
      <br />
      
      <br />
      <LoginForm />
      <Footer />
      </div>
    </>
  )
}



export default Login;
