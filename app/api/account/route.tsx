import { NextRequest, NextResponse } from "next/server";
import getDB from "@/utils/db"
const db = getDB();
import * as db_functions from "./dbfunctions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req:NextRequest) {
    
}
export async function GET(req:NextRequest) {
    const user = await db_functions.getUser();
    if(req.headers.get("intent") === "capsulas"){
        db_functions.getCapsulas();
        return NextResponse.json({body:user},{status:202});
        

    }else{
        return NextResponse.json({body:user},{status:200});
    }
}