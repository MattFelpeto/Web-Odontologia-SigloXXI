import logo from '../assets/optimizatedImages/logoPrincipal2.png';
import CarruselPrincipal from '../SubComponentes/CarruselPrincipal';
import TituloEspecialidades from '../SubComponentes/TituloEspecialidades';
import CardsEspecialidades from '../SubComponentes/CardsEspecialidades';
import CarruselProfesionales from '../SubComponentes/CarruselProfesionales';
import TextoProfesionales from '../SubComponentes/H1profesionales';
import H1TituloForm from '../SubComponentes/H1TituloForm';
import Formulario from '../SubComponentes/Form';
import H1DireccionesMapa from '../SubComponentes/H1DireccionesMapa';
import Footbar from '../SubComponentes/FootBar';
import whatsapp from '../assets/images/imagenWpVerde.png';

const PaginaPrincipal = () => {

    return (
        <>
            <section className="flex flex-col align-middle">
                <div className='flex justify-end'>
                    <img className='w-16 h-16 xl:w-20 hover:xl:w-24 hover:xl:h-24 xl:h-20 p-1 bg-slate-50 rounded-full shadow-xl fixed mt-24 mr-4 z-50  hover:cursor-pointer hover:w-20 hover:h-20' src={whatsapp} alt='link-a-whatsapp' />
                </div>
                <CarruselPrincipal />
                <div className='flex justify-center mt-8 sm:mt-6 md:mt-20 lg:mt-12 '>
                    <hr className=' text-black font-bold w-60 mt-8 sm:w-[600px] sm:mt-8 md:mt-12 md:mb-12 lg:mb-20 lg:mt-14 2xl:hidden' />
                </div>
                <TituloEspecialidades />
                <CardsEspecialidades />
                <div className='flex flex-col mb-8 lg:flex-row-reverse lg:justify-between mt-4 text-center bg-gradient-to-r from-green-500 to-green-50'>
                    <article className='mx-auto my-auto'>
                        <TextoProfesionales />
                    </article>
                    <article className='mx-auto'>
                        <CarruselProfesionales />
                    </article>
                </div>
                <div className='flex flex-col mt-4'>
                    <article className='mx-auto mb-8 md:mb-16 md:mt-8 xl:mb-20 xl:mt-12'>
                        <H1TituloForm />
                    </article>
                    <article className=''>
                        <Formulario />
                    </article>
                </div>
                <div className='flex flex-col mt-12 xl:mt-20'>
                    <article className=''>
                        <Footbar />
                    </article>
                </div>             
            </section>
        </>
    )
}

export default PaginaPrincipal
