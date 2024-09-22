import React, { useState, useEffect } from 'react';
import GetProduct from '../services/GetProduct';
import '../styles/ProductDisplay.css'; // Asegúrate de tener estilos adecuados

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await GetProduct();
                setProducts(data);
            } catch (error) {
                setError('Error al cargar los productos');
                console.error('Error al cargar los productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-center">Cargando productos...</p>;
    if (error) return <p className="text-center">{error}</p>;

    return (
        <div className="product-display">
            <h2 className="text-center">Productos Disponibles</h2>
            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <strong>Tipo:</strong> {product.type} <br />
                        <strong>Versión:</strong> {product.version} <br />
                        <strong>Idioma:</strong> {product.language} <br />
                        <strong>Precio:</strong> {product.price} <br />
                        {product.image && <img src={product.image} alt={product.type} style={{ width: '130px' }} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDisplay;
