import CustonLink from "../../components/link/page";
import styles from "./styles.module.css";

export default function Fornecedor() {
  return (
    <body>
      <div className={styles.div}>
        <header>
          <h1 className={styles.header}>Fornecedor</h1>
        </header>
        <section>
          <nav className={styles.section}>
            <CustonLink
              href="/fornecedor/viewFornecedor"
              label="Visulizar Fornecedor"
            ></CustonLink>
            <CustonLink
              href="/fornecedor/novoFornecedor"
              label="Novo Fornecedor"
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
