"use client";

export default function Sidebar() {

    function sair() {
        alert("Você saiu do UX na Lente.");
    }

    return (
        <aside className="sidebar">

            <h2>UX na Lente</h2>

            <nav className="sidebar-nav">
                <a href="#">Início</a>
                <a href="#">Scanner</a>
                <a href="#">Seletor de destino</a>
                <a href="#">Acessibilidade</a>
                <a href="#">Demonstração</a>
            </nav>

            <button className="btn-sair" onClick={sair}>
                Sair
            </button>

        </aside>
    );
}