

import React from "react";
import '../CSS/detallesUser.css'
import Copiar from "./Copiar";
import marcagua from "../multimedia/marcagua.png"

export default function UserDetail ({items:{id, nombre, category, fotos,videos,ubicacion, wp, portada, descripcion}}){

    return(
        

        <div className="contenedorUserDetail">

            <div className="contenedorDetail" >
                <ul >
                    <h2>{nombre}</h2>
                    <li>{ubicacion} </li>
                    <li>{wp} <Copiar toCopy={wp}/> </li>
                    <br></br>
                    <li> Descripcion: <br></br>
                        {
                            descripcion?.map(parrafo=>(
                                <p key={parrafo.toString()} className={`parrafo${descripcion.indexOf(parrafo)}`}> {parrafo}</p>
                            ))
                        }
                    </li> 

                </ul>

            </div>
            <div className="imgContainer">

                {
                    videos?.map(video=>(
                        <div className="marco">
                            <video src={video} key={video.toString()} className="videoDetail" alt="video de escort" controls></video>
                        </div>  
                    ))
                }
                {
                    fotos?.map(foto=>(
                        <div className="marco">
                            <img src={foto} key={foto.toString()} className="imgDetail" alt="fotos de escorts"></img>
                            <img className="marcaDeAgua" src={marcagua} width="200px"></img>

                        </div>  
                    ))
                }
            </div>
            <br></br>
        </div>
    )

}