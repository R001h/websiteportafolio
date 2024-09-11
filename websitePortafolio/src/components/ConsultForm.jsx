import React, { useState, useEffect } from "react";
import '../styles/ConsultForm.css';
import GetConsult from '../services/GetTask'; 
import PostConsult from '../services/PostTask'; 

function ConsultForm(props) { 
    const [task, setTask] = useState (''); 
    const [tareaDetails, setTareaDetails] = useState(''); 
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        const fetchConsult = async () => {
            try {
                const consultData = await GetConsult();
                console.log('Consult data fetched:', consultData);
                // Use consultData if needed
            } catch (error) {
                console.error('Error fetching consult data:', error);
            }
        };

        fetchConsult();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true on form submission


        try {
            const newConsult = await PostConsult({ 
                task, 
                tareaDetails,
            });
            console.log('Task registered:', newConsult);
            alert('Registro exitoso.');
            setTask(''); // Clear the form fields
            setTareaDetails('');
        
        } catch (error) {
            console.error('Error registering task:', error);
            alert('Error ingresando tarea. Inténtalo nuevamente.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className='Consult_Box'>
            <form onSubmit={handleSubmit} className="Consult_Box">
                <br />
                <label htmlFor="task">Nombre Tarea:</label>
                <input 
                    type="text" 
                    placeholder="Tarea" 
                    className='task' 
                    name='task' 
                    id="task" 
                    required 
                    maxLength="45"
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                    aria-label="Nombre de la tarea" 
                />
                <br />
                <br />
                <label htmlFor="tareaDetails">Descripcion de Tarea:</label>
                <input 
                    type="text" 
                    placeholder="Detalles de Tarea" 
                    className='tareaDetails' 
                    name='tareaDetails' 
                    id="tareaDetails" 
                    required 
                    minLength="1"
                    maxLength="1000"
                    value={tareaDetails} 
                    onChange={(e) => setTareaDetails(e.target.value)}
                    aria-label="Descripción de la tarea" 
                />
                <br />
                <br />
                <button 
                    type='submit' 
                    id="btnSavetask" 
                    className="btnSavetask"
                    disabled={loading} // Disable button when loading
                >
                    {loading ? 'Guardando...' : 'Guardar tarea'} 
                </button>
            </form>
        </div>
    );
}

export default ConsultForm;
