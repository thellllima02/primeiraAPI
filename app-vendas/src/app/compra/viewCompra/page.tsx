import { notFound } from "next/navigation";
import CustonLink from "../../../components/link/page";
import styles from "../styles.module.css";

export default async function ViewCompra() {
  try {
    const receberAPI = await fetch("http://localhost:3000/api/compra");
    const convertejson = await receberAPI.json();
    return (
      <>
        <h1 className={styles.header}>Compra</h1>
        <CustonLink href="./" label="Voltar "></CustonLink>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Nome</th>
            </tr>
          </thead>
          <tbody>
            {convertejson.map((compra) => (
              <tr key={compra.id} className={styles.tr}>
                <td className={styles.td}> {compra.nome} </td>
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
