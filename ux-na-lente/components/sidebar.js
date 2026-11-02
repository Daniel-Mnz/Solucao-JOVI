"use client";

import Link from "next/link";

export default function Sidebar({ aoSair }) {

    function sair() {
        alert("Você saiu do UX na Lente.");
        aoSair();
    }

    return (
        <aside className="w-full md:w-60 md:min-h-[calc(100vh-100px)] p-6 bg-white border-b md:border-b-0 md:border-r border-gray-300 flex flex-col dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100">

            <h2 className="text-2xl font-bold mb-4 md:mb-8">UX na Lente</h2>

            <nav className="flex flex-row flex-wrap md:flex-col gap-4 md:gap-5">
                <Link href="/inicio" className="hover:opacity-60">Início</Link>
                <Link href="/inicio#scanner" className="hover:opacity-60">Scanner</Link>
                <Link href="/inicio#seletor" className="hover:opacity-60">Seletor de destino</Link>
                <Link href="/albuns" className="hover:opacity-60">Álbuns</Link>
                <Link href="/inicio#acessibilidade" className="hover:opacity-60">Acessibilidade</Link>
            </nav>

            <button
                className="w-full p-3 mt-6 md:mt-auto rounded-md bg-zinc-800 text-white font-bold cursor-pointer hover:bg-zinc-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                onClick={sair}
            >
                Sair
            </button>

        </aside>
    );
}