import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PagHome from '../pages/home/PagHome'
import PagRegistrar from '../pages/registrar/registrar';
import PrivateRoute from './privateRou';
import PagDeLosProductos from '../pages/pagProdutos/PagProductos';
import PagContacto from '../pages/contacto/PagContacto';
import ERror from '../pages/error/error';
import ValidarInicesioUsersAdmin from '../formpages/ValidarInicesio_users-admin'
import Comentarios from '../pages/paginaParaLosComentariosDeLosUsers/comentarios';
import PagAbout from '../pages/PagAbout/pagAbout';

const Rou = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagHome />} />
        <Route path="/home" element={<PagHome />} />
        <Route path="/Inicio" element={<ValidarInicesioUsersAdmin />} />
        <Route path='/registrase' element={<PagRegistrar />} />
        <Route path='/Contacto' element={<PagContacto />} />
        <Route path='/About' element={<PagAbout />} />
        {/* <Route path='/Comentarios' element={<Comentarios />} /> */}
        <Route path='/Productos' element={<PagDeLosProductos />} />
        {/* <Route path='/error' element={<ERror/>}/> */}
        <Route path='/*' element={<ERror/>}/>
        <Route path='/error' element={<ERror/>}/>
        <Route path="/comentarios" element={<PrivateRoute><Comentarios/></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default Rou;


