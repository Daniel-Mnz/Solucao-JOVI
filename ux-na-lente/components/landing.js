export default function Landing({ aoEntrar }) {

    const funcionalidades = [
        {
            titulo: "Scanner inteligente",
            descricao: "Identifica documentos pela câmera, ajusta o enquadramento e facilita o salvamento da imagem."
        },
        {
            titulo: "Seletor de destino",
            descricao: "Recomenda a pasta ideal para a foto com base em data, horário e localização."
        },
        {
            titulo: "Acessibilidade",
            descricao: "Modo escuro e interface simples para facilitar o uso em qualquer situação."
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-900 text-white">

            <header className="flex justify-between items-center px-5 md:px-12 py-5">
                <span className="text-xl font-bold">UX na Lente</span>

                <button
                    className="px-4 py-2 rounded-md border border-white cursor-pointer hover:bg-white hover:text-zinc-900"
                    onClick={aoEntrar}
                >
                    Entrar
                </button>
            </header>

            <section className="px-5 md:px-12 py-16 md:py-28 text-center max-w-3xl mx-auto">

                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    Uma câmera mais simples e inteligente
                </h1>

                <p className="text-base md:text-lg text-zinc-300 mb-8 leading-relaxed">
                    O UX na Lente melhora a experiência do usuário na câmera da JOVI,
                    com scanner de documentos, sugestão automática de pastas e
                    recursos de acessibilidade.
                </p>

                <button
                    className="px-8 py-3 rounded-md bg-white text-zinc-900 font-bold cursor-pointer hover:bg-zinc-300"
                    onClick={aoEntrar}
                >
                    Acessar o projeto
                </button>

            </section>

            <section className="px-5 md:px-12 pb-16 md:pb-24">

                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                    O que o UX na Lente oferece
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {funcionalidades.map((item) => (
                        <div
                            key={item.titulo}
                            className="bg-zinc-800 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-bold mb-3">{item.titulo}</h3>
                            <p className="text-zinc-300 leading-relaxed">{item.descricao}</p>
                        </div>
                    ))}

                </div>

            </section>

            <footer className="text-center text-sm text-zinc-400 py-6 border-t border-zinc-700">
                UX na Lente · Challenge JOVI 2026
            </footer>

        </div>
    );
}