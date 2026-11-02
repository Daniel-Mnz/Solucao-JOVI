"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "../../components/login";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function PaginaLogin() {

    const router = useRouter();
    const [usuarioLogado, , carregado] = useLocalStorage("usuarioLogado", null);

    useEffect(() => {
        if (carregado && usuarioLogado) {
            router.replace("/inicio");
        }
    }, [carregado, usuarioLogado, router]);

    function aoLogar(nome) {
        localStorage.setItem("usuarioLogado", JSON.stringify(nome));
        router.push("/inicio");
    }

    if (!carregado || usuarioLogado) {
        return null;
    }

    return <Login aoLogar={aoLogar} />;
}