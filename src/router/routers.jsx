import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Paginicio from '../pages/inicio/inicio';
import PagHome from '../pages/home/PagHome'
import PagRegistrar from '../pages/registrar/registrar';
// import PrivateRoute from './privateRou';
import PagiAdmin from '../pages/pagAdmin/pagiAdmin';
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
        <Route path='/administrar' element={<PagiAdmin />} />
        {/* <Route path='/error' element={<ERror/>}/> */}
        <Route path='/*' element={<ERror/>}/>
        {/* <Route path="/Home" element={<PrivateRoute><PagHome /></PrivateRoute>} /> */}
      </Routes>
    </Router>
  );
};

export default Rou;


