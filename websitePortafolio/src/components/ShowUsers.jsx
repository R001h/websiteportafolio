import React, { useEffect, useState } from 'react';
import GetUsers from '../services/GetUsers';

function ShowUsers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await GetUsers();
                setData(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <ul>
                {data.map(user => (
                    <li key={user.username}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default ShowUsers;
