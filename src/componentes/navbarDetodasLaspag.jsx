// NavbarDetodasLaspag.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ValidacionDelNombre from "./ValidacionDelNombre";
import ProductosGuardar from "../componentes/guardarProductos";
import "../css/casa.css"

function NavbarDetodasLaspag() {
  // validacion que actaliza los productos
    const [productos, setProductos] = useState([]);

    // validacion que oculta las codas de administracio del admin
    const [isLogin, setIsLogin] = useState(false);
  
    //aqui en este useEffect llamo al local del admin porque si el admin inicio sesion mande un true diciendo que si inicio pero si no inicio se va a mantener en false
    useEffect(() => {
      const admin = localStorage.getItem('Admin');
      if (admin) {
        setIsLogin(true);
      }
    }, []);
    
    return (
      <nav id='nav'>
        {/* esto para que muestre un texto de bienvenidos ya sea user o admin */}
        <ValidacionDelNombre setIsLogin={setIsLogin} />
        {/* titulo de la pag */}
        <h1 id="titulo">BEARTRIX<span style={{ color: "blue" }}>15</span></h1>
        {/* conteiner de contacto */}
        <div id="conteinerDebtn_Contacto">
          <div className="button-container-1">
            <span className="mas">TOCA</span>
            {/* boton de contacto */}
            <Link to="/Contacto">
              <button id='work' type="button" name="Hover">Contacto</button>
            </Link>
          </div>
        </div>
        <div id="about">
        <div className="button-container-1">
            <span className="mas">TOCA</span>
            {/* boton de contacto */}
            <Link to="/About">
              <button id='work' type="button" name="Hover">about</button>
            </Link>
          </div>
          </div>
        {/* div de la lista de administracion del contacto */}
        <div id="div-de-lista-de-admin">
          {/* isLogin es para que solo el usuario pueda ver la lista*/}
          {isLogin && <ProductosGuardar productos={productos} setProductos={setProductos} />}
        </div>
      </nav>
    );
}

export default NavbarDetodasLaspag;

