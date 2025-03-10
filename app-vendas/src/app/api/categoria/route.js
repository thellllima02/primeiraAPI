import { createConnection } from "../../lib/mysql.js";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const db = await createConnection()
        const sql = "select * from categoria"
        const [categoria] = await db.query(sql)
        return NextResponse.json(categoria)
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
}

export async function POST (req){
    try{
        const db = await createConnection();
        const {nome} = await req.json();
        const sql = "insert into (nome) value(?)"
        const result = await db.query(sql, [nome]);
        return NextResponse.json({id: result[0].inserId, nome})
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
}