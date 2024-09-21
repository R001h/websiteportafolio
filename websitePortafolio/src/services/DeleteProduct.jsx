const BASE_URL = 'http://localhost:3001/product';

async function DeleteProduct(productId) {
    try {
        const response = await fetch(`${BASE_URL}/${productId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Error al eliminar el producto');
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
    }
}

export default DeleteProduct;
