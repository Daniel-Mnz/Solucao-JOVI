"use client";

import { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Conteudo from "../components/conteudo";
import Login from "../components/login";
import Landing from "../components/landing";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {

    const [usuarioLogado, setUsuarioLogado, carregado] = useLocalStorage("usuarioLogado", null);
    const [mostrarLogin, setMostrarLogin] = useState(false);

    function aoLogar(nome) {
        setUsuarioLogado(nome);
    }

    function sair() {
        setUsuarioLogado(null);
        setMostrarLogin(false);
    }

    if (!carregado) {
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