import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";
import styles from "../styles.module.css"

export default async function ViewCliente() {
    try {
        const receberAPI = await fetch('http://localhost:3000/api/cliente');
        const convertejson = await receberAPI.json();
        return (
            <>
                <h1 className={styles.header}>Cliente</h1>
                <CustonLink href="./" label="Voltar"></CustonLink>
                <table className={styles.table} >
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Endereço</th>
                            <th className={styles.th}>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {convertejson.map((cliente) => (
                            <tr key={cliente.id} className={styles.tr}>
                                <td className={styles.td}> {cliente.nome} </td>
                                <td className={styles.td}> {cliente.endereco} </td>
                                <td className={styles.td}> {cliente.cidade} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <CustonLink href="./" label="Voltar "></CustonLink>
            </>
        )
    } catch (error) {
        notFound();
    }
}

