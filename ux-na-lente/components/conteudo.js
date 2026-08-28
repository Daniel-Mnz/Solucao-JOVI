import Main from "./main";
import Scanner from "./scanner";
import Seletor from "./seletor";
import Acessibilidade from "./acessibilidade";
import Slideshow from "./slideshow";

export default function Conteudo() {
    return (
        <div className="conteudo">

            <Main />

            <Scanner />

            <Seletor />

            <Acessibilidade />

            <Slideshow />

        </div>
    );
}
