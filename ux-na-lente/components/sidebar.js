"use client";

export default function Sidebar({ aoSair }) {

    function sair() {
        alert("Você saiu do UX na Lente.");
        aoSair();
    }

    return (
        <aside className="sidebar">

            <h2>UX na Lente</h2>

            <nav className="sidebar-nav">
                <a href="#">Início</a>
                <a href="#scanner">Scanner</a>
                <a href="#seletor">Seletor de destino</a>
                <a href="#acessibilidade">Acessibilidade</a>
                <a href="#slideshow">Demonstração</a>
            </nav>

            <button className="btn-sair" onClick={sair}>
                Sair
            </button>

        </aside>
    );
}
