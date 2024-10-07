import './Maquetado.css';
//import './maquetadoPrueba.css';
import logo from './logoPrincipal2.png';
import banner from './bannerPrincipal1.png';
//import radiografia from './imagenRadiografia.png';
//import protesis from './imagenProtesis.png';
//import consulta from './imagenConsulta.png';
//import extraccion from './imagenExtraccion.png';
//import blanqueamiento from './imagenBlanqueamiento.png';
//import implante from './imagenImplante.png';
import profesional from './imagenProfesional.png';
import mapa from './imagenMapa.png';
import iconoWp from './imagenWp.png';
import imagenIG from './imagenIg.png';
import MapaSedes from './MapsOdont';




const Maquetado = () => {
  return (
    <>
      <div className="contenedorPrincipal">
        <nav className='Navbar'>
          <ul className='navbar_ul'>
            <a href='#' className='a_ul'>Contactanos</a>
            <a href='#' className='a_ul'>TURNOS</a>
            <a href='#' className='a_ul'>Nuestros profesionales</a>
          </ul>
        </nav>
        <img src={logo} alt='Odontologia sigloxxI' className='navbar_image' />
        <section className='contenedorPrincipal_banner'>
          <img src={banner} alt='foto-tratamientos' className='banner_image' />
          <hr className='hr' />
        </section>
        <h1 className='contenedorPrincipal_h1Cards'>NUESTRAS ESPECIALIDADES</h1>
        <section className='seccionCards'>
          <article className='seccionCards_Cards'>
            <img className='Cards_imageRadio'/>
            <footer className='Cards_footer'>
              <p className='Cards_p'>Radiografías</p>
            </footer>
          </article>
          <article className='seccionCards_Cards'>
            <img className='Cards_imageProtesis'/>
            <footer className='Cards_footer'>
              <p className='Cards_p'>Prótesis</p>
            </footer>
          </article>
          <article className='seccionCards_Cards'>
            <img className='Cards_imageConsulta'/>
            <footer className='Cards_footer'>
              <p className='Cards_p'>Consultas</p>
            </footer>
          </article>
        </section>
        <section className='seccionCards'>
          <article className='seccionCards_Cards'>
            <img className='Cards_imageExtraccion'/>
            <footer className='Cards_footer'>
              <p className='Cards_p'>Extracciones</p>
            </footer>
          </article>
          <article className='seccionCards_Cards'>
            < img className='Cards_imageBlanqueamiento'/>
            <footer className='Cards_footer'>
              <p className='Cards_p'>Blanqueamiento</p>
            </footer>
          </article>
          <article className='seccionCards_Cards'>
            <img className='Cards_imageImplante'/>
            <footer className='Cards_footer'>
              <p className='Cards_p'>Implantes</p>
            </footer>
          </article>
        </section>
        <hr className='hr' />
        <section className='contenedorCard'>
          <article className='cardDentista'>
            <div className='cardDentista_Card'>
              <header>
                <img src={profesional} alt='Profesional' className='cardDentista_imagen' />
              </header>
              <p className='cardDentista_texto'>DRA. LAURA ARIAS <br />Lienciada en <br />Ciencias Dentales.</p>
            </div>
          </article>
          <article className='cardDentistaTexto'>
            <p className='cardDentista_textoSolo'>¡CONOCE A LOS <br />PROFESIONALES!</p>
          </article>
        </section>
        <hr className='hr' />
        <section className='contenedorTextoForm'>
          <h1 className='contenedorTextoForm_texto'>¡TODAS TUS CONSULTAS SON BIENVENIDAS!</h1>
        </section>
      <section className='contenedorFormulario'>
        <form className='formulario'>
        <article className='formulario_primeraColumna'>
          <label className="primeraColumna_label">Nombre</label>
          <input type="text" id="primeraColumna_input" />
          <label className="primeraColumna_label">Apellido</label>          
          <input type="text" id="primeraColumna_input"/>
          <label className="primeraColumna_label">Mail</label>
          <input type="text" id="primeraColumna_input"/>
        </article>
        <article className='formulario_segundaColumna'>
          <label className="segundaColumna_label">Dejanos tu mensaje acá:</label>
          <input type="text" id="segundaColumna_input"/>
          <button className='segundaColumna_boton' type='submit'>Enviar</button>
        </article>
        </form>
      </section>
      <section className='contenedorMapa'>
        <article className='ContenedorMapa_imagen'>
          <MapaSedes/>
        </article>
        <article className='contenedorMapa_direcciones'>
          <h2 className='direcciones_sucursales'>AV LOS INCAS 3152, COLEGIALES CABA.</h2>
          <h2 className='direcciones_sucursales'>LARRAZABAL 5146, LUGANO, CABA.</h2>
        </article>
      </section>
      <section className='footbar'>
          <a href='#' className='footbar_a'>EXPERIENCIAS</a>
          <a href='#' className='footbar_a'>TRATAMIENTOS</a>
          <img src={imagenIG} alt='Instagram' className='footbar_imgIG'/>
          <img src={iconoWp} alt='WhatsApp' className='footbar_imgWP'/>
        </section>
      </div>
    </>
  )
}

export default Maquetado;

