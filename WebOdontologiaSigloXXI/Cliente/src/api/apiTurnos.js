
import axios from 'axios';

const turnosApi = axios.create({
    baseURL: 'http://localhost:8000/DataBase/apiTurnos/DataBase/'
})

export const getallTurnos = () => turnosApi.get('/');
export const crearTurnos = (turno) => turnosApi.post('/', turno);




