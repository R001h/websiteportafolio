import React, { useState, useEffect } from 'react';
import '../styles/ConsultForm.css';
import PutConsult from '../services/PutConsult'; 

function EditTask({ taskId, onClose }) {
    const [task, setTask] = useState('');
    const [tareaDetails, setTareaDetails] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        // Fetch the current details of the task
        const fetchTaskDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/task/${taskId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch task details');
                }
                const data = await response.json();
                setTask(data.task);
                setTareaDetails(data.tareaDetails);
            } catch (error) {
                console.error('Error fetching task details:', error);
                setError('Error fetching task details. Please try again later.');
            }
        };

        fetchTaskDetails();
    }, [taskId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            await PutConsult(taskId, { task, tareaDetails });
            setSuccess('Task updated successfully.');
            onClose(); // Close the form or redirect
        } catch (error) {
            console.error('Error updating task:', error);
            setError('Error updating task. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='Consult_Box'>
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit} className="Consult_Box">
                <label htmlFor="task">Task Name:</label>
                <input 
                    type="text" 
                    placeholder="Task Name" 
                    className='task' 
                    id="task" 
                    required 
                    maxLength="45"
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                />
                <br />
                <label htmlFor="tareaDetails">Task Details:</label>
                <input 
                    type="text" 
                    placeholder="Task Details" 
                    className='tareaDetails' 
                    id="tareaDetails" 
                    required 
                    minLength="1"
                    maxLength="1000"
                    value={tareaDetails} 
                    onChange={(e) => setTareaDetails(e.target.value)}
                />
                <br />
                <button 
                    type='submit' 
                    id="btnSaveTask" 
                    className="btnSaveTask"
                    disabled={loading}
                >
                    {loading ? 'Saving...' : 'Save Task'} 
                </button>
                {success && <p className="success-message">{success}</p>}
                {error && <p className="error-message">{error}</p>}
                <button type='button' onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default EditTask;
