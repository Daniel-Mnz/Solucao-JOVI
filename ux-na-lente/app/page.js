"use client";

import { useState, useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Conteudo from "../components/conteudo";
import Login from "../components/login";

export default function Home() {

    const [usuarioLogado, setUsuarioLogado] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem("usuarioLogado");

        if (usuarioSalvo) {
            setUsuarioLogado(usuarioSalvo);
        }

        setCarregando(false);
    }, []);

    function aoLogar(nome) {
        localStorage.setItem("usuarioLogado", nome);
        setUsuarioLogado(nome);
    }

    function sair() {
        localStorage.removeItem("usuarioLogado");
        setUsuarioLogado(null);
    }

    if (carregando) {
        return null;
    }

    if (!usuarioLogado) {
        return <Login aoLogar={aoLogar} />;
    }

    return (
        <div>
            <Header usuarioLogado={usuarioLogado} />

            <div className="layout">

                <Sidebar aoSair={sair} />

                <Conteudo />

            </div>
        </div>
    );
}
