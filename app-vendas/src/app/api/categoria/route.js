import { createConnection } from '../../lib/mysql.js';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const db = await createConnection();
        const sql = 'SELECT * FROM categoria';
        const [categoria] = await db.query(sql);

        return NextResponse.json(categoria);
    } catch (erro) {
        console.error('Erro no GET:', erro);
        return NextResponse.json({ erro: erro.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const db = await createConnection();
        const sql = 'INSERT INTO categoria (nome) VALUES (?)';
        const { nome } = await req.json();
        await db.query(sql, [nome]);
        return NextResponse.json({ message: 'Categoria inserida com sucesso!' }, {
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

// CORS - Permitir requisições do frontend
export async function OPTIONS() {
    return NextResponse.json(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
