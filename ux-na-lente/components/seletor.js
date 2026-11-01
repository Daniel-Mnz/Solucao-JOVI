"use client";

import { useState, useEffect } from "react";

export default function Seletor() {

    const [mensagem, setMensagem] = useState("");
    const [historico, setHistorico] = useState([]);

    const pastas = [
        "Trabalho",
        "Viagem",
        "Documentos",
        "Família",
        "Estudos",
        "Projetos"
    ];

    useEffect(() => {
        const salvo = localStorage.getItem("historicoPastas");

        if (salvo) {
            setHistorico(JSON.parse(salvo));
        }
    }, []);

    function organizarFoto() {

        const indiceSorteado = Math.floor(Math.random() * pastas.length);

        const pastaEscolhida = pastas[indiceSorteado];

        setMensagem(
            `Foto analisada! A pasta recomendada para esta foto foi "${pastaEscolhida}".`
        );

        const novoItem = {
            pasta: pastaEscolhida,
            data: new Date().toLocaleString("pt-BR")
        };

        const novoHistorico = [novoItem, ...historico].slice(0, 5);

        setHistorico(novoHistorico);

        localStorage.setItem("historicoPastas", JSON.stringify(novoHistorico));
        localStorage.setItem("ultimaPastaSugerida", pastaEscolhida);
    }

    function limparHistorico() {
        setHistorico([]);
        localStorage.removeItem("historicoPastas");
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

            {historico.length > 0 && (
                <div className="mt-6">

                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-bold">Últimas sugestões</h3>

                        <button
                            className="text-sm underline cursor-pointer hover:opacity-60"
                            onClick={limparHistorico}
                        >
                            Limpar histórico
                        </button>
                    </div>

                    <ul className="flex flex-col gap-2">
                        {historico.map((item, indice) => (
                            <li
                                key={indice}
                                className="flex flex-col sm:flex-row sm:justify-between p-3 bg-gray-100 rounded-md text-sm dark:bg-zinc-800"
                            >
                                <span className="font-bold">{item.pasta}</span>
                                <span className="text-gray-600 dark:text-zinc-400">{item.data}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            )}

        </section>
    );
}