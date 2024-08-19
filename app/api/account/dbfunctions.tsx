import { NextResponse } from "next/server";
import getDB from "@/utils/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const db = getDB();

function manageUser(access_id:any,identity:any){
    const get_user_stmt = db.prepare("SELECT ID_CUENTA from usuario where ID_CUENTA = ?")
    if (get_user_stmt.get(access_id) === undefined){
        console.log("asfd");
        const trans = db.prepare("INSERT INTO usuario (ID_CUENTA,ACCOUNT_NAME) VALUES( ? , ? )")
        trans.run(access_id,identity);
        console.log("asfd");
    }
    return

}

export async function getUser() {

    const kinde = getKindeServerSession();

    const username = (await kinde.getUser())?.email;
    const id = (await kinde.getUser())?.id;
    manageUser(id,username);

    return {id:id,name:username};
    
}
export async function getCapsulas() {
    const kinde = getKindeServerSession();
 //todo hacer que obtenga los valores
    
    
}