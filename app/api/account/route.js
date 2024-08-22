import { getServerSession } from "next-auth";
import authOptions from "../../../lib/authOptions.ts"
import { NextResponse } from "next/server";
import { manageUser ,getCapsulas } from "./db_functions.tsx";



export async function GET(req,res) {
    const session = await getServerSession(authOptions);
    const name = session.user.name;
    manageUser();
    if(req.headers.get("intent") === "capsulas"){
        const caps = await getCapsulas();
        return NextResponse.json({body:caps},{status:202});
        

    }else if(req.headers.get("intent") === "datos") {
        return NextResponse.json({body:name},{status:200});
    }
    return NextResponse.json({status:404});
}
export async function POST(params) {
    
}