import iconoMaps from '../assets/optimizatedImages/imagenMaps.png';
import { motion } from "framer-motion";

const H1DireccionesMapa = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 2.5 } }}
                
            >
                <section className=''>
                    <article className=''>
                        <motion.div style={{ marginBottom: 20, display: 'flex', flexDirection: 'row', alignContent: 'center' }} whileHover={{ scale: 1.1, cursor: 'pointer' }} whileTap={{ scale: 0.8 }} >
                            <a
                                href='https://www.google.com.ar/maps/place/Av.+de+los+Incas+3152,+C1426ELO+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.5712075,-58.4616305,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5d9c75386ad:0x6d3394ae2eeb31ef!8m2!3d-34.5712119!4d-58.4590502?entry=ttu'
                                className=''>
                                AV LOS INCAS 3152, COLEGIALES CABA
                            </a>
                            <img className='' src={iconoMaps} alt='icono-maps' />
                        </motion.div>
                    </article>
                    <article className=''>
                        <motion.div style={{ marginBottom: 20, display: 'flex', flexDirection: 'row' }} whileHover={{ scale: 1.1, cursor: 'pointer' }} whileTap={{ scale: 0.8 }} >
                            <a href='https://www.google.com.ar/maps/place/Av.+Larraz%C3%A1bal+5146,+C1439+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6851579,-58.4610983,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccc03c1dfe429:0xcedf42c7384d709!8m2!3d-34.6851623!4d-58.458518?entry=ttu'
                                className=''
                            >
                                LARRAZABAL 5146, LUGANO, CABA
                            </a>
                            <img className='' src={iconoMaps} alt='icono-maps' />
                        </motion.div>
                    </article>
                </section>
            </motion.div>
        </>
    )
}

export default H1DireccionesMapa
