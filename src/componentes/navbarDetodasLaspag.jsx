// NavbarDetodasLaspag.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ValidacionDelNombre from "../services/ValidacionDelNombre";
import ProductosGuardar from "../componentes/guardarProductos";

function NavbarDetodasLaspag() {
    const [productos, setProductos] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
  
    useEffect(() => {
      const admin = localStorage.getItem('Admin');
      if (admin) {
        setIsLogin(true);
      }
    }, []);
    
    return (
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
    );
}

export default NavbarDetodasLaspag;

