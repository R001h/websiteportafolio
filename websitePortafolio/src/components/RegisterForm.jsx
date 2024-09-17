import React, { useState, useEffect } from 'react';
import '../styles/RegisterForm.css';
import { getUsers, postUser } from '../services/UserServices'; // Ajusta la importación según tu estructura
import { useNavigate } from 'react-router-dom';

function RegisterForm(props) {
    const [email, setEmail] = useState('');
    const [cedula, setCedula] = useState('');
    const [username, setUsername] = useState('');
    const [psw, setPsw] = useState('');
    const [users, setUsers] = useState([]);
    
    const navigate = useNavigate(); // Use relocation button

    // Fetch users when component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the email is already registered
        const userWithEmail = users.find(user => user.email === email);
        if (userWithEmail) {
            alert('Este email ya está registrado. Por favor, utiliza otro.');
            return;
        }

        try {
            // Create new user
            const newUser = await postUser(username, email, psw, cedula);
            console.log('Nuevo usuario registrado:', newUser);
            alert('Registro exitoso.');

            // Switch to Login form and navigate
            props.onformSwitch('Login');
            navigate('/');
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            alert('Error al registrar el usuario. Inténtalo nuevamente.');
        }
    };

    return (
        <div className='LoginBox'>
            <form onSubmit={handleSubmit} className="box_login">
                <br />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    className='email' 
                    name='email' 
                    id="email" 
                    required 
                    maxLength="45" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                <label htmlFor="username">User Name:</label>
                <input 
                    type="text" 
                    placeholder="User Name" 
                    className='username' 
                    name='username' 
                    id="username" 
                    required 
                    maxLength="45" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <br />
                <label htmlFor="cedula">Cedula:</label>
                <input 
                    type="number" 
                    placeholder="Cedula" 
                    className='cedula' 
                    name='cedula' 
                    id="cedula" 
                    required 
                    min="1" 
                    max="999999999" 
                    value={cedula} 
                    onChange={(e) => setCedula(e.target.value)} 
                />
                <br />
                <label htmlFor="psw">Password:</label>
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    className='psw' 
                    name='psw' 
                    id="psw" 
                    required 
                    maxLength="45" 
                    value={psw} 
                    onChange={(e) => setPsw(e.target.value)} 
                />
                <br />
                <button type='submit' id="btnSignUp" className="btnSignUp">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
