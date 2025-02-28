import {createConnection} from "../../lib/mysql.js"
import { NextResponse } from "next/server"

export async function GET(){
    try{
        const db = await createConnection()
        const sql = "select * from fornecedor"
        const [fornecedor] = await db.query(sql)
        return NextResponse.json(fornecedor)
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
}
export async function POST(){
    try{
        const db = await createConnection()
        const {nome, endereco, cidade, empresa} = await req.json();
        const sql = "insert into fornecedor(nome, endereco, cidade, empresa) values (?,?,?,?)"
        const [result] = await db.query(sql, [nome, endereco, cidade, empresa]);
        return NextResponse.json({id: result.insertId, nome, endereco, cidade, empresa})
    }catch(erro){
        console.log(erro)
        return NextResponse.json({erro: erro.message})
    }
}