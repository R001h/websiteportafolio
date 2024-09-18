const BASE_URL = 'http://localhost:3001/product';

async function getProduct() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Error al obtener los productos');
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error;
    }
}

async function postProduct(product) {
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

async function putProduct(productId, updatedData) {
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

async function deleteProduct(productId) {
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

export { getProduct, postProduct, putProduct, deleteProduct };
