import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../css/Productos.css';
import GuardarProducto from '../services/apiDeProductos';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import GuardarProductoDeInicio from '../services/ApiDeproductosDeInicio';
import { Link } from 'react-router-dom';



function ProductosGuardar({ productos, setProductos }) {
    // aqui abajo hago la valides para la img que se va aguardar
    const [imagenSeleccionada, setInputDeImg] = useState('');
    //aqui hago otra valides para que los input y el boton que se agregan solo aparesca para el admin
    const [isLogin, Login] = useState(false);
    //aqui hago valido los input y botones
    const [NombreDelProducto, setNombreDelProducto] = useState('');
    const [PrecioDelProducto, setPrecioDelProducto] = useState('');
    //los de abajos son para la options para asignarle la categoria al producto que yo le elija
    const [nike,setNike] = useState('Nike');
    const [adidas,setAdidas] = useState('Adidas');
    const [reebok,setReebok] = useState('Reebok');
    const [puma,setPuma] = useState('Puma');
    const [categoria,setCategoria] = useState("")

   
   
//aqui en este useEffect llamo al local del admin porque si el admin inicio sesion mande un true diciendo que si inicio pero si no inicio se va a mantener en false
    useEffect(() => {
        const admin = localStorage.getItem('Admin');
        if (admin) {
            Login(true);
        }
    }, []);

    //en esta funcion me valida para que las url img que le ingrese las lea correctamente
    function agregarImg(event) {
        const urlImagen = event.target.value;
        setInputDeImg(urlImagen);
    }

    //funcion para que agregue los productos al apiDeproductos
    const agregarProducto = async () => {
        //aqui hago que un if para que si los datos se cumple guarde los productos
        if (imagenSeleccionada && NombreDelProducto && PrecioDelProducto ) {
            //hago un objetos de las cosas que se van a guardar y como se van aguardar
            const nuevoProducto = {
                image: imagenSeleccionada,
                marca: NombreDelProducto,
                precio: PrecioDelProducto,
                categorias: categoria
            };

            //aqui igualmente se van aguardar otros productos que le agreguen
            const nuevoProductoDeInicio = {
                image: imagenSeleccionada,
                marca: NombreDelProducto,
                precio: PrecioDelProducto,
                categorias: categoria
            };
            // aqui en los dos await se van agregar los productos
            await GuardarProductoDeInicio(nuevoProductoDeInicio)
            await GuardarProducto(nuevoProducto);

            //aqui al setProductos le mando lo que se guardo para que muestre
            setProductos([...productos,nuevoProducto,nuevoProductoDeInicio]);

            //y aqui cuando ya agregue los producto los input se vuelvan en blanco
            setInputDeImg('');
            setNombreDelProducto('');
            setPrecioDelProducto('');
            setCategoria('')
        } else {
            // este else es por si todos los datos para guardar no estan completados le mande ese alert
            alert("complete los datos");
        }
    }

    return (
        <>
        {/* aqui hace que si la validacion de isLogin le manda un verdadero se muestre pero si no le manda un verdadero esta se va a mantener false y no se va a mostrar */}
            {isLogin && (
                // box cuerpo del todo aunque casi no sirve mucho
                <Box   sx={{ minHeight: 1, minWidth: 15 }}>
                    <SimpleTreeView>
                        <Box sx={{ minHeight: 1, minWidth: 15 }}>
                            <SimpleTreeView>
                                {/* PADRE DE TODO  */}
                                <TreeItem itemId="grid" style={{ color : "black" , TreeItem}} className='lista-del-admin' label="admistracion">

                                    {/* AGREGAR PRODUCTO */}
                                    <TreeItem itemId='grid-community' label="agregar Productos">
                                        {/* div que contiene los input y boton que guardar los productos */}
                                        <div id='ConteinerGuardar' >

                                            {/* input que guardar las img con url */}
                                            <input
                                                type="text"
                                                id='input1'
                                                placeholder="URL de la imagen"
                                                value={imagenSeleccionada}
                                                onChange={agregarImg}
                                            />
                                          {/* input que guarda los nombre de los productos */}
                                            <input
                                                type="text"
                                                placeholder="Nombre del producto"
                                                value={NombreDelProducto}
                                                onChange={(e) => setNombreDelProducto(e.target.value)}
                                            />
                                            {/* input que guardar el precio de los productos */}
                                            <input
                                                type="text"
                                                placeholder="Precio del producto"
                                                value={PrecioDelProducto}
                                                onChange={(e) => setPrecioDelProducto(e.target.value)}
                                            />

                                            {/* este selec con la option son las que me ayudan a darle una categoria a los productos */}
                                            <select value={categoria} id=""  onChange={(e) => setCategoria(e.target.value)} >
                                                <option value="">Categoria</option>
                                                <option value={nike}>Nike</option>
                                                <option value={adidas}>Adidas</option>
                                                <option value={reebok}>Reebok</option>
                                                <option value={puma}>Puma</option>
                                            </select>
                                            {/* el boton que va a llamar la funcion que va agregar con el onclik */}
                                            <Button onClick={agregarProducto}>Agregar Producto</Button>
                                        </div>
                                    </TreeItem>

                                    {/* LINK es el que me va a llevar a la pagina de los comentarios de los usuarios*/}
                                    <TreeItem  itemId="pickers" label="Mensajes de los usuarios">
                                        <Link id='BotonDeLinkDeComentarios' to={"/comentarios"}>Comentarios de los usuarios</Link>
                                    </TreeItem>
                                </TreeItem>
                            </SimpleTreeView>
                        </Box>
                    </SimpleTreeView>
                </Box>
            )}
        
        </>
    );
}

export default ProductosGuardar