import { motion } from "framer-motion";

const TextoProfesionales = () => {


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2} }}
        viewport={{once:true}}
      >
        <section className='text-center mt-4'>
          <h1 className='font-[Oswald] text-3xl sm:mt-16 sm:text-5xl xl:text-6xl xl:mb-12 text-zinc-950 font-extrabold'>¡CONOCÉ A NUESTROS <br /> PROFESIONALES!</h1>
        </section>
      </motion.div>
    </>
  )
}

export default TextoProfesionales

