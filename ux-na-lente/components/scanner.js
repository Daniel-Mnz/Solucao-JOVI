"use client";

import { useState } from "react";

export default function Scanner() {

    const [mensagem, setMensagem] = useState("");

    function utilizarScanner() {
        setMensagem(
            "Scanner ativado! O documento será identificado e enquadrado automaticamente."
        );
    }

    return (
        <section id="scanner" className="bg-white p-5 md:p-8 mb-8 rounded-xl dark:bg-zinc-900 dark:text-zinc-100">

            <h2 className="text-2xl font-bold mb-4">Scanner inteligente</h2>

            <p className="mb-5 leading-relaxed">
                O scanner identifica documentos automaticamente,
                ajusta o enquadramento e facilita o salvamento da imagem.
            </p>

            <button
                className="px-5 py-3 rounded-md bg-zinc-800 text-white cursor-pointer hover:bg-zinc-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                onClick={utilizarScanner}
            >
                Utilizar scanner
            </button>

            {mensagem && (
                <p className="mt-4 p-3 bg-gray-100 rounded-md text-sm dark:bg-zinc-800">
                    {mensagem}
                </p>
            )}

        </section>
    );
}