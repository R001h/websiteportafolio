import React, { useState } from 'react';
import { PostFile } from './fileService';

const FileUpload = () => {
    const [fileToUpload, setFileToUpload] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setFileToUpload(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!fileToUpload) return;

        setLoading(true);
        try {
            await PostFile(fileToUpload);
            alert('Archivo subido exitosamente!');
            setFileToUpload(null);
        } catch (error) {
            console.error('Error al subir el archivo:', error);
            alert('Error al subir el archivo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Subir Archivo</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? 'Subiendo...' : 'Subir Archivo'}
            </button>
        </div>
    );
};

export default FileUpload;
