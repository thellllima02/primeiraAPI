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

export async function POST() {
    try{
        const db = await createConnection()
        const {nome} = await requestAnimationFrame.json();
        const sql = "insert into compra(nome) values (?)"
        const [result] = await db.query(sql, [nome]);
        return NextResponse.json({id: result.insertId, nome})
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
}
