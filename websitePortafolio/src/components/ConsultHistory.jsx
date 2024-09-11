import React, { useState, useEffect } from 'react';
import '../styles/ConsultHistory.css';
import GetConsult from '../services/GetTask';
import PutConsult from '../services/PutTask';
import DeleteTask from '../services/DeleteTask';


function ConsultHistory() {
    const [consults, setConsults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [task, setTask] = useState('');
    const [tareaDetails, setTareaDetails] = useState('');
    const [success, setSuccess] = useState(null);

    // Fetch consultations on component mount
    useEffect(() => {
        const fetchConsults = async () => {
            setLoading(true);
            setError(null);
            try {
                const consultData = await GetConsult();
                setConsults(consultData);
            } catch (error) {
                console.error('Error fetching consult data:', error);
                setError('Error fetching consult data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchConsults();
    }, []);

    const handleEdit = (taskId) => {
        const consult = consults.find(c => c.id === taskId);
        setTask(consult.task);
        setTareaDetails(consult.tareaDetails);
        setEditingTaskId(taskId);
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            await PutConsult(editingTaskId, { task, tareaDetails });
            setSuccess('Task updated successfully.');
            const updatedConsults = consults.map(consult => 
                consult.id === editingTaskId ? { ...consult, task, tareaDetails } : consult
            );
            setConsults(updatedConsults);
            setEditingTaskId(null);
        } catch (error) {
            console.error('Error updating task:', error);
            setError('Error updating task. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (taskId) => {
        const confirmed = window.confirm('Are you sure you want to delete this task?');
        if (!confirmed) return;

        setLoading(true);
        setError(null);

        try {
            await DeleteTask(taskId);
            setConsults(consults.filter(consult => consult.id !== taskId));
            setSuccess('Task deleted successfully.');
        } catch (error) {
            console.error('Error deleting task:', error);
            setError('Error deleting task. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='ConsultHistory_Box'>
            <h2>Consulta de Tareas</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message" role="alert">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <div>
                {consults.length === 0 ? (
                    <p>No tasks found.</p>
                ) : (
                    <ul>
                        {consults.map((consult) => (
                            <li key={consult.id}>
                                <strong>Tarea:</strong> {consult.task}
                                <strong>Detalle de Tarea:</strong> {consult.tareaDetails}
                                <button className='btnedit' onClick={() => handleEdit(consult.id)}>Edit</button>
                            
                                <button className='btndel' onClick={() => handleDelete(consult.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {editingTaskId && (
                <div className='EditTask'>
                    <h2>Edit Task</h2>
                    <form onSubmit={handleSubmitEdit} className="Consult_Box">
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
                        <button type='button' onClick={() => setEditingTaskId(null)}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ConsultHistory;
