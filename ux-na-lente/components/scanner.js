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
        <section id="scanner" className="scanner">

            <h2>Scanner inteligente</h2>

            <p>
                O scanner identifica documentos automaticamente,
                ajusta o enquadramento e facilita o salvamento da imagem.
            </p>

            <button onClick={utilizarScanner}>
                Utilizar scanner
            </button>

            {mensagem && (
                <p className="mensagem-scanner">
                    {mensagem}
                </p>
            )}

        </section>
    );
}