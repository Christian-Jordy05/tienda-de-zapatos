import { useEffect } from 'react';
import { GETProducto } from '../services/apiDeProductos';
import Card from 'react-bootstrap/Card';
import "../css/Productos.css"
import LongMenu from "../services/listaHambuerza";

function MostrarProductos({ productos, setProductos }) {
    
    useEffect(() => {
        const obtenerProductos = async () => {
            const productosData = await GETProducto();
            console.log(productosData);
            setProductos(productosData);
        };
        obtenerProductos();
    }, [setProductos]);

    return (
        <>
        <div id="product-container">
            {productos.map((producto, index) => (
                <Card id='cuerpo' style={{ width: '18rem' }} key={index}>
                    <div id='Conteiner-de-texto-nuevo-y-menu-para-editar-y-borrar'>
                        <p id='texto-del-producto'>Nuevo</p>
                        <LongMenu />
                    </div>
                    <Card.Img variant="top" src={producto.image} />
                    <Card.Body id='cuerpo'>
                        <Card.Title id='nombre-del-producto'>{producto.marca}</Card.Title>
                        <Card.Text id='precio-del-producto'>
                            {producto.precio}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
        </>
    );
}

export default MostrarProductos;