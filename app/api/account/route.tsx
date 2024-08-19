import { NextRequest, NextResponse } from "next/server";
import getDB from "@/utils/db"
const db = getDB();
import * as db_functions from "./dbfunctions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req:NextRequest) {
    
}
export async function GET(req:NextRequest) {
    const user = await db_functions.getUser();
    db_functions.getCapsulas();
    if(req.headers.get("Intent") === "Capsulas"){
        return NextResponse.json({body:user},{status:204});

    }else{
        return NextResponse.json({body:user},{status:200});
    }
}