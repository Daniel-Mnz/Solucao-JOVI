"use client";

import { useState } from "react";

export default function Slideshow() {

    const imagens = [
        "/images/scanner.png",
        "/images/seletor.png",
        "/images/acessibilidade.png"
    ];

    const [indiceAtual, setIndiceAtual] = useState(0);

    function proximo() {
        setIndiceAtual((indiceAtual + 1) % imagens.length);
    }

    function anterior() {
        setIndiceAtual((indiceAtual - 1 + imagens.length) % imagens.length);
    }

    return (
        <section id="slideshow" className="slideshow">

            <h2>Galeria do Projeto</h2>

            <p>
                Visualização das funcionalidades da UX na Lente.
            </p>

            <div className="slideshow-container">

                <button onClick={anterior}>❮</button>

                <img src={imagens[indiceAtual]} alt="Demonstração da funcionalidade" />

                <button onClick={proximo}>❯</button>

            </div>

        </section>
    );
}
