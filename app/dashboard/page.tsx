import NavDash from "../ui/nav_dash";
import { Oswald } from "next/font/google";

const custom_font = Oswald({
  subsets: ["latin"],
  weight: "400",
});

export default async function Dashboard() {
  return (
    <div className={custom_font.className}>
    <div className="bg-cover bg-center custom_font bg-slate-800 gap-10 justify-center items-center h-screen flex flex-row">
      <div className="w-[10vw] h-[92vh] bg-slate-600 flex-col gap-14 py-5 items-center flex">    
        <NavDash title="VER CAPSULAS" direction="/dashboard/capsules" />
        <NavDash title="CERRAR SESION" direction="/dashboard/capsules" />
        <NavDash title="CALEN DARIO?" direction="/dashboard/capsules" />

      
      </div>
      <div className="w-[90vw] h-[92vh] bg-slate-600"></div>
    </div>
    </div>
  );
}
