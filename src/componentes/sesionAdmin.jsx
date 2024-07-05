
import { GETAdmin } from '../services/ApiDeadmin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rey from '../img/rey.png'
import candado from '../img/candado.png'
import '../css/sesionAdmin.css'

function SesionAdmin() {
    const [Admingmail, setAdmin] = useState();
    const [AdminPass, setAdminPasswor] = useState();
    const navigate = useNavigate();

    const Input1 = (event) => {
        setAdmin(event.target.value);
      };
      const Input2 = (event) => {
        setAdminPasswor(event.target.value);
      };
      
    
      const Admin = async () =>  {
        let usuarioEncontrado = false;
        let ApiAdmi = await GETAdmin();
    
        console.log(ApiAdmi);
         ApiAdmi.forEach(e => {
          if (Admingmail === e.email && AdminPass === e.contraseña) {
            usuarioEncontrado = true;
            localStorage.setItem('Admin', e.usuario); 
          }
        });
        if (usuarioEncontrado) {
          navigate("/Home")
        }else{
          alert("no eres un admin")
        }
      };
  return (
    <div id="FonodoDeIniciarsesion">
      <div id="conteiner2">

        {/* TITULO */}
      <h1 id='titulo1' >ADMINISTRADOR</h1>

      {/* PRIMER INPUT */}
      <div id='input-admin'>
      <input id="InputDeUsers2" type="text" placeholder="Ingrese su correo" onChange={Input1} value={Admingmail}/>
      <img src={rey} alt="Imagen"/>
      </div> <br />

      {/* SEGUNDO INPUT  */}
      <div id='input-admin2'>
      <input id="contra2"  type="text" placeholder="Ingrese su contraseña" onChange={Input2} value={AdminPass} />
      <img src={candado} alt="Imagen"/>
      </div>
      
      {/* BOTON */}
      <button id="botonDeAdmin" onClick={Admin}>INGRESAR</button>
    </div>
    </div>
    
  )
}

export default SesionAdmin
