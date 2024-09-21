import React from 'react';
import { DownloadFile } from './fileService';

const FileDownloadButton = ({ fileId, buttonText }) => {
    const handleDownload = async () => {
        try {
            await DownloadFile(fileId);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    return (
        <button onClick={handleDownload}>
            {buttonText || 'Descargar Archivo'}
        </button>
    );
};

export default FileDownloadButton;
