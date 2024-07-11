import { useState } from "react";
import BotonDeInicio from "../componentes/boton"; 
import { useNavigate } from "react-router-dom";
import { GETdata } from "../services/ApiDeUsers";
import user from '../img/usuario2.png'
import candado from '../img/candado.png'
import '../css/Inicio.css'
import Swal from 'sweetalert2';

const Inicio = () => {
  // VALIDES O VARIABLES DE LOS INPUT
  const [inpunUser, setUser] = useState('');
  const [inpuntPass, setPasswor] = useState('');
  const navigate = useNavigate()

  // CONST PARA DARLE VALOR
  const Inputname = (event) => {
    setUser(event.target.value);
  };

  // DARLE VALOR AL INPUT 
  const InputPassword = (event) => {
    setPasswor(event.target.value);
  };
//----------------------------------------

//-----------------------------------
// FUNCION PARA INICIAR SESION
  const autite = async () => {
// EL USUARIO VA HACER COMO UNA LLAVE DE PARA VALIDARME EL INICIO DEL USUARIO
    let usuarioEncontrado = false;
    // LLAMA EL API DE LOS USUARIOS
    let api = await GETdata();
    
    // HAGO FOREACH PARA HACER UNA COMPARACION QUE  SI LOS DATOS DE LOS INPUT INGRESADOS SON LOS MISMO DEL API
    api.forEach(e => {
      if (inpunUser.trim() === e.usuario && inpuntPass.trim() === e.contraseña) {
        // Y SI SE CUMPLE MI LLAVE PASA A TRUE 
        usuarioEncontrado = true;
        // Y GUARDA EL NOMBRE EL NOMBRE DEL USUARIO EN EL LOCAL
        localStorage.setItem('user', e.usuario); 
      }
    });
    // Y SI LA LLAVE ES TRUE ENTONCES LO VA A DIRIGIR A LA PAG DE HOME
    if (usuarioEncontrado) {
      navigate('/home');
    } else {
      // PERO SI ESTA DEJANDO ALGO EN BLANCO O PONER MAL LOS DATOS LE MANDA UN ALERT
      Swal.fire({
        title: 'espacios vacios o datos incorrectos!',
        text: 'intentalo de nuevo pero fijate bien en los datos',
        icon: 'warning'
    });
    }
  };

  return (
    // DIV DEL FONDO 
    <div id="FonodoDeIniciarsesion">
      {/* CONTEINER DE LOS INPUT */}
      <div id="conteiner">
      <h1 id='titulo2'>USUARIO</h1>
      <div id="input-Iniciar">
        {/* INPUT PARA INGRESAR USUARIOS  */}
        <input  type="text"  id="InputDeUsers"  value={inpunUser}  placeholder="Ingrese su usuario"  onChange={Inputname}/>
        {/* UNA IMG QUE VA A TENER EL INPUT  */}
        <img src={user} alt="Imagen"/>
        </div><br />

        <div id="input-Iniciar2">
          {/* INPUT PARA INGRESAR LA CONTRA */}
        <input type="password" id="contra" value={inpuntPass}  placeholder="Ingrese su contraseña" onChange={InputPassword} />
        {/* UNA IMG QUE VA TENER EL INPUT */}
        <img src={candado} alt="Imagen"/>
        </div><br />
       {/* BOTON PARA INICIAR SESION */}
        <BotonDeInicio onClick={autite} />
      </div>
    </div>
  );
};

export default Inicio;