import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PagHome from '../pages/home/PagHome'
import PagRegistrar from '../pages/registrar/registrar';

import PagDeLosProductos from '../pages/pagProdutos/PagProductos';
import PagContacto from '../pages/contacto/PagContacto';
import ERror from '../pages/error/error';
import ValidarInicesioUsersAdmin from '../services/ValidarInicesio_users-admin';

const Rou = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagHome />} />
        <Route path="/home" element={<PagHome />} />
        <Route path="/Inicio" element={<ValidarInicesioUsersAdmin />} />
        <Route path='/registrase' element={<PagRegistrar />} />
        <Route path='/Contacto' element={<PagContacto />} />
        <Route path='/Productos' element={<PagDeLosProductos />} />
        {/* <Route path='/error' element={<ERror/>}/> */}
        <Route path='/*' element={<ERror/>}/>
        {/* <Route path="/Home" element={<PrivateRoute><PagHome /></PrivateRoute>} /> */}
      </Routes>
    </Router>
  );
};

export default Rou;


