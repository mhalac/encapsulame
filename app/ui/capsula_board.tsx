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

      const data = await fetch("http://localhost:3000/api/account", {
        method: "GET",
        headers: data_header,
      });
      const caps = (await data.json()).body;

      for (let index = 0; index < caps.length; index++) {
        temp[index] = (
          <Capsula text={caps[index].TITULO} number={index + 1}></Capsula>
        );
      }

      
      actualizarCapsulas(temp);
    }

    get_capsulas();
  }, []);

  return (
    <div className="overflow-auto w-[70vw] grid grid-cols-3 gap-y-10  mt-5 h-[40vw]">
      {capsulas}
    </div>
  );
}
