import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BotonDeInicio from "../componentes/boton"

function ValidacionDelNombre({ setIsLogin }) {
   // validacion para que no se muestre las cosas del admin
  const [Login, setLogin] = useState(false);


  // variable para que mostrar quien inicio sesion
  const admin = localStorage.getItem('Admin');
  const user = localStorage.getItem('user');
  const mensaje = admin ?  <p>BIENVENIDO ADMINISTRADOR {admin}</p> : <p>BIENVENIDO usuario {user}</p>

  useEffect(() => {
    // variaables para iniciar sesion ya sea usuario o admin
    const user = localStorage.getItem('user');
    const Admin = localStorage.getItem('Admin');
    if (user || Admin) {
      setLogin(true);
      setIsLogin(true);
    }
  }, [setIsLogin]);

  // funcion para cerrar sesion
  const cerrarSesion = () => {
    // aqui para borrar en local quien ingreso 
    localStorage.removeItem('user');
    localStorage.removeItem('Admin');
    // y como cerro lo vuelve a poner en false
    setLogin(false);
    setIsLogin(false);
  };

  return (
    <>
    {/* aqui si Login es false muestre el boton registrarse y iniciar sesion */}
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
      {/* y si login es verdadero muestra un mensaje de bienvenida y el nombre quien inicio */}
      {Login && (
        <div>
          <p id='TextoDeBienvenido'>{mensaje}</p>
          <div id="conteinerDebtn_CerrarSesion">
          <div className="button-container-1">
            <span className="mas">TOCA</span>
              <button id='work' type="button" onClick={cerrarSesion} name="Hover">Cerrar sesion</button>
          </div>
          </div>
          {/* boton de iniciar */}
          <div style={{ display: 'none' }}>
            <BotonDeInicio />
          </div>
        </div>
      )}
    </>
  );
}

export default ValidacionDelNombre;


