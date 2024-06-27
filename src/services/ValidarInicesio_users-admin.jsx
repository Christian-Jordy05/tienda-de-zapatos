
import SesionAdmin from '../componentes/sesionAdmin';
import Inicio from '../componentes/inicio-sesion';
import { useState } from 'react';

function ValidarIniciosUsuariosAdmin() {
  const [isAdminVisible, setIsAdminVisible] = useState(false);

  return (
    <>
      {isAdminVisible ? (
        <div>
          <SesionAdmin />
          <button onClick={() => setIsAdminVisible(false)}>Users</button>
        </div>
      ) : (
        <div>
          <Inicio />
          <button onClick={() => setIsAdminVisible(true)}>Admin</button>
        </div>
      )}
    </>
  );
}

export default ValidarIniciosUsuariosAdmin;