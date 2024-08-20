
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
}) 
{
  const dash_icon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
  )
  const signout_icon = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  
  )
  const create_icon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
  )
  return (
    <section>
      <div className={custom_font.className}>
        <div className="bg-cover bg-center custom_font bg-slate-700 gap-3 justify-center items-center h-screen flex flex-row">

          <div className="w-[4cm] h-[92vh] bg-black min-w-[4cm]  flex-col  gap-14 py-10 items-center flex">
            <NavDash title="VER CAPSULAS" direction="/dashboard" icon={dash_icon} />
            <NavDash title="CREAR CAPSULAS" direction="/dashboard/create" icon={create_icon} />
            <NavDash title="CERRAR SESION" direction="/dashboard/capsules" icon={signout_icon} />
            <NavDash title="CALENDARIO?" direction="/dashboard/capsules" icon={dash_icon} />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
