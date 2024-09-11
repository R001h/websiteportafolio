import React from 'react';

async function PutTask(taskId, updatedData) {
    try {
        const response = await fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            const errorMessage = `Error updating task: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
}

export default PutTask;
