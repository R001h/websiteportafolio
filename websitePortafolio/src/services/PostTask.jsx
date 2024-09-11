import React from "react";

async function PostConsult(consultaData) {
    try {
        const response = await fetch('http://localhost:3001/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consultaData)
        });

        if (!response.ok) {
            // Provide detailed error information
            const errorMessage = `Error posting consulta: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }

        // Return the response JSON
        return await response.json();
    } catch (error) {
        console.error('Error posting consulta:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

export default PostConsult;
