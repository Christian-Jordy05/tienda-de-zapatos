import { useNavigate } from 'react-router-dom';

function Home() {
  //-------- FUNCIONALIDAD DE LOS BOTONES PARA DERIGIRSE DE UNA PAG A OTRA---------------
  const navigate = useNavigate();
  function borrar() {
    localStorage.removeItem("userID");
    navigate("/Inicio");
  }




  return (
    <>
        {/* BOTONES PARA DEREGIR DE UNA PAG A OTRA  */}
        <nav id='nav'>

         <div id='conteinerDeBtn_Regis_Inicio'>
           <div className="button-container-1">
            <span className="mas">toca</span>
            <button onClick={borrar} id='work' type="button" name="Hover">cerrar sesion</button>
           </div>

           <div className="button-container-1">
             <span className="mas">toca</span>
             <button onClick={borrar} id='work' type="button" name="Hover">iniciar sesion</button>
          </div>
         </div>

        </nav>
  
    </>
    
  );
}

export default Home;