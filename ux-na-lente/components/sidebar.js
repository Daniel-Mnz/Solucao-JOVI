export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <h2>UX na Lente</h2>
            </div>

            <nav className="menu">

                <a href="#scanner">Scanner</a>

                <a href="#seletor">Seletor de Destino</a>

                <a href="#acessibilidade">Acessibilidade</a>

                <a href="#demonstracao">Demonstração</a>

            </nav>

            <button className="botao-sair">
                Sair
            </button>

        </aside>
    );
}