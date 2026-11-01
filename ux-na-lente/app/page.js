"use client";

import { useState, useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Conteudo from "../components/conteudo";
import Login from "../components/login";
import Landing from "../components/landing";

export default function Home() {

    const [usuarioLogado, setUsuarioLogado] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [mostrarLogin, setMostrarLogin] = useState(false);

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
        setMostrarLogin(false);
    }

    if (carregando) {
        return null;
    }

    if (!usuarioLogado) {
        if (!mostrarLogin) {
            return <Landing aoEntrar={() => setMostrarLogin(true)} />;
        }

        return <Login aoLogar={aoLogar} />;
    }

    return (
        <div>
            <Header usuarioLogado={usuarioLogado} />

            <div className="flex flex-col md:flex-row min-h-[calc(100vh-100px)]">

                <Sidebar aoSair={sair} />

                <Conteudo />

            </div>
        </div>
    );
}