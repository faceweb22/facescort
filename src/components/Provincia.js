import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../multimedia/logo.png'

export default function Provincia() {
  return (
    <div className='main'>

        <h1 className='logo logoInitial'>
            <Link to="/"> 
                <div className='logoContainer'>
                    <img src={logo} width="200px" alt='logo'></img>
                </div>
            </Link>
        </h1>
        <br></br>
        <b className='parrafoPrincipal'>Placer, masajes, cariño, mujeres sexys, milfs y toda clase de compañia que necesites!</b> 
        <br></br>
        <h2>Seleccione una provincia</h2>
        <div className='provContainer'>

            <Link to="/buenos-aires">
                <div className='provincias'>
                    Buenos Aires
                </div>
            </Link>
            <Link to="#">
                <div className='provincias'>
                    Proximamente mas provincias...
                </div>
            </Link>
        </div>
        
    
    </div>
  )
}