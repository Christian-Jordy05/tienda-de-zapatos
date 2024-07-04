import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BorrarProductos } from './apiDeProductos';
import { ActalizarProducto } from './apiDeProductos';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LongMenu = ({ id, setProductos, productos }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState(false);
  const [inputMarca, setMarca] = useState('');
  const [inputPrecio, setPrecio] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleShowModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    setAnchorEl(null);
    console.log("Modal closed");
  };

  const handleChangeMarca = (event) => {
    setMarca(event.target.value);
  };

  const handleChangePrecio = (event) => {
    setPrecio(event.target.value);
  };

  const borrarProducto = async () => {
    await BorrarProductos(id);
    const updatedProductos = productos.filter((producto) => producto.id !== id);
    setProductos(updatedProductos);
    handleCloseMenu();
  };

  const editarProducto = async () => {
    if (inputMarca === "" || inputPrecio === "") {
      console.log("Espacios vacíos");
    } else {
      await ActalizarProducto(id, inputMarca, inputPrecio);
      console.log("Producto actualizado");
      const productosActualizados = productos.map((producto) => {
        if (producto.id === id) {
          return { ...producto, marca: inputMarca, precio: inputPrecio };
        } else {
          return producto;
        }
      });
      setProductos(productosActualizados);
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
            <div id='pro'>
              <button id="Boton-borra-producto" onClick={borrarProducto}>Eliminar</button>
              <button id="Boton-editar-producto" onClick={handleShowModal}>Editar</button>
            </div>
          </MenuItem>
        </Menu>

        <Modal show={show} onHide={handleCloseModal} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edita el producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <input type="text" value={inputMarca} onChange={handleChangeMarca} placeholder="Marca" />
              <input type="text" value={inputPrecio} onChange={handleChangePrecio} placeholder="Precio" />
              {/* <button onClick={editarProducto}>Guardar</button> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
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

