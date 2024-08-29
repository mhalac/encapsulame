"use server";
import { getServerSession } from "next-auth";
import getDB from "@/utils/db";
import authOptions from "@/lib/authOptions";
const db = getDB();

export default async function Page({ params }) {
  //@ts-ignore
  const id_capsula = params.visualizar[1];

  const session = await getServerSession(authOptions);
  const stmt_verify = db.prepare(
    "SELECT ID_CUENTA FROM capsula_usuario WHERE ID_CAPSULA = ?"
  );
  const result = stmt_verify.get(id_capsula);
  //@ts-ignore
  const id_intent =
    result && result["ID_CUENTA"] ? result["ID_CUENTA"] : "000000";

  //@ts-ignore

  if (
    id_intent === session?.user.id &&
    (id_intent !== undefined || session.id !== undefined)
  ) {
    const datos_query = db.prepare(
      "SELECT TITULO,FECHA_CREADA, TEXTO FROM capsula WHERE ID_CAPSULA = ?"
    );
    const datos = datos_query.get(id_capsula);
    const fecha = new Date(datos["FECHA_CREADA"]);
    const fecha_formatted =
      fecha.getDay() + " / " + fecha.getMonth() + " / " + fecha.getFullYear();
    return (
      <div className="w-[88vw] min-w-[88vw] h-[92vh]  bg-slate-700 min-h-[92vh] flex flex-col items-center align-middle ">
        <div className=" w-full h-[15vh] flex flex-col justify-center items-center">
          <p className="text-white text-center text-4xl">{datos["TITULO"]}</p>
          <div className="glowing-line2 w-[28vw] h-[.2vh] mt-4 bg-black" />
        </div>
        <div className="w-[30vw] h-[8vh] bg-purple-400 items-center flex justify-center rounded-full ">
          <label className="text-white text-center text-3xl">
            Fecha de creacion: {fecha_formatted}
          </label>
        </div>

        <div className="w-[30vw] h-[50vh] p-4 bg-white mt-10">
          <p className="text-black inline-block text-2xl w-full line-clamp-2">
            {datos["TEXTO"]}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-[88vw] min-w-[88vw] h-[92vh] grid grid-rows-1 grid-cols-3 bg-slate-700 min-h-[92vh] align-middle items-center justify-items-center">
        <p>EMM NO TIENES ACCESO PARA VER ESTO</p>
      </div>
    );
  }
}
