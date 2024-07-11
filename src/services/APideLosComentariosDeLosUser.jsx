
const GuardarComentarios = async (comentario) => {
    try {
        const response = await fetch('http://localhost:3001/ComentariosDeLosuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comentario)
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

export default GuardarComentarios



export const GETcomentarios = async () => {
    try {
        const response = await fetch('http://localhost:3001/ComentariosDeLosuser');
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




export const BorrarComentario = async (ID) => {
    console.log(ID);
    try {
        const response = await fetch(`http://localhost:3001/ComentariosDeLosuser/${ID}`, {
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