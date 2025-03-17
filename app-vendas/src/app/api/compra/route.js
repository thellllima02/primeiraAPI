import {createConnection} from "../../lib/mysql.js"
import { NextResponse } from "next/server"

export async function GET(){
    try{
        const db = await createConnection()
        const sql = "select * from compra"
        const [compra] = await db.query(sql)
        return NextResponse.json(compra)

    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
    
}

export async function POST(req) {
    try{
        const db = await createConnection()
        const {nome} = await req.json();
        const sql = "INSERT INTO compra(nome) VALUES (?)"
        const [result] = await db.query(sql, [nome]);
        return NextResponse.json({id: result[0].insertId, nome})
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
}
//Foi preciso colocar isso para evitar o CORS
export async function OPTIONS() {
    return NextResponse.json(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}