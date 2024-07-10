import { useState } from "react";
import BotonDeInicio from "../services/boton"; 
import { useNavigate } from "react-router-dom";
import { GETdata } from "../services/ApiDeUsers";
import user from '../img/usuario2.png'
import candado from '../img/candado.png'
import '../css/Inicio.css'

const Inicio = () => {
  const [inpunUser, setUser] = useState('');
  const [inpuntPass, setPasswor] = useState('');
  const navigate = useNavigate()

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
        localStorage.setItem('user', e.usuario); 
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
    <div id="FonodoDeIniciarsesion">
      <div id="conteiner">
      <h1 id='titulo2'>USUARIO</h1>
      <div id="input-Iniciar">
        <input  type="text"  id="InputDeUsers"  value={inpunUser}  placeholder="Ingrese su usuario"  onChange={Inputname}/>
        <img src={user} alt="Imagen"/>
        </div><br />

        <div id="input-Iniciar2">
        <input type="password" id="contra" value={inpuntPass}  placeholder="Ingrese su contraseña" onChange={InputPassword} />
        <img src={candado} alt="Imagen"/>
        </div><br />
       
        <BotonDeInicio onClick={autite} />
      </div>
    </div>
  );
};

export default Inicio;