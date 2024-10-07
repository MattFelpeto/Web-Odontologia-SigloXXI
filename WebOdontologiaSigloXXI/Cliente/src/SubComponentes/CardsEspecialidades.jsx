import radiografia from '../assets/optimizatedImages/imagenRadiografia.png';
import radiografiaSM from '../assets/images/radiografiaSM.png';
import protesis from '../assets/optimizatedImages/imagenProtesis.png';
import protesisSM from '../assets/images/imagenProtesisSM.png';
import consultas from '../assets/optimizatedImages/imagenConsulta.png';
import consultasSM from '../assets/images/imagenConsultaSM.png';
import extracciones from '../assets/optimizatedImages/imagenExtraccion.png';
import extraccionesSM from '../assets/images/imagenExtraccionesSM.png';
import blanqueamientos from '../assets/optimizatedImages/imagenBlanqueamiento.png';
import blanqueamientosSM from '../assets/images/imagenBlanqueamientoSM.png';
import implantes from '../assets/optimizatedImages/imagenImplante.png';
import implantesSM from '../assets/images/imagenImplanteSM.png';
import { motion } from "framer-motion";


const CardsEspecialidades = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.2} }}
        className=""
      >
        <section className='flex flex-col mb-8 sm:mb-16  sm:flex-row sm:mt-6'>
          <section className='flex-col mx-auto'>
            <article className='w-56 mt-6 mb-8 md:w-64 xl:w-96 mx-auto'>
              <motion.div className="" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <img  className='hidden sm:flex cursor-pointer sm:rounded-full' src={radiografia} />
                <img  className='sm:hidden cursor-pointer sm:rounded-full' src={radiografiaSM} />
              </motion.div>
              <footer className='hidden mb-4 text-center sm:flex sm:justify-center sm:mt-4'>
                <h1 className='font-[Oswald] text-2xl lg:mt-4'>Radiografías</h1>
              </footer>
            </article>
            <article className='w-56 mt-6 mb-8 md:w-64 xl:w-96'>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <img  className='hidden sm:flex cursor-pointer sm:rounded-full' src={protesis} />
                <img  className='sm:hidden cursor-pointer sm:rounded-full' src={protesisSM} />
              </motion.div>
              <footer className='hidden text-center sm:flex sm:justify-center sm:mt-4'>
              <h1 className='font-[Oswald] text-2xl lg:mt-4'>Protesis</h1>
              </footer>
            </article>
            <article className='w-56 mt-6 mb-8 md:w-64 xl:w-96'>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <img className='hidden sm:flex cursor-pointer sm:rounded-full' src={consultas} />
                <img className='sm:hidden cursor-pointer sm:rounded-full' src={consultasSM} />
              </motion.div>
              <footer className='hidden text-center sm:flex sm:justify-center sm:mt-4'>
              <h1 className='font-[Oswald] text-2xl lg:mt-4'>Consultas</h1>
              </footer>
            </article>
          </section>
          <section className='flex-col mx-auto lg:flex-row'>
            <article className='w-56 mt-6 mb-8 md:w-64 xl:w-96'>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <img className='hidden sm:flex cursor-pointer sm:rounded-full' src={extracciones} />
                <img className='sm:hidden cursor-pointer sm:rounded-full' src={extraccionesSM} />
              </motion.div>
              <footer className='hidden text-center sm:flex sm:justify-center sm:mt-4'>
              <h1 className='font-[Oswald] text-2xl lg:mt-4'>Extracciones</h1>
              </footer>
            </article>
            <article className='w-56 mt-6 mb-8 md:w-64 xl:w-96'>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <img  className='hidden sm:flex cursor-pointer sm:rounded-full' src={blanqueamientos} />
                <img  className='sm:hidden cursor-pointer sm:rounded-full' src={blanqueamientosSM} />
              </motion.div>
              <footer className='hidden text-center sm:flex sm:justify-center sm:mt-4'>
              <h1 className='font-[Oswald] text-2xl lg:mt-4'>Blanqueamientos</h1>
              </footer>
            </article>
            <article className='w-56 mt-6 mb-8 md:w-64 xl:w-96'>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <img  className='hidden sm:flex cursor-pointer sm:rounded-full' src={implantes} />
                <img  className='sm:hidden cursor-pointer sm:rounded-full' src={implantesSM} />
              </motion.div>
              <footer className='hidden text-center sm:flex sm:justify-center sm:mt-4'>
              <h1 className='font-[Oswald] text-2xl lg:mt-4'>Implantes</h1>
              </footer>
            </article>
          </section>
        </section>
      </motion.div>
    </>
  )
}

export default CardsEspecialidades
