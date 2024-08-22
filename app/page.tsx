"use client"
import { Oswald } from "next/font/google";
const custom_font = Oswald({
  subsets: ["latin"],
  weight: "400",
});
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
//import Dashboard from "./components/dashboard"
export default function Home() {
  const {data:session} = useSession();
  const router = useRouter()

  return(
    <main className={custom_font.className}>
      <div className="bg-cover bg-center background-main justify-center items-center h-screen flex flex-col ">
        <h1 className="text-6xl -translate-y-[1vh]">  <span className="text-sky-600">ENCAPSULA</span><span className="text-fuchsia-600 ">ME</span> </h1>
        
        <div className="bg-gradient-to-r outline zig-zag flex flex-col items-center justify-center zig-zag  from-sky-800 to-fuchsia-800 w-[45vw] h-[50vh] ">
          <p className="relative w-[23vw] h-[24vh]  text-4xl justify-center text-center" >CREÁ TU CAPSULA DEL TIEMPO PARA PODER RECORDAR TUS MOMENTOS CON TUS AMIGOS O FAMILIA.</p>
          {session ? (
          <button className="text-5xl bg-black translate-y-3 px-[1.5vw] py-[2vh]" onClick={()=>{
            router.push("http://localhost:3000/dashboard")
          }}> VER MIS CAPSULAS</button>

          ) : (
          <button className="text-5xl bg-black translate-y-3 px-[1.5vw] py-[2vh]" onClick={() =>{
              signIn("github");
          }}> REGISTRAR<span className="animate-pulse text-fuchsia-600">ME</span></button>

          )}
        </div>
      </div>
    </main>
  )
}