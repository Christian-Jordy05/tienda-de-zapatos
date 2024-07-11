 const GuardarProductoDeInicio = async (nuevoProductoDeInicio) => {
    try {
        const response = await fetch('http://localhost:3001/productosDeInicio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProductoDeInicio)
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

export default GuardarProductoDeInicio




export const GETProductoDeInicio = async () => {
    try {
        const response = await fetch('http://localhost:3001/productosDeInicio');
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




export const BorrarProductosDeInicio = async (ID) => {
    console.log(ID);
    try {
        const response = await fetch(`http://localhost:3001/productosDeInicio/${ID}`, {
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


export const ActalizarProductoDeInici = async (id,imagen, inputMarca, inputPrecio,categoria) => {
    try {
        const response = await fetch(`http://localhost:3001/productosDeInicio/${id}`, {
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