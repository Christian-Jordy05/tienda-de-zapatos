
import NavbarDetodasLaspag from "../componentes/navbarDetodasLaspag";
import ImgCasa from "../img/fondo-casa.jpg";
import MostrarProductos from "../componentes/obtenerProductos";
import { Link } from "react-router-dom";

function Home() {
  

  return (
    // aqui llamo toda las cosas que va mostra en home
    <div id="FondoDecasa">
      <nav id='nav'>
        {/* aqui es el nav */}
        <NavbarDetodasLaspag />
      </nav>
      <div id='white'></div>
      <div className="contenedor">
        {/* AQUI VA LA IMG DE LA PORTADA*/}
        <img id='img_portada' src={ImgCasa} alt="img" />
        {/* el texto que esta emcima de la img */}
        <h1 id='texto_de_portada'>COSTA RICA SE VISTE <br /><span id='texto-encima2'>DE FÚTBOL</span></h1>
        {/* boton que enseña un texto */}
        <button id='boton_de_img_portada'>PROXIMAMENTE CAMISETAS<span id='fecha'></span></button>
      </div>
      <br />
      <div id="prueba"></div>
      {/* titulo para donde estan todos los productos  */}
      <h4 id="TituloDelTextoDeLink">TOCA EL TEXTO QUE DICE PRODUCTOS PARA VER TODOS LOS PRODUCTOS QUE OFRECEMOS</h4>
      {/* link que dirige a todos los productos */}
      <Link id="LinKParaLosProductos" to={"/Productos"}>PRODUCTOS</Link>
      <p id="titulos-para-los-productos">NUESTRO NUEVOS PRODUCTOS</p>
      <MostrarProductos />
      <div id="footer">

        <div id="SegundoDivDeFooter">
          <h4 id="textoDePrimerDiv">legal Warning</h4>
          <h4 id="textoDePrimerDiv">Privacy Policy</h4>
          <h4 id="textoDePrimerDiv">cooKies Policy</h4>
          <h4 id="textoDePrimerDiv">Quality</h4>
        </div>

        <div id="tercerDivDeFooter">
          <div><img id="ImgFooter" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEU7WZj///88WpdAXZpBX5tFY51FYZ3t7/V6jbgoS48vUJLS2OdSa6M3VZZuhLK2wNf3+fvd4u2Imr9NaKHEzeDv8ffh5uxje6ns7/E4V5oxUpjW3eR7j7Rddank6PHByt6dq8uQoMMjR42VpMCLnbvDzNmsuM20v9FVb6KntdFieqy0v9i8xtyYqMl+kbsdQYosT5qClrY1QXhgAAAE+ElEQVR4nO3dbXuiOBSA4QACBhoE8aVa8XWcqqjd/v8/t6LtzuzsKgdiICfXeb7ONZG7QaMGWmbdGr1/Zqnnei7+PM9Lxz+2/peM3Xyb3WTCDOqiGf98/SXcjs3yXZuI7tu3cOFO2z4cBdlsmr3dhFvPvAm8Nc1GhXA0NnEGiy6zOIsvwo2pM1jkvFtstDNZOIli9m4ykDFvy2ZmC50Z27V9DIrbMa/tQ1CcxzptH4LabIeE2CMh/kiIPxLij4T4IyH+SIg/EuKPhPgjYduJouCa+KdKI+grvMGE7bnpy7U0dV3Psb//5QtdOo6ewsIgvKy72h/DMJn7vj8vSpIkDAeLXr5frvrn6JClrl06lobCYoacQ7+XxLH1oPiSP8+9slnUTih4kHb380e235unQcmAegltwdlhH0J5lxIXl5CLKAdPH0JhwLPcL0fhFXK2rOpDJRTrqMrzD58wCE7VJxCTMHD2dXx4hLzTqwfEIuTpoCYQiTBwawNRCO3ArnuK4hDaQizrAzEIGe8//AiBX8gPiQQQgVCwowwQgVDuHEUgFI7UOaq/UAQnOaD2wuCl2uddhELZKdRdKFzJZ6HuQlv2hVR7IRP133HjEAaHWh/rEQnXJ+mTVG+hCORPUr2F8ouh7kJ+HsoLtd634FW+Xhsm4eLYy/+st9R470nA14rhYHnOUufyzBV/FOi8QxpA39DE+YFxHvxHB9zxbk/IgathEgW82s79v2tReAathmEGOBMf1aJwBQHOM6kJZK0+D0EvpX1ZYHtCIXIAcOCULXeltSdkC4DwxKUfqDVh0AEsh/MDZiFkO2bgSZ+kLQpTwKZ2T3KlKNJbuJQ/SVsUvpQL45XpwmF/Lf9AegvPvPzaw7K0FvpdEgIiobJISEJwJFQWCUkIjoTKIiEJwZFQWSQkITgSKst4oQ0UPuGRVAoFv99HByCMPh6MUAT40l+lUKTR/Q7n8m384fLwYITrKO3u4wfnoX+/IWCT+9H/v47RW5cSVQp5v9wg2b78S3HcwnhlvBDwYotbOMzKX0xxC/203ddS9cKEmS4ctLziqxfmgHd1qIUxZJ8ft7BvvDAyXQhZDnEL54DlELcwdEwXHgELPm7hHnLZG2ZhvIJcuYhaeDZeGJku9HemC5PSu7qwCweQ5RC1MIcsh6iFJ9BvMsUs7IMu5McsBC0WmIUx5LMTauH8BXQzBmJhWHoLMHbhArRYYBbuYb/2WqlwpVS4hN31pXSHNOrdLz+W3+gcD/L7Axwj2F1faq9U+P8bzK+tAXd2+d2PByMAb2trTchBwrU0UPurTfBeT2P+FUMkJCE8EiqLhCQER0JlkZCE4EioLBKSEBwJlUVCEoIjobJISEJwJFQWCUkIjoTKIiEJwZFQWSQkITgSKouEJARHQmWRkITgSKgsEpIQHAmVRUISgiOhskhIQnAkVBYJSQiOhMoiIQnBkVBZJCQhOBIqi4TPFDpPON7qNSl0n3C81WtO6LLxE463eo0JL77Pifwo1WtM2PnBtkYLRfrGXseTJ5wLVWtKOJnFzPr5jCOuWkNC4W0tZr12p6zxWWxION3EF6H1lk2fctRVakb41+zVKoRtEJsQikkBvAqt0cxp+BVV/V+0EhN3UwBvQiveRp7T5Ps3kPBcX+g46Wx7+4NL7Gu4ePuZpa7XVCwLrfhxF6GoO3w63rx9/6D+BncElkevYj5cAAAAAElFTkSuQmCC" alt="img" /></div>
          <div><img id="ImgFooter" src="data:image/png;base64,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" alt="img" /></div>
          <div><img id="ImgFooter" src="https://e7.pngegg.com/pngimages/501/517/png-clipart-brown-and-gray-instant-camera-illustration-application-software-mobile-app-android-icon-instagram-logo-lens-camera-lens-thumbnail.png" alt="" /></div>
        </div>
        <div id="CuartoDivDeFooter">
          <h4 id="textoDeSegundoDiv">tarrago</h4>
          <h4 id="textoDeSegundoDiv">blog</h4>
          <h4 id="textoDeSegundoDiv">lasc</h4>
          <h4 id="textoDeSegundoDiv">FAQs</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;