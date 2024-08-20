
import { Oswald } from "next/font/google";

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
const custom_font = Oswald({
  subsets: ["latin"],
  weight: "400",
});
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import GotoDashboard from "./ui/gotodash";

export default async function MainPage() {
  const session = await getKindeServerSession();
  const authed = await session.isAuthenticated();


  return (
    <main className={custom_font.className}>
      <div className="bg-cover bg-center background-main justify-center items-center h-screen flex flex-col ">
        <h1 className="text-6xl -translate-y-[1vh]">  <span className="text-sky-600">ENCAPSULA</span><span className="text-fuchsia-600 ">ME</span> </h1>
        
        <div className="bg-gradient-to-r outline zig-zag flex flex-col items-center justify-center zig-zag  from-sky-800 to-fuchsia-800 w-[45vw] h-[50vh] ">
          <p className="relative w-[23vw] h-[24vh]  text-4xl justify-center text-center" >CREÁ TU CAPSULA DEL TIEMPO PARA PODER RECORDAR TUS MOMENTOS CON TUS AMIGOS O FAMILIA.</p>
          {authed ? (
          <GotoDashboard className="text-5xl bg-black translate-y-3 px-[1.5vw] py-[2vh]"> VER MIS CAPSULAS</GotoDashboard>

          ) : (
          <RegisterLink className="text-5xl bg-black translate-y-3 px-[1.5vw] py-[2vh]"> REGISTRAR<span className="animate-pulse text-fuchsia-600">ME</span></RegisterLink>

          )}
        </div>
      </div>
    </main>
  );
}

