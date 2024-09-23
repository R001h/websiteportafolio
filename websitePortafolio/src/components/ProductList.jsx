import React from 'react';
import '../styles/PoductList.css'

const ProductList = ({ products = [], onEdit, onDelete }) => {
    return (
        <ul className="product-list">
            {products.map(product => (
                <li key={product.id}>
                    <strong>Tipo:</strong> {product.type} <br />
                    <strong>Version:</strong> {product.version} <br />
                    <strong>Idioma:</strong> {product.language} <br />
                    <strong>Precio:</strong> {product.price} <br />
                    <strong>Modelo:</strong> {product.model} <br />
                    {product.image && <img src={product.image} alt={product.type} style={{ width: '130px' }} />}
                    <button className='btnEdit'  onClick={() => onEdit(product)}>Editar</button>
                    <button className='btnDelet' onClick={() => onDelete(product.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
