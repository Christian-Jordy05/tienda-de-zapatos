import { Link } from "react-router-dom";
import ImgCasa from "../img/fondo-casa.jpg";
import ValidacionDelNombre from "../services/ValidacionDelNombre";
import MostrarProductos from "../services/obtenerProductos";
import ProductosGuardar from "../componentes/guardarProductos";
import { useEffect, useState } from "react";

function Home() {
  const [productos, setProductos] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('Admin');
    if (user) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div id="FondoDecasa">
      <nav id='nav'>
        <ValidacionDelNombre setIsLogin={setIsLogin} />
        <h1 id="titulo">BEARTRIX<span style={{ color: "blue" }}>15</span></h1>
        <div id="conteinerDebtn_Contacto">
          <div className="button-container-1">
            <span className="mas">TOCA</span>
            <Link to="/Contacto">
              <button id='work' type="button" name="Hover">Contacto</button>
            </Link>
          </div>
        </div>
        <div id="div-de-lista-de-admin">
        {isLogin && <ProductosGuardar productos={productos} setProductos={setProductos} />}
        </div>
        
      </nav>
      <div id='white'></div>
      <div className="contenedor">
        <img id='img_portada' src={ImgCasa} alt="img" />
        <h1 id='texto_de_portada'>COSTA RICA SE VISTE <br /><span id='texto-encima2'>DE FÚTBOL</span></h1>
        <button id='boton_de_img_portada'>COMPRA DE CAMISETAS<span id='fecha'> ➜</span></button>
      </div>
      <br />
      <div id="prueba">
       
      </div>

      <p id="titulos-para-los-productos">NUESTRO PRODUCTOS</p>
      <MostrarProductos productos={productos} setProductos={setProductos} />
    </div>
  );
}

export default Home;