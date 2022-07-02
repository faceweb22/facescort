
import UserDetail from "./UserDetail";
import { data } from "./Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import toast, { Toaster } from 'react-hot-toast';



export default function UserDetailContainer(){
    const {id}= useParams()
   const [items,setItems]= useState([])
  useEffect(()=>{
      var promesa= new Promise((resolve,reject)=>{
          
          setTimeout(()=>{
              resolve(data)
          },0)
      })
      promesa.then((respuesta)=>{
          const encontrado=respuesta.find(item=> item.id===id)
          setItems(encontrado)
      
      }).catch((error)=>{
          console.log(error)
      })
    //   toast.promise(promesa,

    //     {
    //         loading:"loading...",
    //         // success: <b></b>,
    //         error: <b>ERROR</b>
    //     }
    //   )
  },[id])

    return(
        <>

        <div className="catalogo">
            <Toaster/>
          <UserDetail items={items}  />
        </div>

        </>
    )
}