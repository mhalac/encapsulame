import { NextRequest, NextResponse } from "next/server";
import getDB from "@/utils/db"
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
const db = getDB();
export async function POST(req:NextRequest){
    const data = await req.formData();
    const session = await getServerSession(authOptions);

    if(req.headers.get("intent") === "capsula"){
        //todo agregar verificacion de datos backend :P
        
                
        const smt_last_index = db.prepare("SELECT ID_CAPSULA FROM capsula_usuario ORDER BY ID_CAPSULA DESC")
        const last_index = smt_last_index.get();
        const new_index = last_index?.ID_CAPSULA + 1;

        const insert_capsula_usuario_stmt = db.prepare("INSERT INTO capsula_usuario (ID_CAPSULA,ID_CUENTA) VALUES(?, ?)");
        insert_capsula_usuario_stmt.run(new_index,session?.user.id);
        
        const insert_capsula = db.prepare("INSERT INTO capsula (ID_CAPSULA,TEXTO,TITULO,FECHA_CREADA,FECHA_APERTURA) VALUES(?, ?, ?, ?, ?)")
        const date = new Date(data.get("fecha") as string);
        const current_date = new Date()
        insert_capsula.run(new_index,data.get("mensaje"),data.get("titulo"),current_date.toISOString(),date.toISOString())
        
    }


    return NextResponse.json({},{status:200})
}
export async function GET() {
    
}