const BASE_URL = 'http://localhost:3001/product';

export const getConsults = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
    return await response.json();
};

export const postConsult = async (taskData) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) throw new Error(`Failed to post: ${response.statusText}`);
    return await response.json();
};

export const putConsult = async (taskId, taskData) => {
    const response = await fetch(`${BASE_URL}/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) throw new Error(`Failed to update: ${response.statusText}`);
    return await response.json();
};

export const deleteConsult = async (taskId) => {
    const response = await fetch(`${BASE_URL}/${taskId}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error(`Failed to delete: ${response.statusText}`);
    return await response.json();
};
