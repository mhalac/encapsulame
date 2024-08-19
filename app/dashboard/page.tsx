"use client";
import { useEffect, useState } from "react";
import NavDash from "../ui/nav_dash";
import { Oswald } from "next/font/google";
import CapsulaUI from "../ui/capsula_board";
const custom_font = Oswald({
  subsets: ["latin"],
  weight: "400",
});

export default function Dashboard() {
  const user_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const [mensaje, cambiarMensaje] = useState("Cargando...");
  useEffect(() => {
    async function updateValues() {
      const head = new Headers();
      head.append("Intent", "Datos");

      const resp = await fetch("http://localhost:3000/api/account", {
        method: "GET",
        headers: head,
      });
      const body = (await resp.json()).body;
      cambiarMensaje(body.name);
    }
    updateValues();
  });
  


  return (
    <div className="w-[88vw] h-[92vh] bg-black">
      <div className="flex justify-end ml-5 mx-10 mt-10">
        <label
          className={
            custom_font.className +
            " relative text-justify text-2xl flex flex-row items-center"
          }
        >
          <div className="translate-y-[2px]"> {user_icon} </div> {mensaje}
        </label>
      </div>
      <hr className="mx-10 mt-5" />
      <div className="flex justify-center w-full h-[83vh]">
        <CapsulaUI/>

      </div>
    </div>
  );
}  
