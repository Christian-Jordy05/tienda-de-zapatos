import { useState } from "react"
import '../css/Registrarse.css'
import {  Link,useNavigate} from "react-router-dom";
import user from '../img/usuario2.png'
import gmail from '../img/Correo-img-input.png'
import candado from '../img/candado.png'
import PostData from "../services/ApiDeUsers";
import { GETdata } from "../services/ApiDeUsers";
import Swal from 'sweetalert2';


const Registrase = () => {
  // LE HAGO UNA VARIABLE AL NAVIGATE PARA USARLO MAS FACIL
  const navigate = useNavigate();


  // VALIDACION O VARIABLES PARA LOS INPUT
    const [inpunUser, setUser] = useState();
    const [inpuntPass,setPasswor] = useState('');
    const [inputGmail,setGmail] = useState('');

    // FUNCION PARA  DARLE UN VALOR AL INPUT1
    const input1 = (event) => {
      setUser(event.target.value);
       };
       
       // FUNCION PARA  DARLE UN VALOR AL INPUT2
     const input2 = (event) => {
      setGmail(event.target.value);
       };


       // FUNCION PARA  DARLE UN VALOR AL INPUT3
    const input3 = (event) => {
      setPasswor(event.target.value);
       };


      //  FUNCION PARA REGISTRARSE EL USER
       const regis = async () => {

        // LLAMO LA API QUE VA A GUARDAR LOS USUARIOS 
        const datos = await GETdata();

        // HAGO UN IF PARA  VEREFICAR SI  TIENE  ESPACIOS  VACIOS
        if (inpunUser.trim() === "" || inpuntPass.trim() === "" || inputGmail.trim() === "") {
          Swal.fire({
            title: 'espacios vacios o datos incorrectos!',
            text: 'intentalo de nuevo pero fijate bien en los datos',
            icon: 'warning'
        });
            return; 
        }
        
        // Verificar si el usuario y el correo ya existen
        const usuarioExiste = datos.find(e => e.usuario === inpunUser || e.email === inputGmail); 


        if (usuarioExiste) {
          // SI EL USUARIOS YA EXISTE LE MANDARA UN ALERT
              Swal.fire({
            title: 'Ya hay un usuario con esos datos!',
            icon: 'warning'
        });
            return;
        }

    
        // Si todo está bien, proceder con el registro
        PostData(inpunUser, inpuntPass, inputGmail);
        alert("Registro correctamente");
        navigate('/Inicio');
    };

   
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
        {/* TITULO DEL NAV */}
        <h1 id="titulo">BEARTRIX<span style={{ color: "blue" }}>15</span></h1>
      </nav>
    
    {/* CONTEINER DEL REGISTRA */}
    <div id="conteinerRegis">  
    <h1 id="TituloDeRegis">REGISTRARSE</h1><br />

    {/* PRIMER INPUT */}
    <div id="input-Regis">
      {/* INPUT PARA INGRESAR EL USUARIO */}
    <input id="inputUser" type="text" onChange={input1} value={inpunUser} placeholder="ingrese usuario" /><br />
    <img src={user} alt="Imagen"/>
    </div>
     
     {/* SEGUNDO INPUT */}
     <div id="input-Regis2">
      {/* INPUT PARA INGRESAR EL EMAIL */}
     <input id="inputgmail" type="text" onChange={input2} value={inputGmail} placeholder="ingrese correo" /><br />
     <img src={gmail} alt="Imagen"/>
     </div>

     {/* TERCER INPUT */}
     <div id="input-Regis3">
      {/* INPUT PARA INGRESAR LA CONTRASEÑA */}
     <input id="inputPass" type="text" onChange={input3} value={inpuntPass} placeholder="contraseña" /><br /><br /><br />
     <img src={candado} alt="Imagen"/>

     </div>
     {/* BOTON PARA REGISTRAR EL USUARIO */}
      <button id="BotonRegis" onClick={regis}>registrase</button>
      
    </div>
  </ div>
  )
}

export default Registrase
