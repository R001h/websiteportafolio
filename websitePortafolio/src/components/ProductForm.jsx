import React, { useState, useEffect } from 'react';
import GetProduct from '../services/GetProduct'; 
import '../styles/ProductForm.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ProductForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        id: '',
        type: '',
        version: '',
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
                setFormData(initialData || productData);
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

        // Simple validation example
        if (parseFloat(formData.price) <= 0) {
            iziToast.warning({
                title: 'Advertencia',
                message: 'El precio debe ser un número positivo.',
                position: 'topRight',
            });
            return;
        }

        // Call the onSubmit function and handle any success or error notifications
        onSubmit(formData)
            .then(() => {
                iziToast.success({
                    title: 'Éxito',
                    message: 'Producto guardado correctamente.',
                    position: 'topRight',
                });
            })
            .catch((submitError) => {
                iziToast.error({
                    title: 'Error',
                    message: 'No se pudo guardar el producto.',
                    position: 'topRight',
                });
                console.error('Error al guardar el producto:', submitError);
            });
    };

    if (loading) return <p className="text-center">Cargando...</p>;
    if (error) return <p className="text-center">{error}</p>;

    return (
        <form className="product-form" onSubmit={handleSubmit}> 
            <h2 className="text-centerInventario">Ingresar Productos al Inventario</h2>

            <input className="margin-bottomx" type="text" name="type" placeholder="Tipo" value={formData.type} onChange={handleChange} required />
            <input className="margin-bottomx" type="text" name="version" placeholder="Versión" value={formData.version} onChange={handleChange} required />
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
