import React, { useEffect, useState } from 'react'
import { getallTurnos } from '../api/apiTurnos';

const CardUltimosTurnos = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function mostrarTurnos() {
            const res = await getallTurnos();
            setInfo(res.data);
        }
        mostrarTurnos();
    }, []);

    return (
        <>
            <section className='flex mt-4 w-[400px] justify-cente shadow-xl mx-auto'>
                <article className='w-full flex-col'>
                    <div className='flex bg-gradient-to-r from-green-300 to-green-600'>
                        <h1 className='font-[Oswald] text-xl mx-auto my-auto'>PACIENTES RECIENTES</h1>
                    </div>
                    <div className='flex text-center justify-center'>
                        {info.length > 0 ? (
                            <div className='flex flex-col'>
                                {info.map((turno) => (
                                    <div className='text-center' key={turno.id}>
                                        <h2 className='font-[Oswald] text-lg'>En DataBase: {turno.nombre} {turno.apellido}</h2>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className='mx-auto my-auto'>Cargando turnos...</p>
                        )}
                    </div>
                </article>
            </section>
        </>
    )
}

export default CardUltimosTurnos
