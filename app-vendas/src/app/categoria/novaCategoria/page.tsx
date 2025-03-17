'use client'
import React, { useState } from "react";
import CustonLink from "../../components/link/page";
import styles from "../styles.module.css"
import Input from "../../components/input/page";
import Button from "../../components/button/page";

export default function CreateCategoria() {
    const [formData, setFormData] = useState({ nome: "" });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formData.nome) {
            alert('Preencha todos os campos!')
            return;
        }
        try {
            const response = await fetch('http://localhost:3030/api/categoria', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log('Resposta da API:', result)
            if (!response.ok) {
                throw new Error(result.erro ||'Erro ao salvar os dados!');
            }
            
            alert('Dados salvos com sucesso!');
            setFormData({ nome: "" });
            
        } catch (error) {
            console.error('POST error:', error);
            setFormData(error.message);
        }
    };
    return (
        <body className={styles.body}>
            <div className={styles.div}>
                <header className={styles.header}>
                    <h1 >Página de Categoria</h1>
                </header>
                <section className={styles.section}>
                    <form onSubmit={handleSubmit} >
                        <Input placeholder="Nome da categoria" name="nome" value={formData.nome} onChange={handleChange} />
                        <Button type="submit" label="Salvar" />
                        <CustonLink href="./" label="Voltar"></CustonLink>
                    </form>
                </section>
                <footer className={styles.footer}>
                    <p>© 2025 Hércules Silva. Todos os direitos reservados.</p>
                </footer>
            </div>
        </body>
    );
}