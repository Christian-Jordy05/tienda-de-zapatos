# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BorrarProductos, GETProducto } from './apiDeProductos'; // Importa ambos métodos

const LongMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [productos, setProductos] = React.useState([]);

  // Función para obtener productos al montar el componente
  React.useEffect(() => {
    const fetchData = async () => {
      const datos = await GETProducto();
      setProductos(datos);
    };
    fetchData();
  }, []);

  // Función para borrar un producto específico
  const borrarProducto = async (ID) => {
    await BorrarProductos(ID);

    const updatedProductos = productos.filter(producto => producto.id !== ID);
    setProductos(updatedProductos);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {productos.map((producto) => (
          <MenuItem key={producto.id} onClick={() => borrarProducto(producto.id)}>
            Borrar {producto.nombre}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LongMenu;