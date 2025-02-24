import {createConnection} from "../../lib/mysql.js";
import {NextResponse} from "next/server";

export async function GET() {
    try{
        const db = await createConnection()
        const sql = "select * from cliente"
        const [cliente] = await db.query(sql)
        return NextResponse.json(cliente)


    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
    
}