import React from 'react';
import FileDownloadButton from './FileDownloadButton';
import FileUpload from './FileUpload';

const ExampleSection = () => {
    return (
        <div>
            <h2>Gestión de Archivos</h2>
            <FileUpload />
            <FileDownloadButton fileId="ID_ARCHIVO_1" buttonText="Descargar Archivo 1" />
            <FileDownloadButton fileId="ID_ARCHIVO_2" buttonText="Descargar Archivo 2" />
        </div>
    );
};

export default ExampleSection;
