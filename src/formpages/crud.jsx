import { useEffect, useState } from "react";
import { GETProducto } from "../services/apiDeProductos";
import Card from 'react-bootstrap/Card';
import LongMenu from "../componentes/listaHambuerza";
import "../css/paginaDeLosProductos.css"
import NavbarDetodasLaspag from "../componentes/navbarDetodasLaspag"
import Reebokimg from "../img/reebok.png"
import NikeImg from "../img/nike.png"
import Pumaimg from "../img/puma.png"
import AdidasImg from "../img/adidas.png"
import { Link } from "react-router-dom";



function PagDeproductos() {
  // aqui va todas las variables de la categorias
  const [productos, setProductos] = useState([]);
  const [productoNike, setProductosNike] = useState([]);
  const [productoReebok, setProductosReebok] = useState([]);
  const [productoPuma, setProductosPuma] = useState([]);
  const [productoAdidas, setProductosAdidas] = useState([]);

  // boton que va a filtar cada categoria
  const [ButonNike, setNikeBoton] = useState(true);
  const [ButonReebok, setReebokboton] = useState(false);
  const [ButonPuma, setPumaBoton] = useState(false);
  const [botonAdidas, setAdidasBoton] = useState(false);
  // para buscar un zapato por nombre
  const [buscador, setBuscador] = useState('');

  // validacion para lista del admin 
  const [isLogin, Login] = useState(false);



  // aqui para cuando toque la img nike se oculte las demas y solo se muestre las nike
  const nike = () => {
    setNikeBoton(true);
    setReebokboton(false);
    setPumaBoton(false);
    setAdidasBoton(false);
  };

  // aqui para cuando toque la img Reebok se oculte las demas y solo se muestre las Reebok
  const Reebok = () => {
    setNikeBoton(false);
    setReebokboton(true);
    setPumaBoton(false);
    setAdidasBoton(false);
  };

  // aqui para cuando toque la img Puma se oculte las demas y solo se muestre las Puma
  const Puma = () => {
    setNikeBoton(false);
    setReebokboton(false);
    setPumaBoton(true);
    setAdidasBoton(false);
  };

  // aqui para cuando toque la img adidas se oculte las demas y solo se muestre las adidas
  const adidas = () => {
    setNikeBoton(false);
    setReebokboton(false);
    setPumaBoton(false);
    setAdidasBoton(true);
  };

  // esta funcion es para el buscador de tenis
  const fetchProductos = async () => {
    const data = await GETProducto();
    setProductos(data);
    FiltrarNike(data);
    FiltrarReebok(data);
    FiltrarPuma(data);
    FiltrarAdidas(data);
  };

  // aqui va a filtrar todas las tenis nike
  const FiltrarNike = (data) => {
    const Nike = data.filter(produc => produc.categorias === "Nike");
    setProductosNike(Nike);
  };

  // aqui va a filtrar todas las tenis Reebok
  const FiltrarReebok = (data) => {
    const Reebok = data.filter(produc => produc.categorias === "Reebok");
    setProductosReebok(Reebok);
  };

  // aqui va a filtrar todas las tenis Puma
  const FiltrarPuma = (data) => {
    const Puma = data.filter(produc => produc.categorias === "Puma");
    setProductosPuma(Puma);
  };

  // aqui va a filtrar todas las tenis adidas
  const FiltrarAdidas = (data) => {
    const Adidas = data.filter(produc => produc.categorias === "Adidas");
    setProductosAdidas(Adidas);
  };


  // Filtrar una lista de productos por nombre de marca
  const filtrarNombre = productos.filter(busqueda =>
    // Convertimos ambas cadenas (la marca del producto y el término de búsqueda) a minúsculas
    // para hacer una comparación insensible a mayúsculas y minúsculas.
    busqueda.marca.toLowerCase().includes(buscador.toLowerCase())
  );
  // 'filtrarNombre' ahora contiene una lista de productos donde la propiedad 'marca' incluye el término de búsqueda.


  // aqui actualiza los productos para mostrarlos
  useEffect(() => {
    fetchProductos();
  }, [productos]);



  //aqui en este useEffect llamo al local del admin porque si el admin inicio sesion mande un true diciendo que si inicio pero si no inicio se va a mantener en false
  useEffect(() => {
    const user = localStorage.getItem('Admin');
    if (user) {
      Login(true);
    }
  }, []);




  return (
    // fondo de los producto que lo va a contener
    <div id="fondoDeLosProductos">
      <nav id='nav'>
        {/* el nav*/}
        <NavbarDetodasLaspag />
      </nav>
    
      <Link to={"/home"}><button id="BotonDeRegresar">regresar</button></Link>
      {/* LOS BOTONES Y IMG DE LAS CATEGOIAS DE CADA PRODUCTOS */}
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
        {/* AQUI VA EL CARD DE LA BUSQUEDA*/}
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