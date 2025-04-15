import CustonLink from "../../components/link/page";
import styles from "./styles.module.css";
export default function Produto() {
  return (
    <body>
      <div className={styles.div}>
        <header>
          <h1 className={styles.header}>Produto</h1>
        </header>
        <section>
          <nav className={styles.section}>
            <CustonLink
              href="/produto/viewProduto"
              label="Visualizar Produtos"
            ></CustonLink>
            <CustonLink
              href="/produto/novoProduto"
              label="Adicionar Produto"
            ></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
          </nav>
        </section>
        <footer className={styles.footer}>
          <p>© 2025 Hércules Silva. Todos os direitos reservados.</p>
        </footer>
      </div>
    </body>
  );
}
