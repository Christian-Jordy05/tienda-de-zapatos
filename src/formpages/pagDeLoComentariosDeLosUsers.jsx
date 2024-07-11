import { useEffect, useState } from "react";
import { GETcomentarios, BorrarComentario } from "../services/APideLosComentariosDeLosUser";
import "../css/pagComentario.css";
import { Link } from "react-router-dom";



function PagDeLoComentariosDeLosUsers() {
    // VALIDACION O VARIABLE PARA ACTUALIZAR LOS PRODUCTOS
    const [productos, setProductos] = useState([]);

    // FUNCION PARA BORRAR COMENTARIIOS 
    const borrarComentario = async (ID) => {
        // AQUI LE MANDO EL ID ESPECIFICAMENTE DEL COMENTARIO QUE QUIERO BORRAR
        await BorrarComentario(ID);
        // LLAMO EL GET PARA RENDIRISAR LOS COMENTARIOS PARA ACTUALIZAR EL ESTADO 

        const datos = await GETcomentarios();
        const comentario = datos.filter((comentario) => comentario.id !== ID);
        // Y EL MANDO COMENTARIO AL SETPRODUCTO PARA QUE ACTUALIZE EL ESTADO
        setProductos(comentario);
    };

    // Y AQUI ME MUESTRE TODOS LOS COMENTARIOS 
    useEffect(() => {
        // OBTENGO TODOS LOS COMENTARIOS DEL API
        const obtenerProductos = async () => {
            const productosData = await GETcomentarios();
            // LOS MANDO PARA SETPRODUCTO PARA QUE ACTUALIZE EL ESTADO DE LOS COMENTARIOS 
            setProductos(productosData);
            
        };
        obtenerProductos();
    }, []);

   
    return (
        // FONDO DE LA PAG DE LOS COMENTARIOS 
        <div id="fondoDeLaPagDeLosComentarios">
            <Link to={"/home"}><button id="BotonDeRegresar2">regresar</button></Link>
            {/* CONTEINER DE LOS PRODUCTOS  */}
            <div id="conteinerTodoLosComentarios">
                {/* Y LLAMOS LOS COMENTARIOS CON PRODUCTOS  Y LOS MUESTRO CON EL METODO MAP*/}
                {productos.map((producto, index) => (
                    // INDEX LA LLAVE PARA MOSTRAR LOS PRODUCTOS
                    <div id="ConteinerDelComentario" key={index}>
                        <div id="Conteiner-nombre-fecha">
                            <div id="NombreDelComentario">
                                {/* AQUI MUESTRO EL NOMBRE DEL USUARIOS */}
                                <span id="TextoUsuario">USUARIO:</span>  {producto.Usuario}
                            </div>
                            {/* AQUI MUESTRO LA FECHA QUE LE USUARIOS HIZO EL COMENTARIO */}
                            <p>Fecha: {producto.fecha} </p>
                            <div id="Fecha">Hora: {producto.hora}</div>
                        </div>
                        {/* EL CORREO DEL USUARIO */}
                        <div id="Correo"><span id="TextoCorreo">CORREO:</span>  {producto.correo}</div>
                        <div id="ConteinerDeLosMensajes">
                            {/* MENSAJE DEL USUARIOS */}
                            <h4 id="TituloDeMensaje">MENSAJE DEL USUARIO:</h4>
                            <div id="Mensaje">{producto.Mensaje}</div>
                        </div>
                        {/* BOTON PARA BORRAR LOS COMENTARIOS Y LLAMO LA FUNCION PARA BORRAR COMENTARIOS */}
                        <button id="BotonDeBorrar" onClick={() => borrarComentario(producto.id)}>borra</button>
                    </div>
                ))}
            </div>
        
        </div>
    );
}

export default PagDeLoComentariosDeLosUsers;




