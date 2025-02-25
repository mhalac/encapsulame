"use client";

import { act, useEffect, useState } from "react";

import Capsula from "./capsula";
export default function CapsulaUI() {
  const [capsulas, actualizarCapsulas] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    let temp: React.JSX.Element[] = [];

    async function get_capsulas() {
      const data_header = new Headers();
      data_header.append("Intent", "capsulas");

      const data = await fetch( "127.0.0.1/api/account", {
        method: "GET",
        headers: data_header,
        cache:"no-store"
      });
      const caps = (await data.json()).body;
      if(caps){
        
        for (let index = 0; index < caps.length; index++) {
          temp[index] = (
            <Capsula text={caps[index].TITULO} number={index + 1} capsule_id = {caps[index].ID_CAPSULA}  unblock_date={caps[index].FECHA_APERTURA}></Capsula>
          );
          
        }
        
        
        actualizarCapsulas(temp);
      }

    }

    get_capsulas();
  }, []);

  return (
    <div className="overflow-auto w-[80%] min-w-[10%]   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10  mt-5 h-[90%] ">
      {capsulas}
    </div>
  );
}
