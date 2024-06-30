import  { useState } from 'react';
import SesionAdmin from '../componentes/sesionAdmin';
import Inicio from '../componentes/inicio-sesion';
import { Link } from 'react-router-dom';
import Corona from '../img/corona.png'
import user from  '../img/usuario.png'



function ValidarIniciosUsuariosAdmin() {

  const [Mostrar, SetMostrarpag] = useState('inicio');

  const MostrarAdmin = () => {
    SetMostrarpag('admin');
  };

  const MostrarUsuarios = () => {
    SetMostrarpag('inicio');
  };

  return (
    <>
      {/* EL NAV */}
      <nav id="conteinerNav">
        <div id="botones">
          {/* LOS BOTONES DEL REGIS Y INICIAR SESION */}
          <Link to="/registrase">
            <a aria-label='Thanks' className='h-button centered' data-text='Registrarse' href='#'>
              <span>T</span>
              <span>O</span>
              <span>C</span>
              <span>A</span>
              <span></span>
              <span></span>
              <span>A</span>
              <span>Q</span>
              <span>U</span>
              <span>I</span>
              <span>!</span>
            </a>
          </Link>
          
          <Link to="/Home">
            <a aria-label='Thanks' className='L-button Centered' data-text='Home' href='#'>
              <span>T</span>
              <span>O</span>
              <span>C</span>
              <span>A</span>
              <span></span>
              <span></span>
              <span>A</span>
              <span>Q</span>
              <span>U</span>
              <span>I</span>
              <span>!</span>
            </a>
          </Link>
        </div>
        <h1 id="titulo">BEARTRIX<span style={{ color: "blue" }}>15</span></h1>
      </nav>

      <div>
        {Mostrar === 'admin' && <SesionAdmin/>}
        {Mostrar === 'inicio' && <Inicio />}
      </div>

      <div id='botonesUserYAdmin'>
      <img id='img' src={Corona} alt="img" />
      <img id='img' src={user} alt="img" />
      <button id='boton1' onClick={MostrarAdmin}>Administrador</button>
      <button id='boton2' onClick={MostrarUsuarios}>Usuario</button>
      </div>
    </>
  );
}

export default ValidarIniciosUsuariosAdmin;