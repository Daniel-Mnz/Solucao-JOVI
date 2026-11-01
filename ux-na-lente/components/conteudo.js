import Main from "./main";
import Scanner from "./scanner";
import Seletor from "./seletor";
import Acessibilidade from "./acessibilidade";

export default function Conteudo() {
    return (
        <div className="flex-1 p-4 md:p-10">

            <Main />

            <Scanner />

            <Seletor />

            <Acessibilidade />

        </div>
    );
}