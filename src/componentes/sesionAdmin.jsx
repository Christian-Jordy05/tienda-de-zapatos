
import { GETAdmin } from '../services/ApiDeadmin';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function sesionAdmin() {
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
          }
        });
        if (usuarioEncontrado) {
          navigate("/administrar")
        }else{
          alert("no eres un admin")
        }
      };
  return (
    <div>
      
      <input type="text" placeholder="gmail" onChange={Input1} value={Admingmail}/>
      <input type="text" placeholder="contraseña" onChange={Input2} value={AdminPass} />
      <button onClick={Admin}>prueba</button>
    </div>
  )
}

export default sesionAdmin
