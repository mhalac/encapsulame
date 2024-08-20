"use client";

import { act, useEffect, useState } from "react";


export default function CapsulaUI() {
  const [capsulas, actualizarCapsulas] = useState<React.JSX.Element[]>([]);
  useEffect(() => {
    async function get_capsulas() {
      const data_header = new Headers();
      data_header.append("Intent", "capsulas");

      const data = await fetch("http://localhost:3000/api/account", {
        method: "GET",
        headers: data_header,
      });
      const caps = (await data.json()).body;

      let temp:React.JSX.Element[] = [];

      console.log(caps);
      for (let index = 0; index < caps.length; index++) {
        console.log(caps[index]);
        temp[index] = (
          <div>
            <p>IT WORKS HAHA {index}</p>
          </div>
        )
      }

      actualizarCapsulas(temp);
    }
    get_capsulas();
  }, [capsulas]);

  return(
    <div>
      {capsulas}
    </div>
  )

}
