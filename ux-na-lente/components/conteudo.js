import Main from "./main";
import Scanner from "./scanner";
import Seletor from "./seletor";
import Acessibilidade from "./acessibilidade";

export default function Conteudo() {
    return (
        <div className="conteudo">

            <Main />

            <Scanner />

            <Seletor />

            <Acessibilidade />

        </div>
    );
}