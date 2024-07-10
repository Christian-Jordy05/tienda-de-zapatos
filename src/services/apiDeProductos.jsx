// GuardarProducto.js


const GuardarProducto = async (nuevoProducto) => {
    try {
        const response = await fetch('http://localhost:3001/Producto', {
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




export const GETProducto = async () => {
    try {
        const response = await fetch('http://localhost:3001/Producto');
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


export const BorrarProductos = async (ID) => {
    console.log(ID);
    try {
        const response = await fetch(`http://localhost:3001/Producto/${ID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error); 
    }
}


export const ActalizarProducto = async (id,imagen, inputMarca, inputPrecio,categoria) => {
    try {
        const response = await fetch(`http://localhost:3001/Producto/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: imagen,
                marca:inputMarca, 
                precio:inputPrecio,
                categorias: categoria

            })
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}