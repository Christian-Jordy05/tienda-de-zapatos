import ubicacion from '../img/ubicacion-img-contacto.png';
import telefono from '../img/mensajeDeTelefono-img-contacto.png';
import telefonoViejo from '../img/telefono-img-contacto.png';
import correo from '../img/correo-img-contacto.png';
import instagram from '../img/instagram.png';
import X from '../img/letra-x.png';
import facebook from '../img/logo-de-facebook.png';
import linkedin from '../img/linkedin.png';
import { useState } from 'react';
import GuardarComentarios from '../services/APideLosComentariosDeLosUser';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Contacto() {
  // validacion de los input para usarlo
  const [InputCorreo, SetInputCorreo] = useState('');
  const [InputUsuario, SetInputUsuario] = useState('');
  const [InputMensaje, SetInputMensaje] = useState('');

  // funcion para la hora 
  const ti = () => {
    const fechahora = new Date();
    // crea la hora 
    const hora = fechahora.getHours();
    // crea los minutos
    const minuto = fechahora.getMinutes();
    // crea los segundos 
    const segundo = fechahora.getSeconds();
    // y los returnos juntos
    return `${hora}:${minuto}:${segundo}`;
  };

// funcion para guardar los comentaros de los ususarios 
  const guardarComentario = async () => {
    // variables la cual me crea la fecha 
    const fecha = new Date();
    const Fecha = format(fecha, 'dd/MM/yyyy');

    // aqui hago una comparacion con if que los input no debe tener espacion blanco y no se pueda guardar cosas blancos 
    if (InputCorreo.trim() === "" || InputUsuario.trim() === "" || InputMensaje.trim() === "") {
      // si hay espacios en blancos manda este aler
      Swal.fire({
        title: 'esta vacio!',
        icon: 'warning'
      });
    } else {
      // pero si no hay espacio en blanco y completo todo el comentario del usuario se guardar en objeto y se manda en la api de los comentarios
      const comentario = {
        correo: InputCorreo,
        Usuario: InputUsuario,
        Mensaje: InputMensaje,
        fecha: Fecha,
        hora: ti()
      };
      await GuardarComentarios(comentario);
      // y cuando se guardar los objetos se vuelven blancos los input y manda alert
      Swal.fire({
        title: 'MUCHAS GRACIAS POR SU COMENTARIO!',
        text: 'QUE TENGA EXCELENTE DIA :)',
        icon: 'success'
    });
      SetInputCorreo('');
      SetInputUsuario('');
      SetInputMensaje('');
    }
  };

  return (
    <div id='fondo'>
      <Link to={"/home"}><button id="BotonDeRegresar">regresar</button></Link>
      {/* aqui va el conteiner que va a contener a todos */}
      <div id='ContinerDecontactos'>
        <div id='CuadroDeContacto'>
          {/* aqui va una img de ubicacion */}
          <img id='ImgCon' src={ubicacion} alt="img" />
          <h2>NUESTRA OFICINA OFICIAL</h2>
          <p>Costado Oeste, Hogar de Ancianos, Puntarenas Province, Barranca, Los Ángeles</p>
        </div>

        <div id='CuadroDeContacto'>
          {/*  */}
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

      {/* segundo conteiner que va a contener los segundo de contacto */}
      <div id='SegundoConteinerDeContacto'>
        {/* cuadro de los input */}
        <div id='conteinerDeConsultas'>
          {/* texto de primer input  */}
          <p id='TextirosDecontacto1'>Name</p>
          {/* input de correo  */}
          <input id='InputDeContacto' type="text" placeholder='Usuario' value={InputCorreo} onChange={(e) => SetInputCorreo(e.target.value)} />

          {/* texto del segundo input */}
          <p id='TextirosDecontacto2'>correo</p>
          {/* input de segundo input  */}
          <input id='InputDeContacto' type="text" placeholder='correo' value={InputUsuario} onChange={(e) => SetInputUsuario(e.target.value)} />

          {/* texto del tercer input  */}
          <p id='TextirosDecontacto3'>Mensaje</p>
          {/* tercer input */}
          <input id='InputDeContacto3' type="text" placeholder='mensaje' value={InputMensaje} onChange={(e) => SetInputMensaje(e.target.value)} />

          {/* boton que va a guardar los comentarios */}
          <button id='BotonDeContacto' onClick={guardarComentario}>Enviar</button>
        </div>


        {/* aqui va informacion*/}
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

          {/* aqui va unas img que te dirige a las redes sociales */}
          <div id='ImgMinis'>
            <a href="https://www.facebook.com/"><img src={facebook} alt="img" /></a>
            <a href="https://www.instagram.com/"><img src={instagram} alt="img" /></a>
            <a href="https://x.com/?lang=es"><img src={X} alt="img" /></a>
            <a href="https://cr.linkedin.com/"><img src={linkedin} alt="img" /></a>
          </div>
        </div>
      </div><br /><br /><br />
    </div>
  );
}

export default Contacto;