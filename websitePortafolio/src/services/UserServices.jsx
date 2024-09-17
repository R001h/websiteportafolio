// services/UserServices.js

// Base URL for the user API
const BASE_URL = 'http://localhost:3001/users';

/**
 * Fetch all users from the API
 * @returns {Promise<Object[]>} - List of users
 */
async function getUsers() {
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

/**
 * Create a new user
 * @param {string} username - Username of the new user
 * @param {string} email - Email of the new user
 * @param {string} psw - Password of the new user
 * @param {string} cedula - Identification number of the new user
 * @returns {Promise<Object>} - Created user
 */
async function postUser(username, email, psw, cedula) {
    try {
        const userData = { 
            username,
            email,
            psw,
            cedula
        };

        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Error posting user');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

/**
 * Update an existing user
 * @param {number} userId - ID of the user to update
 * @param {Object} updatedData - Updated user data
 * @returns {Promise<Object>} - Updated user
 */
async function putUser(userId, updatedData) {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            const errorMessage = `Error updating user: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

/**
 * Delete a user
 * @param {number} userId - ID of the user to delete
 * @returns {Promise<void>} - Nothing
 */
async function deleteUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error deleting user');
        }
        // Optionally handle response if needed
        return;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { getUsers, postUser, putUser, deleteUser };
