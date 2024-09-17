import React, { useState, useEffect } from "react";
import '../styles/ConsultForm.css';
import GetProduct from '../services/GetProduct'; 
import PostProduct from '../services/PostProduct'; 

function ProductForm() {
    const [productoName, setProductoName] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marca, setMarca] = useState('');
    const [url, setUrl] = useState('');
    const [imgBase64, setImgBase64] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await GetProduct();
                console.log('Product data fetched:', productData);
                // Use productData if needed
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProduct();
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const newProduct = await PostProduct({ 
                producto_name: productoName,
                precio,
                descripcion,
                marca,
                url,
                img_name: imgBase64,
            });
            console.log('Product registered:', newProduct);
            alert('Registro exitoso.');
            setProductoName('');
            setPrecio('');
            setDescripcion('');
            setMarca('');
            setUrl('');
            setImgBase64('');
        } catch (error) {
            console.error('Error registering product:', error);
            alert('Error ingresando producto. Inténtalo nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='Consult_Box'>
            <form onSubmit={handleSubmit} className="Consult_Box">
                <br />
                <label htmlFor="productoName">Nombre del Producto:</label>
                <input 
                    type="text" 
                    placeholder="Nombre del producto" 
                    className='productoName' 
                    name='productoName' 
                    id="productoName" 
                    required 
                    maxLength="45"
                    value={productoName} 
                    onChange={(e) => setProductoName(e.target.value)}
                    aria-label="Nombre del producto" 
                />
                <br />
                <br />
                <label htmlFor="precio">Precio:</label>
                <input 
                    type="text" 
                    placeholder="Precio" 
                    className='precio' 
                    name='precio' 
                    id="precio" 
                    required 
                    value={precio} 
                    onChange={(e) => setPrecio(e.target.value)}
                    aria-label="Precio" 
                />
                <br />
                <br />
                <label htmlFor="descripcion">Descripción:</label>
                <input 
                    type="text" 
                    placeholder="Descripción" 
                    className='descripcion' 
                    name='descripcion' 
                    id="descripcion" 
                    required 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)}
                    aria-label="Descripción" 
                />
                <br />
                <br />
                <label htmlFor="marca">Marca:</label>
                <input 
                    type="text" 
                    placeholder="Marca" 
                    className='marca' 
                    name='marca' 
                    id="marca" 
                    required 
                    value={marca} 
                    onChange={(e) => setMarca(e.target.value)}
                    aria-label="Marca" 
                />
                <br />
                <br />
                <label htmlFor="url">URL:</label>
                <input 
                    type="text" 
                    placeholder="URL" 
                    className='url' 
                    name='url' 
                    id="url" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)}
                    aria-label="URL" 
                />
                <br />
                <br />
                <label htmlFor="imageUpload">Imagen:</label>
                <input 
                    type="file" 
                    id="imageUpload" 
                    onChange={handleImageUpload}
                    aria-label="Subir imagen" 
                />
                <br />
                <br />
                <button 
                    type='submit' 
                    id="btnSaveProduct" 
                    className="btnSaveProduct"
                    disabled={loading}
                >
                    {loading ? 'Guardando...' : 'Guardar producto'} 
                </button>
            </form>
        </div>
    );
}

export default  ProductForm ;
