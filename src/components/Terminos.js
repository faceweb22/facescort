import React from 'react'
import { Link } from 'react-router-dom'

export default function Terminos() {
    const escapar=()=>{
        // $("#main").css({display:"none"})
        let ocultar= document.querySelector("#btnBox")
        let denegado= document.querySelector(".terminos")
        ocultar.style.display="none"
        denegado.innerHTML="ACCESO DENEGADO!"

    }
  return (
    <div className='terminosContainer' id='terminosContainer'>
            {/* <button className='btnCerrar'>X</button> */}
        <div className='terminosContainer2'>
            <div>
                <h3 className='terminos'> Este sitio tiene contenido exclusivo para adultos, si sos menor de 18 años debes abandonar este sitio</h3>
                <br></br>
                <div id='btnBox'>
                    <button className='btn btnTerminos'>
                        <Link to="/buenos-aires">Soy mayor</Link>
                    </button>
                    <button className='btn btnTerminos' onClick={escapar}>Soy menor</button>
                </div>

            </div>
        </div>
    </div>
  )
}
