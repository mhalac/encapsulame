import { NextRequest, NextResponse } from "next/server";
import getDB from "@/utils/db"
const db = getDB();
import * as db_functions from "./dbfunctions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req:NextRequest) {
    
}
export async function GET(req:NextRequest) {
    console.log("Llego!")
    const user = await getKindeServerSession();
    return NextResponse.json({body:db_functions.getUser()},{status:200});
}