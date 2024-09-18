import React, { useEffect, useState } from 'react';
import { getProduct, postProduct, putProduct, deleteProduct } from '../services/ProductService';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await getProduct();
            setProducts(productList);
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async (product) => {
        const newProduct = await postProduct(product);
        setProducts([...products, newProduct]);
    };

    const handleUpdateProduct = async (product) => {
        const updatedProduct = await putProduct(editingProduct.id, product);
        setProducts(products.map(p => (p.id === editingProduct.id ? updatedProduct : p)));
        setEditingProduct(null);
    };

    const handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <h1>Gestión de Productos</h1>
            <ProductForm 
                onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} 
                initialData={editingProduct} 
            />
            <ProductList 
                products={products} 
                onEdit={setEditingProduct} 
                onDelete={handleDeleteProduct} 
            />
        </div>
    );
};

export default ProductManager;
