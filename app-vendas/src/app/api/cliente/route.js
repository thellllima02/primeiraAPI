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
export async function POST(req){
    try{
        const db = await createConnection();
        const {nome, endereco, cidade} = await req.json();
        const sql = "insert into cliente(nome, endereço, cidade) values(?,?,?)"
        const [result] = await db.query(sql, [nome, endereco, cidade]);
        return NextResponse.json({id: result.insertId, nome, endereco, cidade})
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
}