"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Conteudo from "../../components/conteudo";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function PaginaInicio() {

    const router = useRouter();
    const [usuarioLogado, , carregado] = useLocalStorage("usuarioLogado", null);

    useEffect(() => {
        if (carregado && !usuarioLogado) {
            router.replace("/login");
        }
    }, [carregado, usuarioLogado, router]);

    function sair() {
        localStorage.removeItem("usuarioLogado");
        router.push("/");
    }

    if (!carregado || !usuarioLogado) {
        return null;
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