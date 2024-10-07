import { useState } from 'react';
import { motion } from "framer-motion"
import profesional from '../assets/images/imagenProfesional1.png';
import profesional2 from '../assets/images/imagenProfesional2.png';

const CarruselProfesionales = () => {

    const [indiceActual, setindiceActual] = useState(0);

    const handleNext = () => {
        const nextIndex = (indiceActual + 1) % 2;//Porque son 2 fotos
        setindiceActual(nextIndex);
    };

    const handlePrevious = () => {
        const previousIndex = (indiceActual - 1 + 2) % 2;
        setindiceActual(previousIndex);
    };


    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1}  }}
                viewport={{once:true}}
                className=''
            >
                <section className='flex flex-col text-center'>
                    <div id="carouselExampleControlsNoTouching" className="carousel slide md:w-100px" data-bs-touch="false">
                        <div className="carousel-inner flex">
                            <div className={`carousel-item ${indiceActual === 0 ? 'active' : ''}`}>
                                <img  src={profesional} className="w-[400px] mx-auto cursor-pointer" alt="profesional1" />
                            </div>
                            <div className={`carousel-item ${indiceActual === 1 ? 'active' : ''}`}>
                                <img  src={profesional2} className="w-[400px] mx-auto cursor-pointer" alt="profesional2" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" onClick={handlePrevious}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" onClick={handleNext}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <article className=''>
                        {indiceActual === 0 ?
                            <h1 className='font-[Oswald] text-black font-semibold mt-4 mb-8 xl:mb-8 text-base lg:text-lg'>DRA ALICIA HERNANDEZ<br />Cirujana.</h1>
                            :
                            <h1 className='font-[Oswald] text-black font-semibold mt-4 mb-8 xl:mb-8 text-base lg:text-lg'>DRA LAURA BREMMER<br />Lic Ciencias Dentales.</h1>
                        }
                    </article>
                </section>
            </motion.div>
        </>
    )
}

export default CarruselProfesionales
