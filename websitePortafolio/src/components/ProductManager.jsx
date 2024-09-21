import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import GetProduct from '../services/GetProduct';
import PostProduct from '../services/PostProduct';
import PutProduct from '../services/PutProduct';
import DeleteProduct from '../services/DeleteProduct';

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await GetProduct();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async (product) => {
        const newProduct = await PostProduct(product);
        setProducts([...products, newProduct]);
    };

    const handleEditProduct = async (updatedData) => {
        const updatedProduct = await PutProduct(updatedData.id, updatedData);
        setProducts(products.map(product => (product.id === updatedData.id ? updatedProduct : product)));
        setEditingProduct(null);
    };

    const handleDeleteProduct = async (id) => {
        await DeleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <br />
            <ProductForm
                onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
                initialData={editingProduct} 
            />
            <ProductList
                products={products}
                onEdit={setEditingProduct}
                onDelete={handleDeleteProduct}
            />

            <br />
        </div>
    );
    
};

export default ProductManager;
