import { Routes, Route } from 'react-router';
import WebComponents from "./Componentes/WebComponents";
import Turnera from './Componentes/Turnera';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<WebComponents />}></Route>
        <Route path='/turnos' element={<Turnera />}></Route>
      </Routes>
    </>
  )
}

export default App
