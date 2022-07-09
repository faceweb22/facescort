import React from 'react'
import '../CSS/contacto.css'
// import { v4 as uuidv4 } from 'uuid'
import Copiar from './Copiar'
import wp from '../multimedia/wp.svg'
import Welcome from "./Welcome";



export default function Contacto() {
    const wpContacto= "1125665213"
    
  return (
    <div className='contactoContainer'>
        <Welcome/>
        <h2 className='subtitulo'>Publica tu perfil</h2>    

        <div className='contacto'>
            <p>
                Si deseas publicar tu perfil dejanos un mensaje via Whatsapp:
                <br></br> 
                <img src={wp} className="iconoWp" alt='logo de whatapp'></img> <br></br>
                <span id='copiarWp'>11-2566-5213</span> 
                <br></br>
                <Copiar toCopy={wpContacto}/>

            </p>
        </div>
     

    </div>
  )
}

