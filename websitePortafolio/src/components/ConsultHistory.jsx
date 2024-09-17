import React, { useState, useEffect } from 'react';
import '../styles/ConsultHistory.css';
import { getConsults, putConsult, deleteConsult } from '../services/TaskService';
import TaskForm from '../components/TaskForm';

function ConsultHistory() {
    const [consults, setConsults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [formData, setFormData] = useState({ task: '', tareaDetails: '' });

    useEffect(() => {
        const fetchConsults = async () => {
            setLoading(true);
            setError(null);
            try {
                const consultData = await getConsults();
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            await putConsult(editingTaskId, formData);
            setSuccess('Task updated successfully.');
            const updatedConsults = consults.map(consult => 
                consult.id === editingTaskId ? { ...consult, ...formData } : consult
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
            await deleteConsult(taskId);
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
                                <button className='btnedit' onClick={() => {
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
                <div className='EditTask'>
                    <h2>Edit Task</h2>
                    <TaskForm 
                        task={formData.task}
                        tareaDetails={formData.tareaDetails}
                        onChange={handleChange}
                        onSubmit={handleSubmitEdit}
                        onCancel={() => setEditingTaskId(null)}
                        loading={loading}
                    />
                </div>
            )}
        </div>
    );
}

export default ConsultHistory;
