"use client";

import { useState } from "react";

export default function Seletor() {

    const [mensagem, setMensagem] = useState("");

    function organizarFoto() {
        setMensagem(
            "Foto analisada! A pasta recomendada para esta foto foi selecionada."
        );
    }

    return (
        <section id="seletor" className="seletor">

            <h2>Seletor inteligente</h2>

            <p>
                O sistema recomenda uma pasta para a foto
                com base em informações como data, horário
                e localização.
            </p>

            <button onClick={organizarFoto}>
                Organizar foto
            </button>

            {mensagem && (
                <p className="mensagem-seletor">
                    {mensagem}
                </p>
            )}

        </section>
    );
}