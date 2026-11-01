export default function Header({ usuarioLogado }) {
    return (
        <header className="bg-white p-8 border-b border-gray-300 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100">

            <h1 className="text-3xl font-bold mb-2">UX na Lente</h1>

            <p className="text-base">
                Melhorando a experiência do usuário na câmera da JOVI
            </p>

            {usuarioLogado && (
                <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
                    Bem-vindo, {usuarioLogado}
                </p>
            )}

        </header>
    );
}