import { useState } from "react";
import BotonDeInicio from "../services/boton"; 
import { useNavigate } from "react-router-dom";
import { GETdata } from "../services/ApiDeUsers";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [inpunUser, setUser] = useState('');
  const [inpuntPass, setPasswor] = useState('');
  const navigate = useNavigate();

  const Inputname = (event) => {
    setUser(event.target.value);
  };

  const InputPassword = (event) => {
    setPasswor(event.target.value);
  };
//----------------------------------------

//-----------------------------------
  const autite = async () => {
    let usuarioEncontrado = false;
    let api = await GETdata();
    console.log(api);

    api.forEach(e => {
      if (inpunUser === e.usuario && inpuntPass === e.contraseña) {
        usuarioEncontrado = true;
        localStorage.setItem('userID', e.id); 
      }
    });
    if (usuarioEncontrado) {
      alert("bueno");
      navigate('/home');
    } else {
      alert("datos incorrectos");
    }
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

      <div id="conteiner">
        <input 
          type="text" 
          id="InputDeUsers" 
          value={inpunUser} 
          placeholder="Ingrese su usuario" 
          onChange={Inputname} 
        /><br />
        <input 
          type="password" 
          id="contra" 
          value={inpuntPass} 
          placeholder="Ingrese su contraseña" 
          onChange={InputPassword} 
        /><br />
        <BotonDeInicio onClick={autite} />
      </div>
    </>
  );
};

export default Inicio;