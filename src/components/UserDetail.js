

import React from "react";
import '../CSS/detallesUser.css'
import Copiar from "./Copiar";
import marcagua from "../multimedia/marcagua.png"

export default function UserDetail ({items:{id, nombre, category, fotos, wp, portada, descripcion}}){

    return(
        

        <div className="contenedorUserDetail">

            <div className="contenedorDetail" >
                <ul >
                    <h2>{nombre}</h2>
                    <li>{wp} <Copiar toCopy={wp}/> </li>
                    <li>{descripcion}</li>

                </ul>

            </div>
            <div className="imgContainer">
                <div className="marco">
                    <img src={portada} className="imgDetail" alt="image"/>
                    {/* <img className="marcaDeAgua" src={marcagua} width="200px"></img> */}

                </div>

                {
                    fotos?.map(foto=>(
                        <div className="marco">
                            <img src={foto} key={foto.toString()} className="imgDetail" alt="image"></img>
                            {/* <img className="marcaDeAgua" src={marcagua} width="200px"></img> */}

                        </div>  
                    ))
                }
            </div>
            <br></br>
        </div>
    )

}