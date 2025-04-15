import styles from "./page.module.css";
import CustonLink from "../components/link/page";

export default function Home() {
  return (
    <body>
      <div className={styles.div}>
        <header>
          <h1 className={styles.header}>Página Inicial</h1>
          <h2 className={styles.sub}>Setor </h2>
        </header>
        <section>
          <nav className={styles.section}>
            <CustonLink href="./cliente" label="Clientes">
              {" "}
            </CustonLink>
            <CustonLink href="./fornecedor" label="Fornecedores">
              {" "}
              Fornecedores{" "}
            </CustonLink>
            <CustonLink href="./produto" label="Produtos">
              {" "}
              Produtos{" "}
            </CustonLink>
            <CustonLink href="./categoria" label="Categorias">
              {" "}
              Categorias{" "}
            </CustonLink>
            <CustonLink href="./compra" label="Compras">
              {" "}
              Compras{" "}
            </CustonLink>
            <CustonLink href="./venda" label="Vendas">
              {" "}
              Vendas{" "}
            </CustonLink>
          </nav>
        </section>
        <footer className={styles.footer}>
          <p>© 2025 Hércules Silva. Todos os direitos reservados.</p>
        </footer>
      </div>
    </body>
  );
}
