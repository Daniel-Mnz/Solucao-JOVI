"use client";

export default function Sidebar({ aoSair }) {

    function sair() {
        alert("Você saiu do UX na Lente.");
        aoSair();
    }

    return (
        <aside className="w-60 min-h-[calc(100vh-100px)] p-6 bg-white border-r border-gray-300 flex flex-col dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100">

            <h2 className="text-2xl font-bold mb-8">UX na Lente</h2>

            <nav className="flex flex-col gap-5">
                <a href="#" className="hover:opacity-60">Início</a>
                <a href="#scanner" className="hover:opacity-60">Scanner</a>
                <a href="#seletor" className="hover:opacity-60">Seletor de destino</a>
                <a href="#acessibilidade" className="hover:opacity-60">Acessibilidade</a>
            </nav>

            <button
                className="w-full p-3 mt-auto rounded-md bg-zinc-800 text-white font-bold cursor-pointer hover:bg-zinc-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                onClick={sair}
            >
                Sair
            </button>

        </aside>
    );
}