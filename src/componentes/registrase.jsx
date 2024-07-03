import { useState } from "react"
import '../css/Registrarse.css'
import {  Link,useNavigate} from "react-router-dom";
import user from '../img/usuario2.png'
import gmail from '../img/Correo-img-input.png'
import candado from '../img/candado.png'
import PostData from "../services/ApiDeUsers";


const Registrase = () => {
  const navigate = useNavigate();


    const [inpunUser, setUser] = useState();
    const [inpuntPass,setPasswor] = useState('');
    const [inputGmail,setGmail] = useState('');

    const input1 = (event) => {
      setUser(event.target.value);
       };
       
     const input2 = (event) => {
      setGmail(event.target.value);
       };


    const input3 = (event) => {
      setPasswor(event.target.value);
       };

    const regis = async () => {
      if (inpunUser === "" || inpuntPass === "" || inputGmail=== "") {
        alert("espacio vacios")
      }else{
        navigate('/Inicio');
        alert("registro correctamente")
        await PostData(inpunUser,inpuntPass, inputGmail)
      }
      
    }

   
  return (
<div id="FonodoDeRegistrarse">
      {/* EL NAV */}
      <nav id="conteinerNav">
        <div id="botones">

          {/* LOS BOTONES DEL REGIS Y INICIAR SESION */}
          <Link to="/inicio">
            <a aria-label='Thanks' className='h-button centered' data-text='Iniciar sesion' href='#'>
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
    
    <div id="conteinerRegis">  
    <h1 id="TituloDeRegis">REGISTRARSE</h1><br />

    {/* PRIMER INPUT */}
    <div id="input-Regis">
    <input id="inputUser" type="text" onChange={input1} value={inpunUser} placeholder="ingrese usuario" /><br />
    <img src={user} alt="Imagen"/>
    </div>
     
     {/* SEGUNDO INPUT */}
     <div id="input-Regis2">
     <input id="inputgmail" type="text" onChange={input2} value={inputGmail} placeholder="ingrese correo" /><br />
     <img src={gmail} alt="Imagen"/>
     </div>

     {/* TERCER INPUT */}
     <div id="input-Regis3">
     <input id="inputPass" type="text" onChange={input3} value={inpuntPass} placeholder="contraseña" /><br /><br /><br />
     <img src={candado} alt="Imagen"/>

     </div>

     
      <button id="BotonRegis" onClick={regis}>registrase</button>
      
    </div>
  </ div>
  )
}

export default Registrase
