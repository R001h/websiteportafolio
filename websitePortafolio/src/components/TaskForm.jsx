import React from 'react';

const TaskForm = ({ task, tareaDetails, onChange, onSubmit, onCancel, loading }) => (
    <form onSubmit={onSubmit} className="Consult_Box">
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
        <label htmlFor="tareaDetails">Descripcion de Tarea:</label>
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
            className="btnSavetask"
            disabled={loading}
        >
            {loading ? 'Guardando...' : 'Guardar tarea'} 
        </button>
        {onCancel && <button type='button' onClick={onCancel}>Cancel</button>}
    </form>
);

export default TaskForm;
