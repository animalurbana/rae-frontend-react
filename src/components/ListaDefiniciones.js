import React from "react";
import "./ListaDefiniciones.css";
import copyicon from "./copyicon.svg"


function ListaDefiniciones(params){


  const titulo = params.definiciones.header
  const etimologia = params.definiciones.source

  const definiciones = params.definiciones.definition

  const copy = e => {
    const aCopiar = definiciones[e.target.id]
    if(window.isSecureContext){
      navigator.clipboard.writeText(aCopiar);
      alert("texto copiado")
    }else{
      console.log(e.target.parentElement)
    }
    
    
    
  }
  
  

  return(
    <div className="lista-definiciones-contenedor">
      <h3>{titulo}</h3>
      <p className="etimologia"> {etimologia} </p>
      <div className="lista-definiciones">
      {
        definiciones.map( (defi,ind, defs) => <p  key={ind}  className= {defs.length - 1 === ind ? "definicion last" :  "definicion"}> {defi} <button className="icon" key={ind} id={ind} onClick={copy}> <img key={ind}  id={ind} alt="bu" width={18} src={copyicon} /> </button></p>   )
      }
      </div>
    </div>
  )
}

export default ListaDefiniciones;