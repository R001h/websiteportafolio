import React from 'react'; // Importa React

// Componente funcional TaskForm
const TaskForm = ({ task, tareaDetails, onChange, onSubmit, onCancel, loading }) => (
    <form onSubmit={onSubmit} className="Consult_Box"> {/* Formulario que maneja el envío usando onSubmit */}
        <label htmlFor="task">Nombre Tarea:</label> {/* Etiqueta para el campo de nombre de tarea */}
        <input 
            type="text" // Tipo de entrada: texto
            name="task" // Nombre del campo para manejar en el cambio
            placeholder="Tarea" // Texto de marcador de posición
            className='task' // Clase CSS para el estilo
            id="task" // ID para asociar con la etiqueta
            required // Campo obligatorio
            maxLength="45" // Longitud máxima permitida
            value={task} // Valor del campo controlado por el estado
            onChange={onChange} // Función para manejar los cambios en el campo
            aria-label="Nombre de la tarea" // Etiqueta accesible para lectores de pantalla
        />
        <br />
        <label htmlFor="tareaDetails">Descripcion de Tarea:</label> {/* Etiqueta para el campo de detalles de tarea */}
        <input 
            type="text" // Tipo de entrada: texto
            name="tareaDetails" // Nombre del campo para manejar en el cambio
            placeholder="Detalles de Tarea" // Texto de marcador de posición
            className='tareaDetails' // Clase CSS para el estilo
            id="tareaDetails" // ID para asociar con la etiqueta
            required // Campo obligatorio
            minLength="1" // Longitud mínima permitida
            maxLength="1000" // Longitud máxima permitida
            value={tareaDetails} // Valor del campo controlado por el estado
            onChange={onChange} // Función para manejar los cambios en el campo
            aria-label="Descripción de la tarea" // Etiqueta accesible para lectores de pantalla
        />
        <br />
        <button 
            type='submit' // Tipo de botón: enviar
            id="btnSavetask" // ID del botón
            className="btnSavetask" // Clase CSS para el estilo
            disabled={loading} // Desactiva el botón mientras loading es verdadero
        >
            {loading ? 'Guardando...' : 'Guardar tarea'} {/* Muestra texto de acuerdo al estado de loading */}
        </button>
        {onCancel && <button type='button' onClick={onCancel}>Cancel</button>} {/* Botón de cancelar si se proporciona la función onCancel */}
    </form>
);

export default TaskForm; // Exporta el componente TaskForm
