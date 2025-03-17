import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";
import styles from "../styles.module.css"

export default async function ViewFornecedor() {
    try {
        const receberAPI = await fetch('http://localhost:3000/api/fornecedor')
        const convertejson = await receberAPI.json();
        return (
            <>
            <h1 className={styles.header}>Fornecedor</h1>
            <CustonLink href="./" label="Voltar "></CustonLink>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Endereço</th>
                            <th className={styles.th}>Cidade</th>
                            <th className={styles.th}>Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            convertejson.map((fornecedor) => (
                                <tr key={fornecedor} className={styles.tr}>
                                    <td className={styles.td}> {fornecedor.nome} </td>
                                    <td className={styles.td}> {fornecedor.endereco} </td>
                                    <td className={styles.td}> {fornecedor.cidade} </td>
                                    <td className={styles.td}> {fornecedor.empresa} </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <CustonLink href="./" label="Voltar"></CustonLink>
            </>
        )
    } catch (error) {
        notFound();
    }
}