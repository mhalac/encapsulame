"use client"

import { useState } from "react";


export default function Create_Capsule() {
    function enviar() {
        console.log("Hello world!")
    }
    const [props,updateProps] = useState({
        titulo:'',
        texto:''
    });    
    
    return (
    <div className="w-[88vw] h-[92vh] bg-black">
      <div className="flex justify-end ml-5 mx-10 mt-10">
        <form action={enviar}>
        <label htmlFor="titulo">Titulo de la capsula: </label><br />
        <input type="text" className="text-blue-600" id="titulo" name="titulo" value={props.titulo} onChange={(e)=>{
            updateProps({... props,titulo: e.target.value})
        }} />

        </form>
      </div>
    </div>
  );
}
