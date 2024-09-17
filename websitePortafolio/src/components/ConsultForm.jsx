import React, { useState } from "react";
import '../styles/ConsultForm.css';
import { postConsult } from '../services/TaskService';
import TaskForm from '../components/TaskForm';

function ConsultForm() { 
    const [task, setTask] = useState(''); 
    const [tareaDetails, setTareaDetails] = useState(''); 
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        try {
            await postConsult({ task, tareaDetails });
            alert('Registro exitoso.');
            setTask('');
            setTareaDetails('');
        } catch (error) {
            console.error('Error registering task:', error);
            alert('Error ingresando tarea. Inténtalo nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='Consult_Box'>
            <TaskForm 
                task={task}
                tareaDetails={tareaDetails}
                onChange={(e) => {
                    const { name, value } = e.target;
                    if (name === 'task') setTask(value);
                    if (name === 'tareaDetails') setTareaDetails(value);
                }}
                onSubmit={handleSubmit}
                loading={loading}
            />
        </div>
    );
}

export default ConsultForm;
