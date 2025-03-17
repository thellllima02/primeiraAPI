'use client'
import React, { useState } from "react";
import CustonLink from "../../components/link/page";
import styles from "../styles.module.css"
import Input from "../../components/input/page";
import Button from "../../components/button/page";

export default function CreateVenda() {
    const [formData, setFormData] = useState({ valor: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        if (!formData.valor) {
            alert('Preencha todos os campos!')
            return;
        }
        try {
            const response = await fetch('http://localhost:3030/api/venda', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log('Resposta da API:', result)
            if (!response.ok) {
                throw new Error(result.erro || 'Erro ao salvar os dados!');
            }

            alert('Dados salvos com sucesso!');
            setFormData({ valor: "" });

        } catch (error) {
            console.error('POST error:', error);
            setFormData(error.message);
        }
    };
    return (
        <body className={styles.body}>
            <div className={styles.div}>
                <header className={styles.header}>
                    <h1 >Página da Venda</h1>
                </header>
                <section className={styles.section}>
                    <form onSubmit={(event) => handleSubmit(event)} >
                        <Input placeholder="Valor venda" name="valor" value={formData.valor} onChange={handleChange} />
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