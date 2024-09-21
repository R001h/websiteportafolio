const BASE_URL = 'http://localhost:3001/product';

async function PutProduct(productId, updatedData) {
    try {
        const response = await fetch(`${BASE_URL}/${productId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) throw new Error('Error al actualizar el producto');
        return await response.json();
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        throw error;
    }
}

export default PutProduct;
