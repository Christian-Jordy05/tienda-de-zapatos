import '../css/about.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id='FondoDeAbout'>
        <div>
        <Link to={"/home"}><button id="BotonDeRegresar2">regresar</button></Link>
        </div>
        <div id='ConteinerAbout'>
            <div id='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias laborum iure facere! Necessitatibus, ea! Cumque at error voluptate odio explicabo ipsum atque, aspernatur fuga adipisci earum, nobis, fugiat qui.</div>
            <div ><img id='AboutImg' src="https://previews.123rf.com/images/azesm178/azesm1781608/azesm178160800018/62150744-dos-manos-sosteniendo-una-taza-de-caf%C3%A9-con-una-variedad-de-diferentes-tipos-contra-una-vista.jpg" alt="" /></div>
        </div>
    </div>
  )
}

export default About
