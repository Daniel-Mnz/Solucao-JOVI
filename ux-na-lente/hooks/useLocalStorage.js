"use client";

import { useState, useEffect } from "react";

export default function useLocalStorage(chave, valorInicial) {

    const [valor, setValor] = useState(valorInicial);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        try {
            const salvo = localStorage.getItem(chave);

            if (salvo !== null) {
                setValor(JSON.parse(salvo));
            }
        } catch (erro) {
            console.error("Erro ao ler o localStorage:", erro);
        }

        setCarregado(true);
    }, [chave]);

    useEffect(() => {
        if (carregado) {
            localStorage.setItem(chave, JSON.stringify(valor));
        }
    }, [chave, valor, carregado]);

    return [valor, setValor, carregado];
}