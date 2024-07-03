// GuardarProducto.js
const API_URL2 = 'http://localhost:3001/Producto';

const GuardarProducto = async (nuevoProducto) => {
    try {
        const response = await fetch(API_URL2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        });

        if (!response.ok) {
            throw new Error('Error al guardar el producto');
        }

        const data = await response.json();
        console.log('Producto guardado:', data);
        return data;
    } catch (error) {
        console.error('Error al guardar el producto:', error);
        throw error;
    }
};

export default GuardarProducto;


// GETProducto.js
const API_URL = 'http://localhost:3001/Producto';

export const GETProducto = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        console.log('Datos de la API:', data);
        return data || []; 
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
};