import React from 'react'
import video from '../multimedia/presentacionLogo.mp4'

export default function Welcome() {
    const cerrar=()=>{
        let multimedia= document.querySelector(".videoContainer")
        multimedia.style.display="none"
    }
  return (
    <div className='videoContainer'>
        <button className='btnCierre' onClick={cerrar}>X Cerrar</button>
        <video src={video} autoPlay controls muted style={{width:"99vw"}}></video>
    </div>
  )
}
