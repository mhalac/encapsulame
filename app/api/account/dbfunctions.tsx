import { NextResponse } from "next/server";
import getDB from "@/utils/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const db = getDB();

function manageUser(access_id:string,identity:any){
    const get_user_stmt = db.prepare("SELECT ID_CUENTA from USUARIO where ID_CUENTA = ?")
    if (get_user_stmt.get(access_id) === undefined){
        const trans = db.prepare("INSERT INTO usuario (ID_CUENTA,ACCOUNT_NAME) VALUES( ? , ? )")
        trans.run(access_id,identity);
        console.log("No estaba, lo creo!");

    }else{
        console.log("Estaba, no hago nada.");
    }
    return

}

export async function getUser() {

    const kinde = getKindeServerSession();

    const username = (await kinde.getUser())?.email;
    const id = await kinde.getIdTokenRaw();
    manageUser(id,username);

    const trans = db.prepare("SELECT ID_CUENTA from usuario WHERE ID_CUENTA = ?")
    
    console.log(trans.get('id'));
    
}