import CustonLink from "../../components/link/page";
import styles from "./styles.module.css";

export default function Venda() {
  return (
    <body>
      <div className={styles.div}>
        <header>
          <h1 className={styles.header}>Venda</h1>
        </header>
        <section>
          <nav className={styles.section}>
            <CustonLink
              href="/venda/viewVenda"
              label="Visualizar Vendas"
            ></CustonLink>
            <CustonLink
              href="/venda/novaVenda"
              label="Adicionar Venda"
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
