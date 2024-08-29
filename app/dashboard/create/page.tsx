"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { current_ip } from "../page";

export default function CreateCapsule() {
  const [data, changeData] = useState("Enviar");
  const router = useRouter();
  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);

    const head = new Headers();
    head.append("intent", "capsula");

    const data = fetch( current_ip + "/api/capsula", {
      method: "POST",
      body: formdata,
      headers: head,
    });

    data.then(() => {
      router.push("/dashboard");
    });
    changeData("Enviando...");
  }

  return (
    <div className="w-[88vw] min-w-[400px] h-[92vh] grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 bg-slate-700 min-h-[92vh] items-center justify-items-center">

      <div className="w-[29vw] translate-x-[5vw] h-[59vh]">
        <h1 className="xl:text-7xl md:text-5xl  text-left">
          CREA TU CAPSULA PARA RECORDAR TUS MOMENTOS EN EL FUTURO
        </h1>
        <hr className="bg-gradient-to-r from-fuchsia-700 glowing-line2 to-purple-500" />
      </div>
      <div className="w-[.15vw] h-[90vh] hidden  xl:block bg-gradient-to-r from-fuchsia-700 align-middle glowing-line to-purple-500 m-5"></div>
      <div className="w-[29vw] -translate-x-[5vw] min-w-[320px] -translate-y-[15vh] md:-translate-y-[9vh] xl:-translate-y-[5vh] h-[59vh]">
        {
          /*formulario*/
        }
        
        <form onSubmit={Submit} className="flex flex-col h-full w-full ">
          <label htmlFor="titulo" className="text-3xl">
            TITULO DE CAPSULA:
          </label>
          <input
            type="text"
            name="titulo"
            className="h-[7vh] text-black text-5xl min-h-16"
            id="titulo"
            required
          />
        <hr className="bg-gradient-to-r from-fuchsia-700 glowing-line2 to-purple-500" />

          <label htmlFor="fecha" className="text-3xl mt-[4vh] ">
            FECHA DE APERTURA:
          </label>
          <input
            type="date"
            name="fecha"
            className="h-[7vh] mt-[4vh] text-black text-5xl w-full min-h-16"
            id="fecha"
            required
          />
        <hr className="bg-gradient-to-r from-fuchsia-700 glowing-line2 to-purple-500" />

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
            className="h-48 col-span-2 text-black text-3xl text-left"
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
