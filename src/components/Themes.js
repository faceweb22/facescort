import React from 'react'
import '../CSS/themes.css'
import sun from '../multimedia/sun.svg'
import moon from '../multimedia/moon.svg'


export default function Themes() {
    const btnSwitch= document.querySelector("#switch")
    const menu= document.querySelector(".logo")
    // btnSwitch.addEventListener()
    const cambiar=()=>{
        document.body.classList.toggle("dark")
        btnSwitch.classList.toggle("active")
        menu.style.backgroundColor="rgb(247, 73, 233)"

    }

  return (
    <div className='themeContainer'>
        <button className='switch' id='switch'onClick={cambiar}>
            <span>
                <img id='iconSun' src={sun} alt="icono de sol"></img>
            </span>
            <span>
                <img id='iconSun' src={moon} alt="icono de luna"></img>
            </span>
        </button>
    </div>
  )
}
