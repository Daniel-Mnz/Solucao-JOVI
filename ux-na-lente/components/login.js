"use client";

import { useState } from "react";

export default function Login({ aoLogar }) {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    function entrar() {

        const nomeUsuario = usuario.trim();
        const senhaUsuario = senha.trim();

        if (nomeUsuario === "" || senhaUsuario === "") {
            setMensagemErro("Preencha usuário e senha para continuar.");
            return;
        }

        setMensagemErro("");
        aoLogar(nomeUsuario);
    }

    return (
        <section className="min-h-screen flex justify-center items-center bg-zinc-800 p-4">
            <div className="w-full max-w-[340px] bg-white p-10 rounded-xl flex flex-col gap-4">

                <h1 className="text-center text-3xl font-bold">UX na Lente</h1>

                <p className="text-center text-gray-600">
                    Entre para acessar o projeto
                </p>

                <input
                    className="p-3 border border-gray-300 rounded-md text-base outline-none focus:border-zinc-800"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    placeholder="Usuário"
                />

                <input
                    className="p-3 border border-gray-300 rounded-md text-base outline-none focus:border-zinc-800"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    placeholder="Senha"
                />

                <button
                    className="p-3 rounded-md bg-zinc-800 text-white text-base cursor-pointer hover:bg-zinc-600"
                    onClick={entrar}
                >
                    Entrar
                </button>

                <p className="min-h-[18px] text-center text-sm text-red-600">
                    {mensagemErro}
                </p>

            </div>
        </section>
    );
}