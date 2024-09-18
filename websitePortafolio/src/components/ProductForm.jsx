import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialData }) => {
    const [product, setProduct] = useState(initialData || {});

    useEffect(() => {
        setProduct(initialData || {});
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProduct({ ...product, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(product);
        setProduct({}); // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="type"
                value={product.type || ''}
                onChange={handleChange}
                placeholder="Tipo"
                required
            />
            <input
                name="precio"
                value={product.precio || ''}
                onChange={handleChange}
                placeholder="Precio"
                required
            />
            <input
                name="operating_systems_supported"
                value={product.operating_systems_supported || ''}
                onChange={handleChange}
                placeholder="Sistemas Operativos Soportados"
                required
            />
            <input
                type="file"
                onChange={handleImageChange}
                placeholder="Cargar Imagen"
            />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default ProductForm;
