import './App.css';
import React, { useState } from 'react';
import Busqueda from './components/Busqueda';
import ListaDefiniciones from './components/ListaDefiniciones';
import wait from './components/waitgif.webp';
import logo from './components/logo.png';

function App() {

  const [palabra, setPalabra]=useState("");
  
  const [definiciones, setDefinciones] = useState([])

  const [ocultar, setOcultar] = useState(true)

  const [sinrespuesta, setSinrespuesta] = useState(false)
  
  const buscarPalabra = pal =>{
    setPalabra(pal)
    setOcultar(false)
    setSinrespuesta(false)
    const fetchPalabra = async ()=>{
      try {
        const response = await fetch(`rae-api/${pal}`)
        const json = await response.json()
        setDefinciones(json)
        setOcultar(true)
        if (json.code){
          setSinrespuesta(true)
        }
        
      }catch(error){
        console.log("error", error)
      }
    }
    fetchPalabra();
  }
  
  
  
  
  
  return (
    <div className="App">
      <header>
        <img alt="logo" src={logo} height={30} /> 
        <h1>Buscador RAE</h1>
      </header>
    
      <Busqueda onSubmit={buscarPalabra}/> 
      {
        definiciones.length > 0 ? <h2 className= { !ocultar ? 'hide': ''}>Búsqueda de la palabra {palabra}</h2> : null
      }
      <img alt="wait" className= { ocultar ? 'wait hide': ' wait'} width={50} src={wait}/> 
      <div className= { !ocultar ? 'hide': ''}>
      { 
        definiciones.length > 0 ?  definiciones.map( (defi,ind) => <ListaDefiniciones className="diferentes-definiciones" definiciones={defi} key={ind} />  )  : null
      }
      </div>
    <p className= { sinrespuesta ? 'mensaje': 'hide'}>
      No se obtuvieron resultados.<br></br> Revisa la ortografía y vuelve a intentarlo.
    </p>
    
      
    </div>
      );
    }
    
    
    export default App;
    