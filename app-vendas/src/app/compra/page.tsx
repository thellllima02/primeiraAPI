import CustonLink from "../../components/link/page";
import styles from "./styles.module.css";

export default function Compra() {
  return (
    <body>
      <div className={styles.div}>
        <header>
          <h1 className={styles.header}>Compra</h1>
        </header>
        <section>
          <nav className={styles.section}>
            <CustonLink
              href="/compra/viewCompra"
              label="Visualizar Compras"
            ></CustonLink>
            <CustonLink
              href="/compra/novaCompra"
              label="Adicionar Compra"
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
