import React, { useState } from "react";
import '../styles/ConsultForm.css'; 
import { postConsult } from '../services/TaskService';
import TaskForm from '../components/TaskForm'; 
 
function ConsultForm() { 
    // Definición de estados usando useState
    const [task, setTask] = useState(''); // Estado para almacenar el valor de la tarea
    const [tareaDetails, setTareaDetails] = useState(''); // Estado para almacenar los detalles de la tarea
    const [loading, setLoading] = useState(false); // Estado para gestionar el estado de carga (loading)

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        setLoading(true); // Establece el estado de carga como verdadero
        try {
            // Intenta enviar los datos del formulario usando postConsult
            await postConsult({ task, tareaDetails });
            alert('Registro exitoso.'); // Muestra un mensaje de éxito
            setTask(''); // Limpia el campo de la tarea
            setTareaDetails(''); // Limpia el campo de detalles de la tarea
        } catch (error) {
            console.error('Error registering task:', error); // Muestra el error en la consola
            alert('Error ingresando tarea. Inténtalo nuevamente.'); // Muestra un mensaje de error
        } finally {
            setLoading(false); // Establece el estado de carga como falso
        }
    };

    return (
        <div className='Consult_Box'> {/* Contenedor principal del formulario */}
            <TaskForm 
                task={task} // Pasa el estado de la tarea al componente TaskForm
                tareaDetails={tareaDetails} // Pasa el estado de los detalles de la tarea al componente TaskForm
                onChange={(e) => {
                    const { name, value } = e.target; // Desestructura el nombre y valor del campo de entrada
                    if (name === 'task') setTask(value); // Actualiza el estado de la tarea
                    if (name === 'tareaDetails') setTareaDetails(value); // Actualiza el estado de los detalles de la tarea
                }}
                onSubmit={handleSubmit} // Pasa la función de manejo del envío al componente TaskForm
                loading={loading} // Pasa el estado de carga al componente TaskForm
            />
        </div>
    );
}

export default ConsultForm; // Exporta el componente ConsultForm
