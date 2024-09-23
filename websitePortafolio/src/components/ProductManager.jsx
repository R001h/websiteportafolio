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
        setProducts(prevProducts => [...prevProducts, newProduct]);
    };

    const handleEditProduct = async (updatedData) => {
        const updatedProduct = await PutProduct(updatedData.id, updatedData);
        setProducts(prevProducts => 
            prevProducts.map(product => {
                if (product.id === updatedData.id) {
                    return updatedProduct;
                }
                return product;
            })
        );
        setEditingProduct(null);
    };

    const handleDeleteProduct = async (id) => {
        await DeleteProduct(id);
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    };

    let currentFormHandler;
    if (editingProduct) {
        currentFormHandler = handleEditProduct;
    } else {
        currentFormHandler = handleAddProduct;
    }

    return (
        <div>
            <br />
            <ProductForm
                onSubmit={currentFormHandler}
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
