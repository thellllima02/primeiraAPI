import CustonLink from "../../components/link/page";
import styles from "./styles.module.css";

export default function Cliente() {
  return (
    <body>
      <div className={styles.div}>
        <header>
          <h1 className={styles.header}>Cliente</h1>
        </header>
        <section>
          <nav className={styles.section}>
            <CustonLink
              href="/cliente/viewCliente"
              label="Visualizar Cliente"
            ></CustonLink>
            <CustonLink
              href="/cliente/novoCliente"
              label="Adicionar Cliente"
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
