
import { GETAdmin } from '../services/ApiDeadmin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rey from '../img/rey.png'
import candado from '../img/candado.png'
import '../css/sesionAdmin.css'
import Swal from 'sweetalert2';

function SesionAdmin() {
  // validacion de los input para que el admin inicie sesion
    const [Admingmail, setAdmin] = useState();
    const [AdminPass, setAdminPasswor] = useState();
    // aqui le mando el metodo de navegar a navigate 
    const navigate = useNavigate();

    // funcion para que el input agarre el usuario del admin
    const Input1 = (event) => {
        setAdmin(event.target.value);
      };
    // funcion para que el input agarre la contra del admin
      const Input2 = (event) => {
        setAdminPasswor(event.target.value);
      };
      
    // funcion para iniciar sesion
      const Admin = async () =>  {
        // variable que va ayudar para que si el usuario inicia
        let adminEncontrado = false;
        // trae las informacio del api de los admin para iniciar sesion
        let ApiAdmi = await GETAdmin();

        // aqui este foreach haciendo una comparacion con los datos ingresado de los input con lsas informacion del api de admin
         ApiAdmi.forEach(e => {
          if (Admingmail.trim() === e.email && AdminPass.trim()=== e.contraseña ) {
            // y si lo ingresado esta el "adminEncontrado" cambia a true
            adminEncontrado = true;
            // guarda el nombre del admin que fue ingresado en local 
            localStorage.setItem('Admin', e.usuario); 
          }
        });
        // y si user del admin fue encontrado lo va dirigir a la pag de home con el metodo "navigate"
        if (adminEncontrado) {
          navigate("/Home")
        }else{
          // esto si alguien inicio datos incorrectos le muestre ese alert
          Swal.fire({
            title: 'No eres un admin!',
            text: 'Solo admin puede iniciar sesion aqui',
            icon: 'warning'
        });
        }
      };
  return (
    // div para le fondo
    <div id="FonodoDeIniciarsesion">
      <div id="conteiner2">
        {/* TITULO */}
      <h1 id='titulo1' >ADMINISTRADOR</h1>

      {/* PRIMER INPUT */}
      <div id='input-admin'>
        {/* Input para ingresar el gmail del admin */}
      <input id="InputDeUsers2" type="text" placeholder="Ingrese su correo" onChange={Input1} value={Admingmail}/>
      <img src={rey} alt="Imagen"/>
      </div> <br />

      {/* SEGUNDO INPUT  */}
      <div id='input-admin2'>
        {/* input para ingresar la contra del admin */}
      <input id="contra2"  type="text" placeholder="Ingrese su contraseña" onChange={Input2} value={AdminPass} />
      <img src={candado} alt="Imagen"/>
      </div>
      
      {/* BOTON */}
      {/* boton para ingresar a la pag home*/}
      <button id="botonDeAdmin" onClick={Admin}>INGRESAR</button>
    </div>
    </div>
    
  )
}

export default SesionAdmin
