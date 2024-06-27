import { useState } from "react"
import {  Link,useNavigate} from "react-router-dom";

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
<>
    <nav>     <Link to="/Inicio">
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
      </nav>
    
    <div id="conteinerRegis">  
    <h1>REGISTRARSE</h1><br />
  
      <input id="inputUser" type="text" onChange={input1} value={inpunUser} placeholder="ingrese usuario" /><br />

      <input id="inputgmail" type="text" onChange={input2} value={inputGmail} placeholder="ingrese correo" /><br />

      <input id="inputPass" type="text" onChange={input3} value={inpuntPass} placeholder="contraseña" /><br />
      <button id="BotonRegis" onClick={regis}>registrase</button>
      
    </div>
  </>
  )
}

export default Registrase
