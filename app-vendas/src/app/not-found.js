import Link from "next/link";
import styles from "./page.module.css";
//import Button from './components/botao/botao';
export default function NotFound() {
  return (
    <div className={styles.div}>
      <h1>Página não encontrada</h1>

      <div className={styles.section}>
        <p>Oops! A página que você procura não existe ou está em construção.</p>
        <Link href="./">Voltar</Link>

        {/*<Link href="./"><Button type="button" label="Voltar para a pagina anterior " /></Link>*/}
      </div>
    </div>
  );
}
