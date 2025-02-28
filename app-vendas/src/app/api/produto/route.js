import {createConnection} from "../../lib/mysql.js"
import { NextResponse } from "next/server"

export async function GET() {
    try{
        const db = await createConnection()
        const sql = "select * from produto"
        const [produto] = await db.query(sql)
        return NextResponse.json(produto)
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
    
}

export async function POST(){
    try{
        const db = await createConnection()
        const sql = "insert into produto(nome, preco, quantidade) values(?,?,?)"
        const [result] = await db.query(sql, [nome, preco, quantidade]);
        return NextResponse.json({id: result.insertId, nome, preco, quantidade})

    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.messge})
    }
}