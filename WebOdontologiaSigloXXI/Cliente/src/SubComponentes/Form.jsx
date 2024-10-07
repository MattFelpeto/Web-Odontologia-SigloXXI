import { motion } from "framer-motion";
import consultorio from '../assets/images/imagenConsultorio.png';

const Formulario = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                className="motionDivForm"
                whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
                viewport={{ once: true }}

            >
                <div className='flex flex-col sm:flex-row md:justify-between' >
                    <section className='md:mx-auto'>
                        <form className='md:flex md:flex-col'>
                            <div className=''>
                            <article className='flex flex-col sm:flex-row text-center sm:mb-12'>
                                <article className='flex flex-col rounded-lg mx-auto w-64 sm:w-72 md:w-60 lg:w-[300px] xl:w-[400px]'>
                                    <label className='font-[Oswald] mb-2 sm:text-lg xl:text-2xl'>Nombre:</label>
                                    <input type="text" id='' className='sm:mx-8 lg:text-2xl text-center outline-0 font-[Oswald] h-9 sm:h-12 md:mb-4 rounded-xl shadow-md bg-gray-100' />
                                    <label className='font-[Oswald] mb-2 sm:text-lg  xl:text-2xl'>Apellido:</label>
                                    <input type="text" id='' className='text-center lg:text-2xl sm:mx-8 outline-0 bg-gray-100 h-9 sm:h-12 shadow-md rounded-xl font-[Oswald]' />
                                </article>
                                <article className='flex flex-col rounded-lg mx-auto w-64 sm:w-72 md:w-60 lg:w-[300px]  xl:w-[400px]'>
                                    <label className='font-[Oswald] mb-2 sm:text-lg  xl:text-2xl'>Mail:</label>
                                    <input type="text" id='' className='sm:mx-8 lg:text-2xl text-center md:mb-4 outline-0 font-[Oswald] h-9 sm:h-12 shadow-md rounded-xl bg-gray-100' />
                                    <label className='font-[Oswald] mb-2 sm:text-lg  xl:text-2xl'>Prepaga:</label>
                                    <input type="text" id='' className='sm:mx-8 lg:text-2xl text-center outline-0 bg-gray-100 font-[Oswald] h-9 sm:h-12 shadow-md rounded-xl' />
                                </article>
                            </article>
                            <article className='flex flex-col text-center mt-4'>
                                <label className='font-[Oswald] md:text-xl  xl:text-3xl'>Dejanos tu mensaje acá:</label>
                                <input type="text" id='' className='font-[Oswald] lg:text-3xl text-center rounded-xl outline-0 bg-gray-200 mx-auto shadow-xl h-24 mt-2 w-64 sm:w-[500px] sm:h-36 md:w-[300px] lg:w-[500px]' />
                            </article>
                            <article className='text-center mt-4'>
                                <button type='submit' className='w-14 sm:w-24 md:w-32 md:h-8 lg:w-40 lg:h-10 lg:text-2xl font-[Oswald] rounded-md bg-gradient-to-r from-green-700 to-green-200 hover:bg-slate-800' >Enviar</button>
                            </article>
                            </div>
                        </form>
                    </section>
                    <section className='md:flex mx-auto'>
                        <img loading='lazy' src={consultorio} alt='foto-consultorio' className='hidden shadow-lg md:flex md:h-[500px] md:w-[300px] lg:w-[400px] md:mr-12' />
                    </section>
                </div>
            </motion.div>
        </>
    )
}

export default Formulario
