import { NextResponse } from "next/server";

const albuns = [
    { id: 1, nome: "Trabalho", itens: 120, categoria: "Profissional" },
    { id: 2, nome: "Viagem", itens: 85, categoria: "Pessoal" },
    { id: 3, nome: "Documentos", itens: 42, categoria: "Profissional" },
    { id: 4, nome: "Família", itens: 63, categoria: "Pessoal" },
    { id: 5, nome: "Estudos", itens: 31, categoria: "Estudos" },
    { id: 6, nome: "Projetos", itens: 18, categoria: "Estudos" }
];

export async function GET() {
    return NextResponse.json(albuns);
}