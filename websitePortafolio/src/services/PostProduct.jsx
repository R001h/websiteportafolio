const BASE_URL = 'http://localhost:3001/product';

async function PostProduct(product) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
        if (!response.ok) throw new Error('Error al registrar el producto');
        return await response.json();
    } catch (error) {
        console.error('Error al registrar el producto:', error);
        throw error;
    }
}

export default PostProduct;
