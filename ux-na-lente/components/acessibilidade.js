"use client";

import { useState, useEffect } from "react";

export default function Acessibilidade() {

    const [modoEscuro, setModoEscuro] = useState(false);

    useEffect(() => {
        const salvo = localStorage.getItem("modoEscuro");

        if (salvo === "true") {
            setModoEscuro(true);
            document.body.classList.add("modo-escuro");
        }
    }, []);

    function alternarModoEscuro() {
        const novoValor = !modoEscuro;

        setModoEscuro(novoValor);

        document.body.classList.toggle("modo-escuro", novoValor);

        localStorage.setItem("modoEscuro", novoValor);
    }

    return (
        <section id="acessibilidade" className="bg-white p-5 md:p-8 mb-8 rounded-xl dark:bg-zinc-900 dark:text-zinc-100">

            <h2 className="text-2xl font-bold mb-4">Acessibilidade</h2>

            <p className="mb-5 leading-relaxed">
                Ative o modo escuro para facilitar
                a leitura em ambientes com pouca luz.
            </p>

            <button
                className="px-5 py-3 rounded-md bg-zinc-800 text-white cursor-pointer hover:bg-zinc-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                onClick={alternarModoEscuro}
            >
                {modoEscuro
                    ? "Desativar modo escuro"
                    : "Ativar modo escuro"
                }
            </button>

        </section>
    );
}