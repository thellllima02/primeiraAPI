import { notFound } from "next/navigation";
import CustonLink from "../../../components/link/page";
import styles from "../styles.module.css";

export default async function ViewVenda() {
  try {
    const receberAPI = await fetch("http://localhost:3000/api/venda");
    const converterJson = await receberAPI.json();
    return (
      <>
        <h1 className={styles.header}>Venda</h1>
        <CustonLink href="./" label="Voltar "></CustonLink>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {converterJson.map((venda) => (
              <tr key={venda.id} className={styles.tr}>
                <td className={styles.td}> {venda.valor} </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul>
          <CustonLink href="./" label="Voltar"></CustonLink>
        </ul>
      </>
    );
  } catch (error) {
    notFound();
  }
}
