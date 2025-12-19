import { NextRequest,NextResponse } from "next/server";
export function GET (req:NextRequest){
    return NextResponse.json({
        name: "Ujval",
        email : "ujval@example.com"   
    })
}
export function POST(req:NextRequest){
    const body = req.json();
    return NextResponse.json({
        message: "User created",
        data: body
    })
}