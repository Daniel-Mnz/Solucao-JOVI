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
        <section className="login-page">
            <div className="login-card">

                <h1>UX na Lente</h1>

                <p>Entre para acessar o projeto</p>

                <input
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    placeholder="Usuário"
                />

                <input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    placeholder="Senha"
                />

                <button onClick={entrar}>
                    Entrar
                </button>

                <p className="mensagem-erro">{mensagemErro}</p>

            </div>
        </section>
    );
}
