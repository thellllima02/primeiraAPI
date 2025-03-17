import CustonLink from "./../components/link/page";
import styles from "./styles.module.css"

export default function Categoria() {
    return (
        <body>
            <div className={styles.div}>
                <header>
                    <h1 className={styles.header}>Categoria</h1>
                </header>
                <section>
                    <nav className={styles.section}><CustonLink href="/categoria/viewCategoria" label="Visualizar Categorias"></CustonLink>
                        <CustonLink href="/categoria/novaCategoria" label="Adicionar Categorias"></CustonLink>
                        <CustonLink href="./" label="Voltar"></CustonLink>
                    </nav>
                </section>
                <footer className={styles.footer}>
                    <p>© 2025 Hércules Silva. Todos os direitos reservados.</p>
                </footer>
            </div>
        </body>
    )
}


