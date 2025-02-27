'use client'
import { useState } from 'react';

export default function NovoCliente() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, endereco, cidade }),
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const data = await response.json();
            setMensagem(`Cliente ${data.nome} inserido com sucesso!`);
            setNome('');
            setEndereco('');
            setCidade('');
        } catch (error) {
            console.error('Erro ao inserir cliente:', error);
            setMensagem('Erro ao inserir cliente.');
        }
    };

    return (
        <div>
            <h1>Novo Cliente</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input
                        type="text"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Cidade:</label>
                    <input
                        type="text"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Inserir Cliente</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}