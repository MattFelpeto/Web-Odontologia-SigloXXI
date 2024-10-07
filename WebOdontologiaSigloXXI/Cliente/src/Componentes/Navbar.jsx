import menuHamburguesa from '../assets/images/menuHamburguesa2.png';
import logo from '../assets/images/logoPrincipal3.png';
import { motion } from "framer-motion";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickMenuLateral = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuLateral = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <>
            <nav className={`fixed md:hidden bg-gradient-to-r from-green-700 to-green-200 inset-y-0 left-0 w-full h-64 z-50 overflow-y-auto transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <section className='flex flex-col'>                    
                    <ul className='flex flex-col mx-auto mt-12'>
                        <a href='#' className='font-[Oswald] no-underline text-3xl text-green-700 hover:text-slate-100'>Contactanos</a>
                        <NavLink to="/turnos" className='font-[Oswald] ml-8 no-underline text-3xl  text-green-700 hover:text-slate-100'>Turnos</NavLink>
                        <a href='#' className='font-[Oswald] no-underline text-3xl text-green-100 hover:text-slate-700'>Profesionales</a>
                        <button className='w-32 ml-2 text-md font-semibold bg-transparent mt-8' onClick={closeMenuLateral}>Cerrar X</button>
                    </ul>
                </section>
            </nav>
            <nav className='flex h-20 justify-between sm:h-18 xl:h-28 bg-gradient-to-r from-green-700 to-green-200'>
                <motion.div
                    className="box"
                    animate={{
                        scale: [0.1, 0, 2, 0, 1],
                        rotate: [0, 10, 0, 0],
                        borderRadius: ["0%", "0%", "10%", "10%", "0%"]
                    }}

                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1
                    }}>
                    <img src={logo} alt='Odontologia sigloxxI' className='h-20 w-20 rounded-full xl:h-28 xl:w-28' />
                </motion.div>
                <picture className='h-16 w-16 my-auto'>
                    <img src={menuHamburguesa} onClick={clickMenuLateral} alt='Odontologia sigloxxI' className='sm:hidden' />
                </picture>
                <ul className='hidden sm:flex sm:mr-6 sm:my-auto'>
                    <NavLink to="#" className='font-[Oswald] mx-2 no-underline text-2xl xl:text-3xl text-green-700 hover:text-slate-100'>Contactanos</NavLink>
                    <NavLink to="/turnos" className='font-[Oswald] mx-2 no-underline text-2xl xl:text-3xl text-green-700 hover:text-slate-100'>Turnos</NavLink>
                    <a href='#' className='font-[Oswald] mx-2 no-underline text-2xl xl:text-3xl text-green-700 hover:text-slate-100'>Profesionales</a>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
