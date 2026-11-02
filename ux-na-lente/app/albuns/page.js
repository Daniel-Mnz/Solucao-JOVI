"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function PaginaAlbuns() {

    const router = useRouter();
    const [usuarioLogado, , carregado] = useLocalStorage("usuarioLogado", null);

    const [albuns, setAlbuns] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        if (carregado && !usuarioLogado) {
            router.replace("/login");
        }
    }, [carregado, usuarioLogado, router]);

    useEffect(() => {
        async function buscarAlbuns() {
            try {
                const resposta = await axios.get("/api/albuns");
                setAlbuns(resposta.data);
            } catch (e) {
                setErro("Não foi possível carregar os álbuns.");
            } finally {
                setCarregando(false);
            }
        }

        buscarAlbuns();
    }, []);

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

                <div className="flex-1 p-4 md:p-10">

                    <section className="bg-white p-5 md:p-8 mb-8 rounded-xl dark:bg-zinc-900 dark:text-zinc-100">

                        <h2 className="text-2xl font-bold mb-4">Álbuns</h2>

                        {carregando && <p>Carregando álbuns...</p>}

                        {erro && <p className="text-red-600">{erro}</p>}

                        {!carregando && !erro && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {albuns.map((album) => (
                                    <li
                                        key={album.id}
                                        className="p-4 bg-gray-100 rounded-md dark:bg-zinc-800"
                                    >
                                        <h3 className="font-bold text-lg">{album.nome}</h3>
                                        <p className="text-sm text-gray-600 dark:text-zinc-400">
                                            {album.itens} itens
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-zinc-400">
                                            {album.categoria}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}

                    </section>

                </div>

            </div>
        </div>
    );
}