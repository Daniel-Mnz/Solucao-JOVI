import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Conteudo from "../components/conteudo";

export default function Home() {
    return (
        <div>
            <Header />

            <div className="layout">

                <Sidebar />

                <Conteudo />

            </div>
        </div>
    );
}