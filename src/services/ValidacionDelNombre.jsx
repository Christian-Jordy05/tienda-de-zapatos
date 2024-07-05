import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BotonDeInicio from './boton';

function ValidacionDelNombre({ setIsLogin }) {
  const [Login, setLogin] = useState(false);


  const admin = localStorage.getItem('Admin');
  const user = localStorage.getItem('user');
  const mensaje = admin ?  <p>BIENVENIDO ADMINISTRADOR {admin}</p> : <p>BIENVENIDO {user}</p>

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
          <p id='TextoDeBienvenido'>{mensaje}</p>
          <div id="conteinerDebtn_CerrarSesion">
          <div className="button-container-1">
            <span className="mas">TOCA</span>
              <button id='work' type="button" onClick={cerrarSesion} name="Hover">Cerrar sesion</button>
          </div>
          </div>
          
          <div style={{ display: 'none' }}>
            <BotonDeInicio />
          </div>
        </div>
      )}
    </>
  );
}

export default ValidacionDelNombre;


