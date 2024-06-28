
import { GETAdmin } from '../services/ApiDeadmin';
import { UseState } from 'react';
import { UseNavigate } from 'react-router-dom';

function sesionAdmin() {
    const [Admingmail, setAdmin] = UseState();
    const [AdminPass, setAdminPasswor] = UseState();
    const navigate = UseNavigate();

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
          }
        });
        if (usuarioEncontrado) {
          navigate("/administrar")
        }else{
          alert("no eres un admin")
        }
      };
  return (
    <div id="conteiner2">
      <h1 id='titulo1' >ADMINISTRADOR</h1>
      <input id="InputDeUsers2" type="text" placeholder="Ingrese su correo" onChange={Input1} value={Admingmail}/>
      <input id="contra2"  type="text" placeholder="Ingrese su contraseña" onChange={Input2} value={AdminPass} />
      <button id="boton2" onClick={Admin}>Ingresar</button>
    </div>
  )
}

export default sesionAdmin
