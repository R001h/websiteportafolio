import React from 'react'; // Importa la biblioteca React para construir el componente
import '../styles/TaskForm.css' // Importa la hoja de estilos específica para este formulario

// Componente funcional TaskForm que recibe varias props
const TaskForm = ({ task, tareaDetails, onChange, onSubmit, onCancel, loading }) => (
    // Formulario que se enviará al hacer submit
    <form onSubmit={onSubmit} className="Consult_Bpox"> 
        {/* Etiqueta para el campo de nombre de la tarea */}
        <label htmlFor="task">Nombre Tarea:</label>
        {/* Campo de entrada para el nombre de la tarea */}
        <input 
            type="text" 
            name="task" // Nombre del campo para identificarlo en onChange
            placeholder="Tarea" // Texto que aparece cuando el campo está vacío
            className='task' // Clase CSS para el estilo
            id="task" // Identificador único del campo
            required // Este campo es obligatorio
            maxLength="45" // Máxima longitud de caracteres permitida
            value={task} // Valor controlado del campo, vinculado al estado
            onChange={onChange} // Maneja el cambio de valor en el campo
            aria-label="Nombre de la tarea" // Proporciona una etiqueta accesible para el campo
        />
        <br />
        {/* Etiqueta para el campo de descripción de la tarea */}
        <label htmlFor="tareaDetails">Descripción de Tarea:</label>
        {/* Campo de entrada para la descripción de la tarea */}
        <input 
            type="text" 
            name="tareaDetails" // Nombre del campo
            placeholder="Detalles de Tarea" // Texto de ayuda
            className='tareaDetails' // Clase CSS
            id="tareaDetails" // Identificador único
            required // Campo obligatorio
            minLength="1" // Longitud mínima
            maxLength="1000" // Longitud máxima permitida
            value={tareaDetails} // Valor controlado
            onChange={onChange} // Maneja cambios
            aria-label="Descripción de la tarea" // Etiqueta accesible
        />
        <br />
        {/* Botón para enviar el formulario */}
        <button 
            type='submit' // Tipo de botón como submit
            id="btnSavetask" // Identificador del botón
            className="btnSignUp" // Clase CSS para el estilo
            disabled={loading} // Deshabilita el botón si loading es true
        >
            {/* Muestra 'Guardando...' si está cargando, de lo contrario 'Guardar tarea' */}
            {loading ? 'Guardando...' : 'Guardar tarea'} 
        </button>
        {/* Botón para cancelar, solo se muestra si onCancel está definido */}
        {onCancel && <button type='button' onClick={onCancel}>Cancelar</button>}
    </form>
);

export default TaskForm; // Exporta el componente para ser utilizado en otras partes de la aplicación
