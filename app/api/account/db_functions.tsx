import { NextResponse } from "next/server";
import getDB from "@/utils/db"
const db = getDB();
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
export async function manageUser(){

    const session = await getServerSession(authOptions);
    const id = session?.user.id;

    if(id === undefined){
        return
    }

    const get_user_stmt = db.prepare("SELECT ID_CUENTA from usuario where ID_CUENTA = ?")
    if (get_user_stmt.get(id) === undefined){
        const trans = db.prepare("INSERT INTO usuario (ID_CUENTA,ACCOUNT_NAME) VALUES( ? , ? )")
        trans.run(id,session?.user?.name);
    }
    return

}

export async function getUser() {
    return


    const username = (await kinde.getUser())?.email;
    manageUser();

    return {id:id,name:username};
    
}
export async function getCapsulas() {
    return


    
    const trans_select = db.prepare(`SELECT TEXTO, TITULO FROM capsula WHERE ID_CAPSULA IN (
                                    SELECT ID_CAPSULA FROM capsula_usuario WHERE ID_CUENTA = ? ORDER BY ID_CAPSULA DESC)`);
    
    const result = trans_select.all(id)
    return await result;
}