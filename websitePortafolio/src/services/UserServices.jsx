const BASE_URL = 'http://localhost:3001/users';

/**
 * Fetch all users from the API
 * @returns {Promise<Object[]>} - List of users
 */
export async function GetUsers() {
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

        const users = await response.json();
        
        // Asegurarse de que cada usuario tenga un campo 'role'
        return users.map(user => ({
            ...user,
            role: user.role || 'user', // Default role if not provided
        }));
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

/**
 * Create a new user
 * @param {string} email - Email of the new user
 * @param {string} psw - Password of the new user
 * @param {string} role - Role of the new user (default: 'user')
 * @returns {Promise<Object>} - Created user
 */
export async function PostUser(email, psw, role = 'user') {
    try {
        const userData = { email, psw, role }; // Añadimos el campo 'role'

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
export async function PutUser(userId, updatedData) {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error(`Error updating user: ${response.statusText}`);
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
export async function DeleteUser(userId) {
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
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
