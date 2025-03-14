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
    try {
        const db = await createConnection();
        const { nome, endereco, cidade } = await req.json();
        const sql = "INSERT INTO cliente (nome, endereco, cidade) VALUES (?, ?, ?)";
        const [result] = await db.query(sql, [nome, endereco, cidade]); 

        // Certifique-se de que `result` está correto
        if (!result || !result[0]) {
            throw new Error("Erro ao inserir no banco de dados.");
        }

        return NextResponse.json({ id: result[0].insertId, nome, endereco, cidade });

    } catch (erro) {
        console.log(erro);
        return NextResponse.json({ erro: erro.message });
    }
}

export async function OPTIONS() {
    return NextResponse.json(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}
