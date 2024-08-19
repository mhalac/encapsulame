"use client"
import NavDash from "../ui/nav_dash";
import { Oswald } from "next/font/google";

const custom_font = Oswald({
  subsets: ["latin"],
  weight: "400",
});

export default function Dashboard() {

  const head = new Headers();
  head.append("Intent","Datos")
  return (
    <button className={custom_font.className +" w-28 h-28 bg-fuchsia-200 justify-center" } onClick={() => {
      fetch("http://localhost:3000/api/account",{
        method:"GET",
        headers:head
      } )


    }}>
      HACER COSAS SQL
    </button>
  );
}
