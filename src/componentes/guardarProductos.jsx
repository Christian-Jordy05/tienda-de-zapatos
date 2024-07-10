import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../css/Productos.css';
import GuardarProducto from '../services/apiDeProductos';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';




function ProductosGuardar({ productos, setProductos }) {
    const [imagenSeleccionada, setInputDeImg] = useState('');
    const [isLogin, Login] = useState(false);
    const [NombreDelProducto, setNombreDelProducto] = useState('');
    const [PrecioDelProducto, setPrecioDelProducto] = useState('');
    const [nike,setNike] = useState('Nike');
    const [adidas,setAdidas] = useState('Adidas');
    const [reebok,setReebok] = useState('Reebok');
    const [puma,setPuma] = useState('Puma');
    const [categoria,setCategoria] = useState("")

   
   

    useEffect(() => {
        const user = localStorage.getItem('Admin');
        if (user) {
            Login(true);
        }
    }, []);

    function agregarImg(event) {
        const urlImagen = event.target.value;
        setInputDeImg(urlImagen);
    }

    const agregarProducto = async () => {
        if (imagenSeleccionada && NombreDelProducto && PrecioDelProducto) {
            const nuevoProducto = {
                image: imagenSeleccionada,
                marca: NombreDelProducto,
                precio: PrecioDelProducto,
                categorias: categoria
            };

            await GuardarProducto(nuevoProducto);
            setProductos([...productos, nuevoProducto]);
            setInputDeImg('');
            setNombreDelProducto('');
            setPrecioDelProducto('');
        } else {
            alert("Completa todo puto");
        }
    }

    return (
        <>
        
            {isLogin && (
                <Box   sx={{ minHeight: 1, minWidth: 150 }}>
                    <SimpleTreeView>
                        <Box sx={{ minHeight: 1, minWidth: 150 }}>
                            <SimpleTreeView>

                                {/* PADRE DE TODO  */}
                                <TreeItem itemId="grid" style={{ color : "black" , TreeItem}} className='lista-del-admin' label="admistracion">

                                    {/* AGREGAR PRODUCTO */}
                                    <TreeItem itemId='grid-community' label="agregar Productos">

                                        <div id='ConteinerGuardar' >
                                            <input
                                                type="text"
                                                id='input1'
                                                placeholder="URL de la imagen"
                                                value={imagenSeleccionada}
                                                onChange={agregarImg}
                                            />
                                          
                                            <input
                                                type="text"
                                                placeholder="Nombre del producto"
                                                value={NombreDelProducto}
                                                onChange={(e) => setNombreDelProducto(e.target.value)}
                                            />
                                            
                                            <input
                                                type="text"
                                                placeholder="Precio del producto"
                                                value={PrecioDelProducto}
                                                onChange={(e) => setPrecioDelProducto(e.target.value)}
                                            />
                                            <select value={categoria} id=""  onChange={(e) => setCategoria(e.target.value)} >
                                                <option value="">Categoria</option>
                                                <option value={nike}>Nike</option>
                                                <option value={adidas}>Adidas</option>
                                                <option value={reebok}>Reebok</option>
                                                <option value={puma}>Puma</option>
                                            </select>

                                            <Button onClick={agregarProducto}>Agregar Producto</Button>
                                        </div>
                                    </TreeItem>

                                    {/* LOS MENSAJES DE LOS USUARIOS */}
                                    <TreeItem  itemId="pickers" label="Mensajes de los usuarios">
                                        <h1 id='Nose'>en espera</h1>
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

export default ProductosGuardar;