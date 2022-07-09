import React, { useState } from 'react'
import '../CSS/themes.css'
import sun from '../multimedia/sun.svg'
import moon from '../multimedia/moon.svg'


export default function Themes() {
    const [tema, setTema]= useState(true)
    const btnSwitch= document.querySelector("#switch")
    const cambiar=()=>{
        document.body.classList.toggle("dark")
        btnSwitch.classList.toggle("active")
        setTema(!tema)
    }
    console.log("tema",tema)
  return (
    <div className='themeContainer'>
        <button className='switch' id='switch'onClick={cambiar}>
            {tema==true &&(

                <span>
                    <img id='iconSun' src={moon} alt="icono de luna"></img>
                </span>
                ) 
            }
            {tema==false &&(
                <span>
                    <img id='iconSun' src={sun} alt="icono de sol"></img>
                </span>

            )}


        </button>
    </div>
  )
}
