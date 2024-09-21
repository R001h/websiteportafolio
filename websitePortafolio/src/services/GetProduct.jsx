const BASE_URL = 'http://localhost:3001/product';

async function GetProduct() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Error al obtener los productos');
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error;
    }
}

export default GetProduct;
