import React from 'react';

async function GetTask() {
    try {
        const response = await fetch('http://localhost:3001/task', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching detalles consultas');
        }

        const detalles = await response.json();
        return detalles;
    } catch (error) {
        console.error('Error fetching detalles consultas:', error);
        throw error;
    }
}

export default GetTask;
