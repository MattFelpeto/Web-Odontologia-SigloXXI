/*
El componente debe recolectar los datos del usuario y llevarlos a la base de datos para ser almacenados. 

Hay que evaluar como tratar los datos del turno una vez cumplida la fecha del mismo para economizar
espacio en la base de datos. De todas formas también es una buena idea almacenar todos los turnos de los pacientes 
para un historial.

Enviar al mail del usuario una confirmación del turno (buscar libreria apta para esto)

Evaluar la posibilidad de que si el usuario se atiende con prepaga, el input donde se 
ingresa esa info sea a través de un slider.

La turnera debe mostrar las fechas disponibles de acuerdo al medico que se elija, por lo tanto
es posible necesitar que la info del medico sea a elección estilo slider y según eso, la info que 
muestre los turnos disponibles. De la misma forma 

INVESTIGAR LIBRERIAS ZOD Y YUP PARA FORMS

*/

import { useForm } from 'react-hook-form';
import logo from '../assets/images/logoPrincipal3.png';
import { motion } from "framer-motion";
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { crearTurnos } from '../api/apiTurnos';
import CardUltimosTurnos from '../SubComponentes/CardUltimosTurnos';

dayjs.locale("es");

const Turnera = () => {

    const localizer = dayjsLocalizer(dayjs)

    const { 
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = handleSubmit( async (data) => {
        try {
            const res = await crearTurnos(data);
        } catch (error) {
            console.log(error)
        }
        console.log(data)
    })

    return (
        <>
            <section className='flex flex-col w-[650px] mt-4 mx-auto border shadow-lg'>
                <section className='flex flex-col mt-2'>
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
                        <img src={logo} className='w-24 h-24 mx-auto' />
                    </motion.div>
                    <hr className='w-3/4 mx-auto' />
                </section>
                <form className='flex flex-col mt-2' onSubmit={onSubmit}>
                    <div className='flex flex-row mx-auto'>
                        <article className='flex flex-col text-start mx-2 my-2'>
                            <label className='font-[Oswald]'>Nombre</label>
                            <input type="text" id='' className='font-[Oswald] h-8 outline-0 rounded-lg shadow-md bg-gray-100'
                                {...register("nombre",
                                    {
                                        required: {
                                            value: true,
                                            message: "El nombre es requerido"
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Debe tener al menos 2 caracteres"
                                        },
                                        maxLength: 23,
                                    }
                                )}
                            />
                            {
                                errors.nombre && <span className='text-[9px] mt-1 text-red-500'  >{errors.nombre.message}</span>
                            }
                        </article>
                        <article className='flex flex-col text-start mx-2 my-2'>
                            <label className="font-[Oswald]">Apellido</label>
                            <input type="text" id='' className='font-[Oswald] h-8 outline-0 rounded-lg shadow-md bg-gray-100'
                                {...register("apellido",
                                    {
                                        required: {
                                            value: true,
                                            message: "El apellido es requerido"
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Debe tener al menos 2 caracteres"
                                        },
                                        maxLength: {
                                            value: 23,
                                            message: "Maximo 23 caracteres"
                                        }
                                    })}
                            />
                            {
                                errors.apellido && <span className='text-[9px] mt-1 text-red-500' >{errors.apellido.message}</span>
                            }
                        </article>
                        <article className='flex flex-col text-start mx-2 my-2'>
                            <label className='font-[Oswald]'>DNI</label>
                            <input type="number" id='' className='font-[Oswald] h-8 outline-0 rounded-lg shadow-md bg-gray-100'
                                {...register("DNI")}
                            />
                        </article>
                    </div>
                    <div className='flex flex-row mx-auto'>
                        <article className='w-[230px] flex flex-col text-start mx-2 my-2'>
                            <label className='font-[Oswald]'>Mail</label>
                            <input type="email" className='font-[Oswald] h-8 outline-0 rounded-lg shadow-md bg-gray-100'
                                {...register("mail", {
                                    required: {
                                        value: true,
                                        message: "Mail requerido"
                                    },
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9+·-]+\.[a-z]{2,4}$/,
                                        message: "Mail no válido"
                                    }
                                })}
                            />
                            {
                                errors.mail && <span className='text-[9px] mt-1 text-red-500' >{errors.mail.message}</span>
                            }
                        </article>
                        <article className='w-[230px] flex flex-col text-start mx-2 my-2'>
                            <label className="font-[Oswald]">Teléfono</label>
                            <input type="number" id='' className='font-[Oswald] h-8 outline-0 rounded-md shadow-md bg-gray-100'
                                {...register("telefono", {
                                    value: true,
                                    message: "Teléfono requerido",
                                    minLength: 8,
                                    maxLength: 10,
                                })}
                            />
                            {
                                errors.telefono && <span className='text-[9px] mt-1 text-red-500' >{errors.telefono.message}</span>
                            }
                        </article>
                    </div>
                    <div className='flex flex-row mx-auto'>
                        <article className='w-full flex flex-row'>
                            <div className='flex flex-col text-start mx-2 my-auto'>
                                <label className="font-[Oswald]">Especialidades</label>
                                <select className='font-[Oswald] w-[230px] h-8 outline-0 rounded-lg bg-gray-100 shadow-md cursor-pointer'
                                    {...register("Especialidad")}
                                >
                                    <option value='' className='font-[Oswald] bg-gray-100'>Elige una opción</option>
                                    <option value='ConsulGen' className='font-[Oswald] bg-gray-100'>Consulta General</option>
                                    <option value='Extracc' className='font-[Oswald] bg-gray-100'>Extracciones</option>
                                    <option value='Radiog' className='font-[Oswald] bg-gray-100'>Radiografias</option>
                                    <option value='Blanq' className='font-[Oswald] bg-gray-100'>Blanqueamiento</option>
                                    <option value='Impl' className='font-[Oswald] bg-gray-100'>Implantes</option>
                                    <option value='Prot' className='font-[Oswald] bg-gray-100'>Protesis</option>
                                </select>
                                </div>
                            <div className='flex flex-col text-start mx-2'>
                                <label className="font-[Oswald]">Fecha</label>
                                <input className='font-[Oswald] text-center my-auto w-[230px] h-8 outline-0 rounded-md shadow-md bg-gray-100' type="date"
                                {...register('fecha')}/>
                            </div>
                        </article>
                    </div>
                    <div className='flex mx-auto my-auto mt-4 mb-4'>
                        <button className='font-[Oswald] w-32 bg-green-300 rounded-lg hover:bg-green-500'>Agendar Turno</button>
                    </div>
                </form>
            </section>
            <section>
                <CardUltimosTurnos/>                
            </section>
        </>
    )
}



export default Turnera
