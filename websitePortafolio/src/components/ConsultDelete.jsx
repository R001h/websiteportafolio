import React, { useState } from 'react';
import '../styles/ConsultForm.css';
import DeleteConsult from '../services/DeleteConsult'; 

function DeleteTask({ taskId, onDelete }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        setLoading(true);
        setError(null);

        try {
            await DeleteConsult(taskId);
            onDelete(); // Notify parent or refresh the list
        } catch (error) {
            console.error('Error deleting task:', error);
            setError('Error deleting task. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='Delete_Task'>
            <button 
                onClick={handleDelete} 
                disabled={loading}
            >
                {loading ? 'Deleting...' : 'Delete Task'}
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default DeleteTask;
