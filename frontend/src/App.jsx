import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes, //Reemplaza el switch que se utilizaba en version anterior
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login"
import Registro from './components/Registro';
import ListadoOrdenes from './components/ListadoOrdenes';
import ActualizarOrdenes from './components/ActualizarOrdenes';
import CrearOrdenes from './components/CrearOrdenes';


function App() {  

  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/listado_ordenes" element={<ListadoOrdenes />} />
              <Route path="/crear_ordenes" element={<CrearOrdenes />} />
              <Route path="/actualizar_ordenes" element={<ActualizarOrdenes />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}
export default App