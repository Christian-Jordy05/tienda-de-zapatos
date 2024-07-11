import { useEffect, useState } from 'react';
import { GETProductoDeInicio } from '../services/ApiDeproductosDeInicio';
import Card from 'react-bootstrap/Card';
import "../css/Productos.css";
import LongMenu from './listaHambuerza';

function MostrarProductos() {
    // validacion para que no se muestre las cosas del admin
    const [admin, setAdmin] = useState(false);
    // actualiza el estado de los productos
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // funcion para obtener los productos
        const obtenerProductos = async () => {
            // obtiene los productos de la api
            const productosData = await GETProductoDeInicio();
            // y aqui lo mando setProducto para que actualize el estado
            setProductos(productosData);
        };
        // actualize la funcion 
        obtenerProductos();
        // carga los productos para que lo muestre
    }, [productos]);
    
    //aqui en este useEffect llamo al local del admin porque si el admin inicio sesion mande un true diciendo que si inicio pero si no inicio se va a mantener en false
    useEffect(() => {
        const user = localStorage.getItem('Admin');
        if (user) {
            setAdmin(true);
        }
    }, [admin]);

    return (
        // div que contiene los productos
        <div id="product-container">
            {/* muestra los producto se muestra con el metodo map */}
            {productos.map((producto) => (
                <Card id='cuerpo' style={{ width: '18rem' }} key={producto.id}>
                    <div id='Conteiner-de-texto-nuevo-y-menu-para-editar-y-borrar'>
                        <p id='texto-del-producto'>Nuevo</p>
                        {/* admin verefica si el admin inicio sesion si inicio le manda true al "admin" pero si no le manda false la cual no muestra */}
                        {admin && (
                            <LongMenu id={producto.id} productos={productos} image={producto.image} precio={producto.precio} Marca={producto.marca} setProductos={setProductos} categoria={producto.categorias} />
                        )}
                    </div>
                    {/* aqui muestra la img */}
                    <Card.Img variant="top" src={producto.image} />
                    <Card.Body id='cuerpoIni'>
                        {/* aqui muestra la marca*/}
                        <Card.Title id='nombre-del-producto'>{producto.marca}</Card.Title>
                        {/* aqui muestra el precio */}
                        <Card.Text id='precio-del-producto'>
                            {producto.precio}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default MostrarProductos;
