import iconoIG from '../assets/optimizatedImages/imagenIg.png';
import iconoWp from '../assets/optimizatedImages/imagenWp.png';
import { motion } from "framer-motion";

const Footbar = () => {
    return (
        <>
            <section className='flex flex-row-reverse h-16 xl:h-24 bg-gradient-to-r from-green-700 to-green-200'>
                <motion.div style={{alignContent: 'center'}} whileHover={{ cursor: 'pointer' }} whileTap={{ scale: 0.8 }} >
                    <a href='#' className='font-[Oswald] text-base xl:text-[24px] mx-2 no-underline  text-green-700 hover:text-slate-100'>EXPERIENCIAS</a>
                </motion.div>
                <motion.div style={{alignContent: 'center'}} whileHover={{ cursor: 'pointer' }} whileTap={{ scale: 0.8 }} >
                    <a href='#' className='font-[Oswald] text-base xl:text-[24px] mx-2 no-underline  text-green-700 hover:text-slate-100'>TRATAMIENTOS</a>
                </motion.div>
            </section>
        </>
    )
}

export default Footbar
