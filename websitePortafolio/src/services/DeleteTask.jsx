import React from 'react';

async function deleteTask(id) {
    try {
        const response = await fetch(`http://localhost:3001/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error deleting consulta');
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting consulta:', error);
        throw error;
    }
}

export default deleteTask;
