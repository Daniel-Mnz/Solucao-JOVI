"use client";

import { useState } from "react";

export default function Seletor() {

    const [mensagem, setMensagem] = useState("");

    const pastas = [
        "Trabalho",
        "Viagem",
        "Documentos",
        "Família",
        "Estudos",
        "Projetos"
    ];

    function organizarFoto() {

        const indiceSorteado = Math.floor(Math.random() * pastas.length);

        const pastaEscolhida = pastas[indiceSorteado];

        setMensagem(
            `Foto analisada! A pasta recomendada para esta foto foi "${pastaEscolhida}".`
        );

        localStorage.setItem("ultimaPastaSugerida", pastaEscolhida);
    }

    return (
        <section id="seletor" className="bg-white p-5 md:p-8 mb-8 rounded-xl dark:bg-zinc-900 dark:text-zinc-100">

            <h2 className="text-2xl font-bold mb-4">Seletor inteligente</h2>

            <p className="mb-5 leading-relaxed">
                O sistema recomenda uma pasta para a foto
                com base em informações como data, horário
                e localização.
            </p>

            <button
                className="px-5 py-3 rounded-md bg-zinc-800 text-white cursor-pointer hover:bg-zinc-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                onClick={organizarFoto}
            >
                Organizar foto
            </button>

            {mensagem && (
                <p className="mt-4 p-3 bg-gray-100 rounded-md text-sm dark:bg-zinc-800">
                    {mensagem}
                </p>
            )}

        </section>
    );
}