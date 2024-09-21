const BASE_URL = 'http://localhost:3001/files';

// Obtener la lista de archivos
async function GetFiles() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Error al obtener los archivos');
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los archivos:', error);
        throw error;
    }
}

// Descargar un archivo por ID
async function DownloadFile(fileId) {
    try {
        const response = await fetch(`${BASE_URL}/${fileId}`, {
            method: 'GET',
        });
        if (!response.ok) throw new Error('Error al descargar el archivo');
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `archivo_${fileId}`; // Nombre del archivo
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error al descargar el archivo:', error);
        throw error;
    }
}

// Subir un nuevo archivo
async function PostFile(fileData) {
    const formData = new FormData();
    formData.append('file', fileData);

    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) throw new Error('Error al subir el archivo');
        return await response.json();
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        throw error;
    }
}

// Eliminar un archivo
async function DeleteFile(fileId) {
    try {
        const response = await fetch(`${BASE_URL}/${fileId}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Error al eliminar el archivo');
        return await response.json();
    } catch (error) {
        console.error('Error al eliminar el archivo:', error);
        throw error;
    }
}

export { GetFiles, DownloadFile, PostFile, DeleteFile };
