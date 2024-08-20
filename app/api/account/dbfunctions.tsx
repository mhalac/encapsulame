import { NextResponse } from "next/server";
import getDB from "@/utils/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const db = getDB();

async function manageUser(){
    const kinde = await getKindeServerSession();
    const username = (await kinde.getUser())?.email;
    const id = (await kinde.getUser())?.id;
    if(id === undefined){
        return
    }

    const get_user_stmt = db.prepare("SELECT ID_CUENTA from usuario where ID_CUENTA = ?")
    if (get_user_stmt.get(id) === undefined){
        const trans = db.prepare("INSERT INTO usuario (ID_CUENTA,ACCOUNT_NAME) VALUES( ? , ? )")
        trans.run(id,username);
    }
    return

}

export async function getUser() {
    const kinde = await getKindeServerSession();

    const username = (await kinde.getUser())?.email;
    const id = (await kinde.getUser())?.id;
    manageUser();

    return {id:id,name:username};
    
}
export async function getCapsulas() {
    const kinde = await getKindeServerSession();
    const id = (await kinde.getUser())?.id;
    
    const trans_select = db.prepare(`SELECT TEXTO, TITULO FROM capsula WHERE ID_CAPSULA IN (
                                    SELECT ID_CAPSULA FROM capsula_usuario WHERE ID_CUENTA = ? ORDER BY ID_CAPSULA DESC)`);
    
    const result = trans_select.all(id)
    return await result;
}