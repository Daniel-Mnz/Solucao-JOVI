"use client";

import { useState, useEffect } from "react";

export default function Acessibilidade() {

    const [ativada, setAtivada] = useState(false);

    useEffect(() => {
        const salvo = localStorage.getItem("acessibilidadeAtiva");

        if (salvo === "true") {
            setAtivada(true);
        }
    }, []);

    function alternarAcessibilidade() {
        const novoValor = !ativada;

        setAtivada(novoValor);

        localStorage.setItem("acessibilidadeAtiva", novoValor);
    }

    return (
        <section
            id="acessibilidade"
            className={ativada ? "acessibilidade acessibilidade-ativa" : "acessibilidade"}
        >

            <h2>Acessibilidade</h2>

            <p>
                A interface foi pensada para facilitar o uso
                por diferentes perfis de usuários.
            </p>

            <button onClick={alternarAcessibilidade}>
                {ativada
                    ? "Desativar acessibilidade"
                    : "Ativar acessibilidade"
                }
            </button>

        </section>
    );
}
