
import React from "react";
import { Link } from "react-router-dom";


export default function User({user:{id, nombre, category,ubicacion, wp, portada, descripcion}}){

    return( 
        <>
        <ul className="tarjetas">
            <Link to= {`/${nombre}-${id}-${wp}`} >
                <li className="cardImgContainer"> <img src= {portada} className="tarjetas-img" alt="portada"/></li>
                <li className="detallesCard">{nombre} </li>
                <li className="detallesCard">{wp}</li>
            </Link> 

        </ul>
        </>
    )
}