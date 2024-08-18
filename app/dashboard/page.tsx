import NavDash from "../ui/nav_dash";
export default async function Dashboard() {
  return (
    <div className="bg-cover bg-center bg-slate-800 gap-10 justify-center items-center h-screen flex flex-row">
      <div className="w-[10vw] h-[92vh] bg-slate-600 flex-col gap-14 py-5 items-center flex">    
        <NavDash title="TITULO" direction="/dashboard/capsules" />
        <NavDash title="TITULO" direction="/dashboard/capsules" />
        <NavDash title="TITULO" direction="/dashboard/capsules" />

      
      </div>
      <div className="w-[90vw] h-[92vh] bg-slate-600"></div>
    </div>
  );
}
