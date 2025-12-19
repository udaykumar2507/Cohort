
export function GET() {
    return Response.json({
        email:"Ujval@gmail.com",
        name : "Ujval",
    })
}

export async function POST(req:Request){
    const data = await req.json();
    console.log(data.username);
    console.log(data.password);
     return Response.json({ message: "Received" });

}