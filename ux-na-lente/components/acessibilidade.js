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
        <section id="acessibilidade" className="acessibilidade">

            <h2>Acessibilidade</h2>

            <p>
                Ative o modo escuro para facilitar
                a leitura em ambientes com pouca luz.
            </p>

            <button onClick={alternarModoEscuro}>
                {modoEscuro
                    ? "Desativar modo escuro"
                    : "Ativar modo escuro"
                }
            </button>

        </section>
    );
}