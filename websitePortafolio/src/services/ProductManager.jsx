const BASE_URL = 'http://localhost:3001/product';

/**
 * Fetch all products from the API
 * @returns {Promise<Object[]>} - List of products
 */
async function getProduct() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error;
    }
}

/**
 * Create a new product
 * @param {Object} product - Product data
 * @returns {Promise<Object>} - Created product
 */
async function postProduct(product) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error('Error al registrar el producto');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al registrar el producto:', error);
        throw error;
    }
}

/**
 * Update an existing product
 * @param {number} productId - ID of the product to update
 * @param {Object} updatedData - Updated product data
 * @returns {Promise<Object>} - Updated product
 */
async function putProduct(productId, updatedData) {
    try {
        const response = await fetch(`${BASE_URL}/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
            const errorMessage = `Error updating product: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

/**
 * Delete a product
 * @param {number} productId - ID of the product to delete
 * @returns {Promise<void>} - Nothing
 */
async function deleteProduct(productId) {
    try {
        const response = await fetch(`${BASE_URL}/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error deleting product');
        }
        // Optionally handle response if needed
        return;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

export { getProduct, postProduct, putProduct, deleteProduct };
