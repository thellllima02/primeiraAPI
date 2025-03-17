import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";
import styles from "../styles.module.css"

export default async function ViewProduto() {
    try {
        const receberAPI = await fetch('http://localhost:3000/api/produto')
        const convertejson = await receberAPI.json();
        return (
            <>
            <h1 className={styles.header}>Produto</h1>
            <CustonLink href="./" label="Voltar "></CustonLink>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Preço</th>
                        <th className={styles.th}>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                {convertejson.map((produto) => (
                        <tr key={produto.id} className={styles.tr}>
                            <td className={styles.td}> {produto.nome} </td>
                            <td className={styles.td}> {produto.preco} </td>
                            <td className={styles.td}> {produto.quantidade} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <ul>
                    <CustonLink href="./" label="Voltar"></CustonLink>
                </ul>
            </>
        )
    } catch (error) {
        notFound();
    }
}