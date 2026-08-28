import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import Scanner from "../components/scanner";
import Seletor from "../components/seletor";

export default function Home() {
    return (
        <div className="pagina">

            <Header />

            <div className="layout">

                <Sidebar />

                <div className="conteudo">

                    <Main />

                    <Scanner />

                    <Seletor />

                </div>

            </div>

        </div>
    );
}