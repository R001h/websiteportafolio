import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <img src={product.image} alt={product.type} style={{ width: '100px', height: '100px' }} />
                    <h3>{product.type}</h3>
                    <p>Precio: {product.precio}</p>
                    <p>Sistemas Operativos: {product.operating_systems_supported}</p>
                    <button onClick={() => onEdit(product)}>Editar</button>
                    <button onClick={() => onDelete(product.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
