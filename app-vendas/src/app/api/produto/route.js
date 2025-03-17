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

export async function POST(req){
    try{
        const db = await createConnection();
        const sql = "insert into produto(nome, preco, quantidade) values(?,?,?)"
        const {nome, preco, quantidade} = await req.json();
        await db.query(sql, [nome, preco, quantidade]);
        return NextResponse.json({ message: 'Produto inserido com sucesso!' }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    } catch (erro) {
        console.error('Erro no POST:', erro);
        return NextResponse.json({ erro: erro.message }, { status: 500 });
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