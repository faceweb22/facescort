import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../multimedia/logo.png'
import Terminos from './Terminos'

export default function Provincia() {
    const verificacion=()=>{
        // let body= document.querySelector("body")
        let verificadorEdad=document.querySelector("#terminosContainer")  
        verificadorEdad.style.display="block"
    }
    
  return (
    <div className='main' id='main'>

        <h1 className='logo logoInitial'>
            <Link to="/"> 
                <div className='logoContainer'>
                    <img src={logo} width="200px" alt='logo'></img>
                </div>
            </Link>
        </h1>
        <br></br>
        <b className='parrafoPrincipal'>Placer, masajes, cariño, mujeres escort, milfs y toda clase de compañia que necesites!</b> 
        <br></br>
        <h2 id='seleccion'>Seleccione una provincia</h2>
        <div className='provContainer'>
            
            {/* <Link to="/buenos-aires"> */}
                <div className='provincias' onClick={verificacion}>
                    Buenos Aires
                </div>
            {/* </Link> */}
            <Link to="#">
                <div className='provincias'>
                    Proximamente mas provincias...
                </div>
            </Link>
            <Terminos/>
        </div>
        
    
    </div>
  )
}
