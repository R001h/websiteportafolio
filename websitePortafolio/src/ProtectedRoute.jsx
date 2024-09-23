import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({Children}) =>{
    const estaAutenticado = localStorage.getItem('Autenticado') === 'true' ;
    if (!estaAutenticado){
        return <Navigate to="/" />;
    }

  return Children;
};

export default ProtectedRoute;