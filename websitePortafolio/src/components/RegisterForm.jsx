import React, { useState, useEffect } from 'react'; // Importa React y hooks necesarios
import '../styles/RegisterForm.css'; // Importa los estilos CSS específicos para el componente
import { getUsers, postUser } from '../services/UserServices'; // Importa funciones para manejar usuarios desde el servicio
import { useNavigate } from 'react-router-dom'; // Importa el hook para manejar navegación

function RegisterForm(props) {
    // Estados para almacenar los datos del formulario y la lista de usuarios
    const [email, setEmail] = useState('');
    const [cedula, setCedula] = useState('');
    const [username, setUsername] = useState('');
    const [psw, setPsw] = useState('');
    const [users, setUsers] = useState([]);
    
    const navigate = useNavigate(); // Hook para redirigir a otras rutas

    // Efecto para obtener los usuarios registrados cuando el componente se monta
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers(); // Llama al servicio para obtener usuarios
                setUsers(usersData); // Actualiza el estado con los datos de los usuarios
            } catch (error) {
                console.error('Error fetching users:', error); // Manejo de errores en la obtención de usuarios
            }
        };

        fetchUsers(); // Ejecuta la función para obtener usuarios
    }, []); // Dependencias vacías aseguran que se ejecute solo una vez al montar el componente

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Verifica si el email ya está registrado
        const userWithEmail = users.find(user => user.email === email);
        if (userWithEmail) {
            alert('Este email ya está registrado. Por favor, utiliza otro.'); // Alerta si el email ya existe
            return; // Detiene la ejecución de la función si el email ya está registrado
        }

        try {
            // Crea un nuevo usuario
            const newUser = await postUser(username, email, psw, cedula); // Llama al servicio para registrar el usuario
            console.log('Nuevo usuario registrado:', newUser); // Imprime el usuario registrado en consola
            alert('Registro exitoso.'); // Alerta de éxito

            // Cambia el formulario a Login y navega a la página principal
            props.onformSwitch('Login'); // Llama a la función para cambiar el formulario
            navigate('/'); // Redirige a la ruta principal
        } catch (error) {
            console.error('Error al registrar el usuario:', error); // Manejo de errores en el registro del usuario
            alert('Error al registrar el usuario. Inténtalo nuevamente.'); // Alerta de error
        }
    };

    return (
        <div className='LoginBox'> {/* Contenedor principal del formulario */}
            <form onSubmit={handleSubmit} className="box_login"> {/* Formulario para el registro de usuario */}
                <br />
                <label htmlFor="email">Email:</label> {/* Etiqueta para el campo de email */}
                <input 
                    type="email" // Tipo de entrada: email
                    placeholder="E-mail" // Texto de marcador de posición
                    className='email' // Clase CSS para el estilo
                    name='email' // Nombre del campo
                    id="email" // ID del campo
                    required // Campo obligatorio
                    maxLength="45" // Longitud máxima permitida
                    value={email} // Valor del campo controlado por el estado
                    onChange={(e) => setEmail(e.target.value)} // Maneja el cambio en el campo
                />
                <br />
                <label htmlFor="username">User Name:</label> {/* Etiqueta para el campo de nombre de usuario */}
                <input 
                    type="text" // Tipo de entrada: texto
                    placeholder="User Name" // Texto de marcador de posición
                    className='username' // Clase CSS para el estilo
                    name='username' // Nombre del campo
                    id="username" // ID del campo
                    required // Campo obligatorio
                    maxLength="45" // Longitud máxima permitida
                    value={username} // Valor del campo controlado por el estado
                    onChange={(e) => setUsername(e.target.value)} // Maneja el cambio en el campo
                />
                <br />
                <label htmlFor="cedula">Cedula:</label> {/* Etiqueta para el campo de cédula */}
                <input 
                    type="number" // Tipo de entrada: número
                    placeholder="Cedula" // Texto de marcador de posición
                    className='cedula' // Clase CSS para el estilo
                    name='cedula' // Nombre del campo
                    id="cedula" // ID del campo
                    required // Campo obligatorio
                    min="1" // Valor mínimo permitido
                    max="999999999" // Valor máximo permitido
                    value={cedula} // Valor del campo controlado por el estado
                    onChange={(e) => setCedula(e.target.value)} // Maneja el cambio en el campo
                />
                <br />
                <label htmlFor="psw">Password:</label> {/* Etiqueta para el campo de contraseña */}
                <input 
                    type="password" // Tipo de entrada: contraseña
                    placeholder="Contraseña" // Texto de marcador de posición
                    className='psw' // Clase CSS para el estilo
                    name='psw' // Nombre del campo
                    id="psw" // ID del campo
                    required // Campo obligatorio
                    maxLength="45" // Longitud máxima permitida
                    value={psw} // Valor del campo controlado por el estado
                    onChange={(e) => setPsw(e.target.value)} // Maneja el cambio en el campo
                />
                <br />
                <button type='submit' id="btnSignUp" className="btnSignUp">Register</button> {/* Botón para enviar el formulario */}
            </form>
        </div>
    );
}

export default RegisterForm; // Exporta el componente RegisterForm
