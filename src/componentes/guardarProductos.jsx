import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../css/Productos.css';
import GuardarProducto from '../services/apiDeProductos';

function ProductosGuardar({ productos, setProductos }) {
    const [imagenSeleccionada, setInputDeImg] = useState('');
    const [isLogin, Login] = useState(false);
    const [NombreDelProducto, setNombreDelProducto] = useState('');
    const [PrecioDelProducto, setPrecioDelProducto] = useState('');
    
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
                precio: PrecioDelProducto
            };

            await GuardarProducto(nuevoProducto);
            setProductos([...productos, nuevoProducto]);
            setInputDeImg('');
            setNombreDelProducto('');
            setPrecioDelProducto('');
        } else {
            alert("Completa todos los campos e imagen");
        }
    }

    return (
        <>
            {isLogin && (
                <div id='ConteinerGuardar'>
                    <input
                        type="text"
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
                    <Button onClick={agregarProducto}>Agregar Producto</Button>
                </div>
            )}
        </>
    );
}

export default ProductosGuardar;