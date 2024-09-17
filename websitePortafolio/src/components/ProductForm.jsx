import React, { useState, useEffect } from "react"; // Importa React y hooks necesarios
import '../styles/ConsultForm.css'; // Importa los estilos CSS específicos para el componente
import GetProduct from '../services/GetProduct'; // Importa la función para obtener productos desde el servicio
import PostProduct from '../services/PostProduct'; // Importa la función para registrar productos desde el servicio

function ProductForm() {
    // Estados para manejar los datos del formulario y el estado de carga
    const [productoName, setProductoName] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marca, setMarca] = useState('');
    const [url, setUrl] = useState('');
    const [imgBase64, setImgBase64] = useState(''); // Base64 de la imagen subida
    const [loading, setLoading] = useState(false); // Estado de carga

    // Efecto para obtener datos del producto cuando el componente se monta
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await GetProduct(); // Llama al servicio para obtener datos del producto
                console.log('Product data fetched:', productData); // Imprime los datos del producto en consola
                // Utiliza productData si es necesario
            } catch (error) {
                console.error('Error fetching product data:', error); // Manejo de errores en la obtención de datos
            }
        };

        fetchProduct(); // Ejecuta la función para obtener datos del producto
    }, []); // Dependencias vacías aseguran que se ejecute solo una vez al montar el componente

    // Maneja la carga de la imagen y la convierte a base64
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgBase64(reader.result); // Actualiza el estado con el contenido de la imagen en base64
            };
            reader.readAsDataURL(file); // Lee el archivo como URL de datos
        }
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        setLoading(true); // Activa el estado de carga

        try {
            // Envía los datos del producto al servidor
            const newProduct = await PostProduct({ 
                producto_name: productoName,
                precio,
                descripcion,
                marca,
                url,
                img_name: imgBase64,
            });
            console.log('Product registered:', newProduct); // Imprime el producto registrado en consola
            alert('Registro exitoso.'); // Alerta de éxito

            // Limpia los campos del formulario
            setProductoName('');
            setPrecio('');
            setDescripcion('');
            setMarca('');
            setUrl('');
            setImgBase64('');
        } catch (error) {
            console.error('Error registering product:', error); // Manejo de errores en el registro del producto
            alert('Error ingresando producto. Inténtalo nuevamente.'); // Alerta de error
        } finally {
            setLoading(false); // Desactiva el estado de carga
        }
    };

    return (
        <div className='Consult_Box'> {/* Contenedor principal del formulario */}
            <form onSubmit={handleSubmit} className="Consult_Box"> {/* Formulario para el registro de producto */}
                <br />
                <label htmlFor="productoName">Nombre del Producto:</label> {/* Etiqueta para el campo de nombre del producto */}
                <input 
                    type="text" // Tipo de entrada: texto
                    placeholder="Nombre del producto" // Texto de marcador de posición
                    className='productoName' // Clase CSS para el estilo
                    name='productoName' // Nombre del campo
                    id="productoName" // ID del campo
                    required // Campo obligatorio
                    maxLength="45" // Longitud máxima permitida
                    value={productoName} // Valor del campo controlado por el estado
                    onChange={(e) => setProductoName(e.target.value)} // Maneja el cambio en el campo
                    aria-label="Nombre del producto" // Etiqueta accesible para lectores de pantalla
                />
                <br />
                <br />
                <label htmlFor="precio">Precio:</label> {/* Etiqueta para el campo de precio */}
                <input 
                    type="text" // Tipo de entrada: texto
                    placeholder="Precio" // Texto de marcador de posición
                    className='precio' // Clase CSS para el estilo
                    name='precio' // Nombre del campo
                    id="precio" // ID del campo
                    required // Campo obligatorio
                    value={precio} // Valor del campo controlado por el estado
                    onChange={(e) => setPrecio(e.target.value)} // Maneja el cambio en el campo
                    aria-label="Precio" // Etiqueta accesible para lectores de pantalla
                />
                <br />
                <br />
                <label htmlFor="descripcion">Descripción:</label> {/* Etiqueta para el campo de descripción */}
                <input 
                    type="text" // Tipo de entrada: texto
                    placeholder="Descripción" // Texto de marcador de posición
                    className='descripcion' // Clase CSS para el estilo
                    name='descripcion' // Nombre del campo
                    id="descripcion" // ID del campo
                    required // Campo obligatorio
                    value={descripcion} // Valor del campo controlado por el estado
                    onChange={(e) => setDescripcion(e.target.value)} // Maneja el cambio en el campo
                    aria-label="Descripción" // Etiqueta accesible para lectores de pantalla
                />
                <br />
                <br />
                <label htmlFor="marca">Marca:</label> {/* Etiqueta para el campo de marca */}
                <input 
                    type="text" // Tipo de entrada: texto
                    placeholder="Marca" // Texto de marcador de posición
                    className='marca' // Clase CSS para el estilo
                    name='marca' // Nombre del campo
                    id="marca" // ID del campo
                    required // Campo obligatorio
                    value={marca} // Valor del campo controlado por el estado
                    onChange={(e) => setMarca(e.target.value)} // Maneja el cambio en el campo
                    aria-label="Marca" // Etiqueta accesible para lectores de pantalla
                />
                <br />
                <br />
                <label htmlFor="url">URL:</label> {/* Etiqueta para el campo de URL */}
                <input 
                    type="text" // Tipo de entrada: texto
                    placeholder="URL" // Texto de marcador de posición
                    className='url' // Clase CSS para el estilo
                    name='url' // Nombre del campo
                    id="url" // ID del campo
                    value={url} // Valor del campo controlado por el estado
                    onChange={(e) => setUrl(e.target.value)} // Maneja el cambio en el campo
                    aria-label="URL" // Etiqueta accesible para lectores de pantalla
                />
                <br />
                <br />
                <label htmlFor="imageUpload">Imagen:</label> {/* Etiqueta para el campo de carga de imagen */}
                <input 
                    type="file" // Tipo de entrada: archivo
                    id="imageUpload" // ID del campo
                    onChange={handleImageUpload} // Maneja la carga de la imagen
                    aria-label="Subir imagen" // Etiqueta accesible para lectores de pantalla
                />
                <br />
                <br />
                <button 
                    type='submit' // Tipo de botón: enviar
                    id="btnSaveProduct" // ID del botón
                    className="btnSaveProduct" // Clase CSS para el estilo
                    disabled={loading} // Desactiva el botón mientras se carga
                >
                    {loading ? 'Guardando...' : 'Guardar producto'} {/* Texto del botón según el estado de carga */}
                </button>
            </form>
        </div>
    );
}

export default ProductForm; // Exporta el componente ProductForm
