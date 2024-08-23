"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCapsule() {
    const [data, changeData] = useState("Enviar");
    const router = useRouter();
    async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);

    const head = new Headers();
    head.append("intent","capsula")

    const data = fetch("http://localhost:3000/api/capsula",{
        method:"POST",
        body:formdata,
        headers:head,
    })

    data.then(() => {
        router.push('http://localhost:3000/dashboard')
    });
    changeData("Enviando...");


  }

  return (
    <div className="w-[88vw] min-w-[88vw] h-[92vh] grid grid-rows-1 grid-cols-3 bg-slate-700 min-h-[92vh] align-middle items-center justify-items-center">
      <div className="w-[29vw] translate-x-[5vw] h-[59vh]">
        <h1 className="text-8xl text-left">
          CREA TU CAPSULA PARA RECORDAR TUS MOMENTOS EN EL FUTURO
        </h1>
        <hr className="bg-gradient-to-r from-fuchsia-700 glowing-line2 to-purple-500" />
      </div>
      <div className="w-[.15vw] h-[90vh] bg-gradient-to-r from-fuchsia-700 align-middle glowing-line to-purple-500 m-5"></div>
      <div className="w-[29vw] -translate-x-[5vw] h-[59vh]">
        <form onSubmit={Submit} className="grid grid-cols-2 grid-rows-5">
          <label htmlFor="titulo" className="text-3xl">
            TITULO DE CAPSULA:
          </label>
          <input
            type="text"
            name="titulo"
            className="h-[7vh] text-black text-5xl"
            id="titulo"
            required
          />

          <label htmlFor="fecha" className="text-3xl mt-[4vh] col-span-1">
            FECHA DE APERTURA:
          </label>
          <input
            type="date"
            name="fecha"
            className="h-[7vh] mt-[4vh] text-black text-5xl"
            id="fecha"
            required
          />

          <label
            htmlFor="mensaje"
            className="text-5xl mt-[4vh] col-span-2 text-center"
          >
            MENSAJE
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            style={{ resize: "none" }}
            className="row-span-10 col-span-2 text-black text-3xl text-left"
            placeholder="Escribe tu mensaje aquí"
            required
          />
          <button
            className="bg-purple-500 col-span-2 h-[10vh] mt-10"
            type="submit"
          >
            {data}
          </button>
        </form>
      </div>
    </div>
  );
}
