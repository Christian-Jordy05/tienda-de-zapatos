import { Link } from "react-router-dom";
import ImgCasa from "../img/fondo-casa.jpg"

function Home() {
  return (
    <>
      {/* BOTONES PARA DEREGIR DE UNA PAG A OTRA */}
      <nav id='nav'>
        <div id='conteinerDeBtn_Regis_Inicio'>

          <div className="button-container-1">
            <span className="mas">TOCA</span>
            <Link to="/registrase"><button id='work' type="button" name="Hover">REGISTRARSE</button></Link>
          </div>

          <div className="button-container-1">
            <span className="mas">TOCA</span>
            <Link to="/Inicio">
              <button id='work' type="button" name="Hover">INICIAR SESION</button>
            </Link>
          </div>
        </div>
        <h1 id="titulo">BEARTRIX<span style={{ color: "blue" }}>15</span></h1>


        <div id="conteinerDebtn_Contacto">
        <div className="button-container-1">
            <span className="mas">TOCA</span>
            <Link to="/Contacto">
              <button id='work' type="button" name="Hover">Contacto</button>
            </Link>
          </div>
        </div>

      </nav>
        {/* ESPACIO BLANCO */}
        <div id='white'></div>

        {/* IMG DE LA PORTADA */}
        <div className="contenedor">
          <img id='img_portada' src={ImgCasa} alt="img" />
          <h1 id='texto_de_portada'>COSTA RICA SE VISTE <br /><span id='texto-encima2'>DE FÚTBOL</span></h1>
          <button id='boton_de_img_portada'>COMPRA DE CAMISETAS<span id='fecha'> ➜</span></button>

          </div>

       
    </>
    
  );
}

export default Home;