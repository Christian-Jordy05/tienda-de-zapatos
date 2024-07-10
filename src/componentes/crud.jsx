import { useEffect, useState } from "react";
import { GETProducto } from "../services/apiDeProductos";
import Card from 'react-bootstrap/Card';
import LongMenu from "../services/listaHambuerza";
import "../css/paginaDeLosProductos.css"
import NavbarDetodasLaspag from "./navbarDetodasLaspag";
import Reebokimg from "../img/reebok.png"
import NikeImg from "../img/nike.png"
import Pumaimg from "../img/puma.png"
import AdidasImg from "../img/adidas.png"


function PagDeproductos() {
  const [productos, setProductos] = useState([]);
  const [productoNike, setProductosNike] = useState([]);
  const [productoReebok, setProductosReebok] = useState([]);
  const [productoPuma, setProductosPuma] = useState([]);
  const [productoAdidas, setProductosAdidas] = useState([]);

  const [ButonNike, setNikeBoton] = useState(true);
  const [ButonReebok, setReebokboton] = useState(false);
  const [ButonPuma, setPumaBoton] = useState(false);
  const [botonAdidas, setAdidasBoton] = useState(false);
  const [buscador, setBuscador] = useState('');

  const [isLogin, Login] = useState(false);
  
 


  const nike = () => {
    setNikeBoton(true);
    setReebokboton(false);
    setPumaBoton(false);
    setAdidasBoton(false);
  };

  const Reebok = () => {
    setNikeBoton(false);
    setReebokboton(true);
    setPumaBoton(false);
    setAdidasBoton(false);
  };

  const Puma = () => {
    setNikeBoton(false);
    setReebokboton(false);
    setPumaBoton(true);
    setAdidasBoton(false);
  };

  const adidas = () => {
    setNikeBoton(false);
    setReebokboton(false);
    setPumaBoton(false);
    setAdidasBoton(true);
  };
  

  const fetchProductos = async () => {
    const data = await GETProducto();
    setProductos(data);
    FiltrarNike(data);
    FiltrarReebok(data);
    FiltrarPuma(data);
    FiltrarAdidas(data);
  };

  const FiltrarNike = (data) => {
    const Nike = data.filter(produc => produc.categorias === "Nike");
    setProductosNike(Nike);
  };

  const FiltrarReebok = (data) => {
    const Reebok = data.filter(produc => produc.categorias === "Reebok");
    setProductosReebok(Reebok);
  };

  const FiltrarPuma = (data) => {
    const Puma = data.filter(produc => produc.categorias === "Puma");
    setProductosPuma(Puma);
  };

  const FiltrarAdidas = (data) => {
    const Adidas = data.filter(produc => produc.categorias === "Adidas");
    setProductosAdidas(Adidas);
  };

  const filtrarNombre = productos.filter(busqueda =>
    busqueda.marca.toLowerCase().includes(buscador.toLowerCase())
  );

  useEffect(() => {
    fetchProductos();
    
  }, [productos]);





  useEffect(() => {
    const user = localStorage.getItem('Admin');
    if (user) {
        Login(true);
    }
}, []);




  return (
    <div id="fondoDeLosProductos">


<nav id='nav'>
  <NavbarDetodasLaspag/>
      </nav>
      {/* LOS BOTONES DE LA CATEGOIA */}
      <div id="BtnDeCategoria">
      <img id="imgNike" src={NikeImg} alt="" />
      <img id="imgReebok" src={Reebokimg} alt="" />
       <img id="imgPuma" src={Pumaimg} alt="" />
       <img id="imgAdidas" src={AdidasImg} alt="" />


        <button id="BtnNike" data-animation="center" onClick={nike}><span id="colorDetexto">Nike</span></button>
        <button id="BtnReebok" onClick={Reebok}>Reebok</button>
        <button id="BtnPuma" onClick={Puma}>Puma</button>
        <button id="BtnAdidas" onClick={adidas}>Adidas</button>
        {/* <button onClick={todosl}>todos</button> */}
      </div>


       {/* BUSCADOR DE LOS PRODUCTOS */}
       <input
       id="InputDeBusqueda"
        type="text"
        placeholder="buscar"
        value={buscador}
        onChange={(e) => setBuscador(e.target.value)}
      />




      {/* LOS CARD DE LOS PRODUCTOS */}
<div id="ConteinerDeTodosLosProductos">
  {}
      {buscador && filtrarNombre.length > 0 && (
        <div id="divTodasLastenis">
          {filtrarNombre.map((producto, index) => (
            <Card id='cuerpo' style={{ width: '18rem' }} key={index}>
              <div id='Conteiner-de-texto-nuevo-y-menu-para-editar-y-borrar'>
                {/* <p id='texto-del-producto'>Nuevo</p> */}
                {isLogin && (
                <LongMenu
                  id={producto.id}
                  productos={productos}
                  image={producto.image}
                  precio={producto.precio}
                  Marca={producto.marca}
                  categoria={producto.categorias}
                />
              )}
              </div>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body id='cuerpoTodos'>
                <Card.Title id='nombre-del-producto'>{producto.marca}</Card.Title>
                <Card.Text id='precio-del-producto'>
                  {producto.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      {!buscador && ButonNike && (
        <div id="DivNike">
          {productoNike.map((producto, index) => (
            <Card id='cuerpo' style={{ width: '18rem' }} key={index}>
              <div id='Conteiner-de-texto-nuevo-y-menu-para-editar-y-borrar'>
                {/* <p id='texto-del-producto'>Nuevo</p> */}
                {isLogin && (
                <LongMenu
                  id={producto.id}
                  productos={productos}
                  image={producto.image}
                  precio={producto.precio}
                  Marca={producto.marca}
                  categoria={producto.categorias}
                />
              )}
              </div>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body id='cuerpoNike'>
                <Card.Title id='nombre-del-productonNike'>{producto.marca}</Card.Title>
                <Card.Text id='precio-del-productoNike'>
                  {producto.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      {!buscador && ButonReebok && (
        <div id="DivReebok">
          {productoReebok.map((producto, index) => (
            <Card id='cuerpo' style={{ width: '18rem' }} key={index}>
              <div id='Conteiner-de-texto-nuevo-y-menu-para-editar-y-borrar'>
                {/* <p id='texto-del-producto'>Nuevo</p> */}
                {isLogin && (
                <LongMenu
                  id={producto.id}
                  productos={productos}
                  image={producto.image}
                  precio={producto.precio}
                  Marca={producto.marca}
                  categoria={producto.categorias}
                />
              )}
              </div>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body id='cuerpoReebok'>
                <Card.Title id='nombre-del-producto'>{producto.marca}</Card.Title>
                <Card.Text id='precio-del-producto'>
                  {producto.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      {!buscador && ButonPuma && (
        <div id="DivPuma">
          {productoPuma.map((producto, index) => (
            <Card id='cuerpo' style={{ width: '18rem' }} key={index}>
              <div id='Conteiner-de-texto-nuevo-y-menu-para-editar-y-borrar'>
                {/* <p id='texto-del-producto'>Nuevo</p> */}
                {isLogin && (
                <LongMenu
                  id={producto.id}
                  productos={productos}
                  image={producto.image}
                  precio={producto.precio}
                  Marca={producto.marca}
                  categoria={producto.categorias}
                />
              )}
              </div>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body id='cuerpoPuma'>
                <Card.Title id='nombre-del-producto'>{producto.marca}</Card.Title>
                <Card.Text id='precio-del-producto'>
                  {producto.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      {!buscador && botonAdidas && (
        <div id="DivAdidas">
          {productoAdidas.map((producto, index) => (
            <Card id='cuerpo' style={{ width: '18rem' }} key={index}>
              <div id='Conteiner-de-texto-nuevo-y-menu-para-editar-y-borrar'>
                {/* <p id='texto-del-producto'>Nuevo</p> */}
                {isLogin && (
                <LongMenu
                  id={producto.id}
                  productos={productos}
                  image={producto.image}
                  precio={producto.precio}
                  Marca={producto.marca}
                  categoria={producto.categorias}
                />
              )}
              </div>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body id='cuerpoAdidas'>
                <Card.Title id='nombre-del-producto'>{producto.marca}</Card.Title>
                <Card.Text id='precio-del-producto'>
                  {producto.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default PagDeproductos;