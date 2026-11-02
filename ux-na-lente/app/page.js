"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Landing from "../components/landing";
import useLocalStorage from "../hooks/useLocalStorage";

export default function PaginaLanding() {

    const router = useRouter();
    const [usuarioLogado, , carregado] = useLocalStorage("usuarioLogado", null);

    useEffect(() => {
        if (carregado && usuarioLogado) {
            router.replace("/inicio");
        }
    }, [carregado, usuarioLogado, router]);

    if (!carregado || usuarioLogado) {
        return null;
    }

    return <Landing aoEntrar={() => router.push("/login")} />;
}