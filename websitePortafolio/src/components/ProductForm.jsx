import React, { useState, useEffect } from 'react';
import GetProduct from '../services/GetProduct'; 
import '../styles/ProductForm.css'; // Importa el archivo de estilos

const ProductForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        id: '',
        type: '',
        operating_systems_supported: '',
        version: '',
        system_requirements: '',
        model: '',
        language: '',
        image: '',
        price: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await GetProduct();
                if (initialData) {
                    setFormData(initialData);
                } else {
                    setFormData(productData); // O adapta esto según la estructura de tu respuesta
                }
            } catch (error) {
                setError('Error al obtener el producto');
                console.error('Error al obtener el producto:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchProduct();
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prevState => ({ ...prevState, image: reader.result }));
        };
        if (file) reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (loading) return <p className="text-center">Cargando...</p>;
    if (error) return <p className="text-center">{error}</p>;

    return (
        <form className="product-form" onSubmit={handleSubmit}> 
            <h2 className="text-centerInventario">Ingresar Productos al Inventario</h2>

            <input className="margin-bottomx" type="text" name="type" placeholder="Tipo" value={formData.type} onChange={handleChange} required />
            <input className="margin-bottomx" type="text" name="operating_systems_supported" placeholder="Sistemas Operativos" value={formData.operating_systems_supported} onChange={handleChange} required />
            <input className="margin-bottomx" type="text" name="version" placeholder="Versión" value={formData.version} onChange={handleChange} required />
            <input className="margin-bottomx" type="text" name="system_requirements" placeholder="Requisitos del Sistema" value={formData.system_requirements} onChange={handleChange} />
            <input className="margin-bottomx" type="text" name="model" placeholder="Modelo" value={formData.model} onChange={handleChange} />
            <input className="margin-bottomx" type="text" name="language" placeholder="Idioma" value={formData.language} onChange={handleChange} required />
            <input className="margin-bottomx" type="file" accept="image/*" onChange={handleImageChange} />
            <input className="margin-bottomx" type="text" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} required />
            <button className="buttonSaveProduct" type="submit">Guardar Producto</button>
            <br />
        </form>
    );
};

export default ProductForm;
