import React, { useState } from "react";
import './Busqueda.css'

function Busqueda(params){

  const [palabra, setPalabra]=useState("");

  const manejarCambio = e => {
    setPalabra(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    if(palabra){
      params.onSubmit(palabra);
      setPalabra('');
    }
  }

  return(
    <form className="contenedor-busqueda" onSubmit={manejarEnvio}>
      <input className="input-busqueda" type='text' placeholder="Ingresa una palabra" onChange={manejarCambio} value = {palabra}>
      </input>
      <button className="boton-busqueda">
        Buscar
      </button>
    </form>
  )

}

export default Busqueda;