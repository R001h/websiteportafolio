import React, { useState, useEffect } from 'react';
import GetProduct from '../services/GetProduct';
import '../styles/ProductDisplay.css'; // Asegúrate de tener estilos adecuados
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ProductDisplay = () => {
    const [products, setProducts] = useState([]); // Estado para productos
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

    // Fetch de productos al montar el componente
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await GetProduct();
                setProducts(data);
            } catch (error) {
                setError('Error al cargar los productos');
                iziToast.error({
                    title: 'Error',
                    message: 'Error al cargar los productos.',
                    position: 'topRight',
                });
                console.error('Error al cargar los productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Función para manejar el cambio en el input de búsqueda
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Actualiza el término de búsqueda
    };

    // Filtrar los productos en función del término de búsqueda
    const filteredProducts = products.filter(product =>
        product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.language.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        iziToast.info({
            title: 'Cargando',
            message: 'Cargando productos...',
            position: 'topLeft',
        });
        return <p className="text-center">Cargando productos...</p>;
    }
    if (error) return <p className="text-center">{error}</p>;

    return (
        <div className="product-display">
            <h2 className="text-center">Productos Disponibles</h2>
            
            {/* Input de búsqueda */}
            <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
            />

            {/* Lista de productos filtrados */}
            <ul className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <li key={product.id} className="product-item">
                            <strong>Tipo:</strong> {product.type} <br />
                            <strong>Versión:</strong> {product.version} <br />
                            <strong>Idioma:</strong> {product.language} <br />
                            <strong>Precio:</strong> {product.price} <br />
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.type}
                                    style={{ width: '130px' }}
                                />
                            )}
                        </li>
                    ))
                ) : (
                    <p className="text-center">No se encontraron productos.</p>
                )}
            </ul>
        </div>
    );
};

export default ProductDisplay;
