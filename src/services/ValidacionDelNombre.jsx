import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BotonDeInicio from './boton';

function ValidacionDelNombre({ setIsLogin }) {
  const [Login, setLogin] = useState(false);
 
  const Admin = `BIENVENIDO ADMINISTRADOR ${localStorage.getItem('Admin')}`;
  const user = `BIENVENIDO  ${localStorage.getItem('user')}`;

  useEffect(() => {
    const user = localStorage.getItem('user');
    const Admin = localStorage.getItem('Admin');
    if (user || Admin) {
      setLogin(true);
      setIsLogin(true);
    }
  }, [setIsLogin]);

  const cerrarSesion = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('Admin');
    setLogin(false);
    setIsLogin(false);
  };

  return (
    <>
      {!Login && (
        <div id='conteinerDeBtn_Regis_Inicio'>
          <div className="button-container-1">
            <span className="mas">TOCA</span>
            <Link to="/registrarse">
              <button id='work' type="button" name="Hover">REGISTRARSE</button>
            </Link>
          </div>
          <div className="button-container-1">
            <span className="mas">TOCA</span>
            <Link to="/Inicio">
              <button id='work' type="button" name="Hover">INICIAR SESION</button>
            </Link>
          </div>
        </div>
      )}
      {Login && (
        <div>
          <p>{user || Admin}</p>
          <button onClick={cerrarSesion}>cerrar sesión</button>
          <div style={{ display: 'none' }}>
            <BotonDeInicio />
          </div>
        </div>
      )}
    </>
  );
}

export default ValidacionDelNombre;