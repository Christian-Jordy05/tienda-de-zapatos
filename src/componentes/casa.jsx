// Home.js
import { useState } from "react";
import NavbarDetodasLaspag from "./navbarDetodasLaspag";
import ImgCasa from "../img/fondo-casa.jpg";
import MostrarProductos from "../services/obtenerProductos";
import { Link } from "react-router-dom";

function Home() {
  const [productos, setProductos] = useState([]);

  return (
    <div id="FondoDecasa">
      <nav id='nav'>
        <NavbarDetodasLaspag />
      </nav>
      <div id='white'></div>
      <div className="contenedor">
        <img id='img_portada' src={ImgCasa} alt="img" />
        <h1 id='texto_de_portada'>COSTA RICA SE VISTE <br /><span id='texto-encima2'>DE FÚTBOL</span></h1>
        <button id='boton_de_img_portada'>COMPRA DE CAMISETAS<span id='fecha'> ➜</span></button>
      </div>
      <br />
      <div id="prueba"></div>
      <h4 id="TituloDelTextoDeLink">TOCA EL TEXTO QUE DICE PRODUCTOS PARA VER TODOS LOS PRODUCTOS QUE OFRECEMOS</h4>
      <Link id="LinKParaLosProductos" to={"/Productos"}>PRODUCTOS</Link>
      <p id="titulos-para-los-productos">NUESTRO NUEVOS PRODUCTOS</p>
      <MostrarProductos productos={productos} setProductos={setProductos} />
    </div>
  );
}

export default Home;