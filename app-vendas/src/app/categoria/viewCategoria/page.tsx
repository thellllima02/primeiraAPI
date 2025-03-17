import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";
import styles from "../styles.module.css"

export default async function ViewCategoria() {
    try {
        const receberAPI = await fetch('http://localhost:3000/api/categoria')
        const converterJson = await receberAPI.json();
        return (
            <>
                <h1 className={styles.header}>Categoria</h1>
                <CustonLink href="./" label="Voltar"></CustonLink>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {converterJson.map((categoria) => (
                            <tr key={categoria.id} className={styles.tr}>
                                <td className={styles.td}> {categoria.nome} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <CustonLink href="./" label="Voltar "></CustonLink>
            </>
        );
    } catch (error) {
        notFound();
    }
}