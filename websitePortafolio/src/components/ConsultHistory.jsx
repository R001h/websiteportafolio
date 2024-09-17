import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect desde 'react'
import '../styles/ConsultHistory.css'; // Importa el archivo de estilos CSS para el componente
import { getConsults, putConsult, deleteConsult } from '../services/TaskService'; // Importa funciones del servicio TaskService
import TaskForm from '../components/TaskForm'; // Importa el componente TaskForm

function ConsultHistory() {
    // Definición de estados usando useState
    const [consults, setConsults] = useState([]); // Estado para almacenar la lista de consultas (tareas)
    const [loading, setLoading] = useState(false); // Estado para gestionar el estado de carga (loading)
    const [error, setError] = useState(null); // Estado para gestionar mensajes de error
    const [success, setSuccess] = useState(null); // Estado para gestionar mensajes de éxito
    const [editingTaskId, setEditingTaskId] = useState(null); // Estado para almacenar la ID de la tarea en edición
    const [formData, setFormData] = useState({ task: '', tareaDetails: '' }); // Estado para almacenar los datos del formulario

    // useEffect para cargar las consultas cuando el componente se monta
    useEffect(() => {
        const fetchConsults = async () => {
            setLoading(true); // Establece el estado de carga como verdadero
            setError(null); // Limpia cualquier mensaje de error previo
            try {
                const consultData = await getConsults(); // Obtiene la lista de consultas desde el servicio
                setConsults(consultData); // Actualiza el estado con los datos obtenidos
            } catch (error) {
                console.error('Error fetching consult data:', error); // Muestra el error en la consola
                setError('Error fetching consult data. Please try again later.'); // Muestra un mensaje de error
            } finally {
                setLoading(false); // Establece el estado de carga como falso
            }
        };

        fetchConsults(); // Llama a la función para cargar las consultas
    }, []); // El array vacío asegura que useEffect solo se ejecute al montar el componente

    // Función para manejar los cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target; // Desestructura el nombre y valor del campo de entrada
        setFormData(prevState => ({ ...prevState, [name]: value })); // Actualiza el estado del formulario
    };

    // Función para manejar el envío del formulario de edición
    const handleSubmitEdit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        setLoading(true); // Establece el estado de carga como verdadero
        setError(null); // Limpia cualquier mensaje de error previo
        setSuccess(null); // Limpia cualquier mensaje de éxito previo

        try {
            await putConsult(editingTaskId, formData); // Intenta actualizar la tarea con los datos del formulario
            setSuccess('Task updated successfully.'); // Muestra un mensaje de éxito
            // Actualiza la lista de consultas con los nuevos datos
            const updatedConsults = consults.map(consult => 
                consult.id === editingTaskId ? { ...consult, ...formData } : consult
            );
            setConsults(updatedConsults); // Actualiza el estado con las consultas actualizadas
            setEditingTaskId(null); // Limpia la ID de la tarea en edición
        } catch (error) {
            console.error('Error updating task:', error); // Muestra el error en la consola
            setError('Error updating task. Please try again later.'); // Muestra un mensaje de error
        } finally {
            setLoading(false); // Establece el estado de carga como falso
        }
    };

    // Función para manejar la eliminación de una tarea
    const handleDelete = async (taskId) => {
        const confirmed = window.confirm('Are you sure you want to delete this task?'); // Confirma la eliminación
        if (!confirmed) return; // Si el usuario cancela, no hace nada

        setLoading(true); // Establece el estado de carga como verdadero
        setError(null); // Limpia cualquier mensaje de error previo

        try {
            await deleteConsult(taskId); // Intenta eliminar la tarea
            setConsults(consults.filter(consult => consult.id !== taskId)); // Actualiza la lista de consultas excluyendo la tarea eliminada
            setSuccess('Task deleted successfully.'); // Muestra un mensaje de éxito
        } catch (error) {
            console.error('Error deleting task:', error); // Muestra el error en la consola
            setError('Error deleting task. Please try again later.'); // Muestra un mensaje de error
        } finally {
            setLoading(false); // Establece el estado de carga como falso
        }
    };

    return (
        <div className='ConsultHistory_Box'> {/* Contenedor principal del historial de consultas */}
            <h2 className='ConsultaTareas'>Consulta de Tareas</h2> {/* Título del componente */}
            {loading && <p>Loading...</p>} {/* Muestra mensaje de carga si está en progreso */}
            {error && <p className="error-message" role="alert">{error}</p>} {/* Muestra mensaje de error si hay uno */}
            {success && <p className="success-message">{success}</p>} {/* Muestra mensaje de éxito si hay uno */}

            <div>
                {consults.length === 0 ? ( // Verifica si hay consultas disponibles
                    <p>No tasks found.</p> // Mensaje si no se encontraron tareas
                ) : (
                    <ul className='ulTarea'> {/* Lista de tareas */}
                        {consults.map((consult) => (
                            <li key={consult.id} className='liTarea'> {/* Elemento de lista para cada tarea */}
                                <strong>Tarea:</strong> {consult.task}
                                <strong>Detalle de Tarea:</strong> {consult.tareaDetails}
                                <button className='btnedit' onClick={() => {
                                    // Establece los datos del formulario para la tarea seleccionada y activa la edición
                                    setFormData({ task: consult.task, tareaDetails: consult.tareaDetails });
                                    setEditingTaskId(consult.id);
                                }}>Edit</button>
                                <button className='btndel' onClick={() => handleDelete(consult.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {editingTaskId && (
                <div className='EditTask'> {/* Contenedor para el formulario de edición */}
                    <h2 className='editTask'>Edit Task</h2> {/* Título del formulario de edición */}
                    <TaskForm 
                        task={formData.task} // Pasa el estado del formulario al componente TaskForm
                        tareaDetails={formData.tareaDetails}
                        onChange={handleChange} // Pasa la función de manejo de cambios al componente TaskForm
                        onSubmit={handleSubmitEdit} // Pasa la función de manejo de envío al componente TaskForm
                        onCancel={() => setEditingTaskId(null)} // Pasa la función para cancelar la edición al componente TaskForm
                        loading={loading} // Pasa el estado de carga al componente TaskForm
                    />
                </div>
            )}
        </div>
    );
}

export default ConsultHistory; // Exporta el componente ConsultHistory
