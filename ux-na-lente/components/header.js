export default function Header({ usuarioLogado }) {
    return (
        <header className="header">

            <h1>UX na Lente</h1>

            <p>
                Melhorando a experiência do usuário na câmera da JOVI
            </p>

            {usuarioLogado && (
                <p className="saudacao-usuario">
                    Bem-vindo, {usuarioLogado}
                </p>
            )}

        </header>
    );
}
