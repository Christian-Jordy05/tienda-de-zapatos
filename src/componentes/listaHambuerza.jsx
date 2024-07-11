import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BorrarProductos, ActalizarProducto } from '../services/apiDeProductos';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../css/paginaDeLosProductos.css"
import { BorrarProductosDeInicio,ActalizarProductoDeInici } from '../services/ApiDeproductosDeInicio';
import Swal from 'sweetalert2';



// aqui llamos unos pros que se van a usar 
const LongMenu = ({ id, setProductos, productos, image, precio, Marca, categoria }) => {
  //estos tres validacion es para que se abra el menu de los botones que edita y elimina los productos  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState(false);

  // estas 2 validaciones son los input que van editar el producto que les diga que editen 
  const [inputMarca, setMarca] = useState(Marca);
  const [inputPrecio, setPrecio] = useState(precio);

  // es para que abra el menu y muestre lo que contiene
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
// y este para que lo cierre 
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // aqui abre el modal que contiene los input que van a modificar la informacion del producto
  const handleShowModal = () => {
    setShow(true);
  };

  // aqui cierra el modal
  const handleCloseModal = () => {
    setShow(false);
    setAnchorEl(null);
    console.log("Modal closed");
  };

  // aqui es la validacio del input que para que escriba el nombre que quiero cambiar 
  const handleChangeMarca = (event) => {
    setMarca(event.target.value);
  };
// este igualmente pero este ya es del precio
  const handleChangePrecio = (event) => {
    setPrecio(event.target.value);
  };


  // funcionalidad que me va a borrar los productos 
  const borrarProducto = async () => {
    // aqui el sweet que va a preguntar que si quiero borrar el producto 
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás devolver esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'No, cancelar'
      // y .then va a mandar el resultado que elegi que si o no
  }).then((result) => {

    // si le di que si va abrir otro sweet aler diciendo que el producto se a borrado
      if (result.isConfirmed) {
          Swal.fire(
              '¡Borrado!',
              'Tu archivo ha sido borrado.',
              'success'
          );

          //y aqui mando el id de los productos que voy a borra 
           BorrarProductos(id);
           BorrarProductosDeInicio(id)
          //  esta carga los datos de los productos que fueron borrado

        // Filtra los productos, excluyendo el producto con el ID especificado
        const updatedProductos = productos.filter((producto) => producto.id !== id);

        // Filtra los productos de inicio, excluyendo el producto con el ID especificado
        const updatedProductosDeInicio = productos.filter((producto) => producto.id !== id);

        //y aqui le manda a setProductos para que actualize los datos 
          setProductos(updatedProductos,updatedProductosDeInicio);

          // y aqui se cierra el menu
          handleCloseMenu();

          //y aqui si le di cancelar al borra al producto se muestre otro sweet alert
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // este es el otro sweet aler que mustra un mensaje diciendo que no se borro
          Swal.fire(
              'Cancelado',
              'el producto no se borro :)',
              'error'
          );
      }
  });
   
   
  };

  // funcion para editar el producto
  const editarProducto = async () => {
    // aqui se hizo if para que no intente poner algo en blanco
    if (inputMarca.trim() === "" || inputPrecio.trim() === "") {
      // y si hay espacios en blanco se muestre este alert
      Swal.fire({
        title: 'ESPACIO EN BLANCO',
        icon: 'warning'
    });
    
    } else {
      // y si no tiene nada en blanco se modifica la informacionn que le digo que modifique ya sea precio o nombre
      await ActalizarProductoDeInici(id,image, inputMarca, inputPrecio,categoria);
      await ActalizarProducto(id,image, inputMarca, inputPrecio,categoria);


      // actualiza el producto mediante el map, que crea un nuevo array
      const productosActualizados = productos.map((producto) => {
        // si el id del producto coincide con el proporcionado
        
        if (producto.id === id) {
          // y aqui retorna una la copia de la marca y precio que fueron modificado y actualiza
          return { ...producto, marca: inputMarca, precio: inputPrecio };
        } else {
          // y aqui si el id no coincide no retorna y no cambia 
          return producto;
        }
      });

      // actuliza el estado de los productos 
      setProductos(productosActualizados);

      // Cierra el modal
      handleCloseModal();
    }
  };



  return (
    <>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{ 'aria-labelledby': 'long-button' }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '12ch',
              display: "flex",
              alignContent: "center"
            },
          }}
        >
          <MenuItem>
          {/* div que contiene el boton de editar y eliminar */}
            <div id='separacionDeLosBotones'>
              {/* boton de eliminar que recibe la funcion de eliminar con un onclik */}
              <button id="Boton-borra-producto" onClick={borrarProducto}>Eliminar</button>
              {/* boton de editar que recibira la funcion de editar con el onlclik */}
              <button id="Boton-editar-producto" onClick={handleShowModal}>Editar</button>
            </div>
          </MenuItem>
        </Menu>

        <Modal show={show} onHide={handleCloseModal} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edita el producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* div que contiene los input que modifican */}
            <div className="form-group">
              {/* input que va a modificar la marca */}
              <input type="text" id='inputb' value={inputMarca} onChange={handleChangeMarca} placeholder="Marca" />
              {/* input que va a modificar el precio */}
              <input type="text"  value={inputPrecio} onChange={handleChangePrecio} placeholder="Precio" />
              {name}
              {/* <button onClick={editarProducto}>Guardar</button> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* boton para cerrar el modal de editar*/}
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
            {/* boton que recibe la funcion de agregar con el onclcik y guarda los cambios */}
            <Button variant="primary" onClick={editarProducto}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default LongMenu;



