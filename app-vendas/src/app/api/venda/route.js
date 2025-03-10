import {createConnection} from "../../lib/mysql.js";
import {NextResponse} from "next/server";

export async function GET() {
    try{
        const db = await createConnection()
        const sql = "select * from venda"
        const [venda] = await db.query(sql)
        return NextResponse.json(venda)
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
    
}
export async function POST(req){
    try{
        const db = await createConnection();
        const {nome, endereco, cidade} = await req.json();
        const sql = "insert into venda(valor) values(?)"
        const result = await db.query(sql, [valor]);
        return NextResponse.json({id: result[0].insertId, valor})
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
}