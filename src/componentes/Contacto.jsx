import ubicacion from '../img/ubicacion-img-contacto.png';
import telefono from '../img/mensajeDeTelefono-img-contacto.png';
import telefonoViejo from '../img/telefono-img-contacto.png';
import correo from '../img/correo-img-contacto.png';
import instragran from '../img/instagram.png';
import X from '../img/letra-x.png';
import facebook from '../img/logo-de-facebook.png';
import linkedin from '../img/linkedin.png';

function Contacto() {
  return (
    <div id='fondo'>
      <div id='ContinerDecontactos'>
        <div id='CuadroDeContacto'>
          <img id='ImgCon' src={ubicacion} alt="img" />
          <h2>NUESTRA OFICINA OFICIAL</h2>
          <p>Costado Oeste, Hogar de Ancianos, Puntarenas Province, Barranca, Los Ángeles</p>
        </div>

        <div id='CuadroDeContacto'>
          <img id='ImgCon' src={telefono} alt="img" />
          <h2>NUMERO DE TELEFONO</h2>
          <p>276-2734-7633</p>
          <p>753-3753-4293 <br />(llamadas gratuitas)</p>
        </div>

        <div id='CuadroDeContacto'>
          <img id='ImgCon' src={telefonoViejo} alt="img" />
          <h2>FAX</h2>
          <p>1-375-287-0836</p>
        </div>

        <div id='CuadroDeContacto'>
          <img id='ImgCon' src={correo} alt="img" />
          <h2>CORREO ELECTRONICO</h2>
          <p>hola@gmail.com</p>
        </div>
      </div>

      <div id='SegundoConteinerDeContacto'>
        <div id='conteinerDeConsultas'>
          <p id='TextirosDecontacto1'>Name</p>
          <input id='InputDeContacto' type="text" placeholder='correo' />
          <p id='TextirosDecontacto2'>correo</p>
          <input id='InputDeContacto' type="text" placeholder='Usuario' />
          <p id='TextirosDecontacto3'>Mensaje</p>
          <input id='InputDeContacto3' type="text" placeholder='mensaje' />
          <button id='BotonDeContacto'>Enviar</button>
        </div>

        <div id='ConteinerDeInformacio'>
          <h1 id='Titulo'>Ponerse en Contacto</h1>
          <p id='SegundoTex'>
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Iste, laudantium impedit. Voluptatem nulla neque et perspiciatis a atque ea, ducimus, suscipit inventore excepturi deserunt laudantium quae animi delectus quo id?
          </p>
          <p id='TercerTex'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a, expedita praesentium ipsam dignissimos id optio sequi? Adipisci quisquam odio nesciunt quos porro fuga officiis alias consequatur, 
            error maxime. Dolorem.
          </p>

         <div id='ImgMinis'>
          <a href="https://www.facebook.com/"><img src={facebook} alt="img" /></a>
          <a href="https://www.instagram.com/"><img src={instragran} alt="img" /></a>
          <a href="https://x.com/?lang=es"><img src={X} alt="img" /></a>
          <a href="https://cr.linkedin.com/"><img src={linkedin} alt="img" /></a>
        </div>
        </div>
      </div><br /><br /><br />
    </div>
  );
}

export default Contacto;