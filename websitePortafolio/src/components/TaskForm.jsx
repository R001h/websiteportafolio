import React from 'react';
import '../styles/TaskForm.css'; // Asegúrate de que la ruta sea correcta

const TaskForm = ({ task, tareaDetails, onChange, onSubmit, onCancel, loading }) => (
    <form onSubmit={onSubmit} className="Consult_Box"> {/* Asegúrate de usar 'Consult_Box' si ese es tu estilo */}
        <label htmlFor="task">Nombre Tarea:</label>
        <input 
            type="text" 
            name="task"
            placeholder="Tarea" 
            className='task' 
            id="task" 
            required 
            maxLength="45"
            value={task} 
            onChange={onChange}
            aria-label="Nombre de la tarea" 
        />
        <br />
        <label htmlFor="tareaDetails">Descripción de Tarea:</label>
        <input 
            type="text" 
            name="tareaDetails"
            placeholder="Detalles de Tarea" 
            className='tareaDetails' 
            id="tareaDetails" 
            required 
            minLength="1"
            maxLength="1000"
            value={tareaDetails} 
            onChange={onChange}
            aria-label="Descripción de la tarea" 
        />
        <br />
        <button 
            type='submit' 
            id="btnSavetask" 
            className="btnSignUp" // Cambia esto para usar el estilo que prefieras
            disabled={loading}
        >
            {loading ? 'Guardando...' : 'Guardar tarea'} 
        </button>
        {onCancel && <button type='button' onClick={onCancel}>Cancelar</button>}
    </form>
);

export default TaskForm;
