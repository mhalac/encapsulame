import NavDash from "../ui/nav_dash";
import { Oswald } from "next/font/google";

const custom_font = Oswald({
  subsets: ["latin"],
  weight: "400",
});
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className={custom_font.className}>
        <div className="bg-cover bg-center custom_font bg-black gap-10 justify-center items-center h-screen flex flex-row">
        <button className="absolute -translate-x-[40.1vw]  bg-slate-100 rounded-full w-11 h-11" ></button>

          <div className="w-[10vw] h-[92vh] bg-purple-700 container rounded-[3vh] active:draw flex-col gap-14 py-10 items-center flex">
            <NavDash title="VER CAPSULAS" direction="/dashboard" />
            <NavDash title="CREAR CAPSULAS" direction="/dashboard/capsules" />
            <NavDash title="CERRAR SESION" direction="/dashboard/capsules" />
            <NavDash title="CALENDARIO?" direction="/dashboard/capsules" />
          </div>
          <div className="w-[90vw] h-[92vh] bg-slate-600">{children}</div>
        </div>
      </div>
    </section>
  );
}
