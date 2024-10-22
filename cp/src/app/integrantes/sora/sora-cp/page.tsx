"use client";
import { TipoTrabalhos } from "@/types";
import { useEffect, useState } from "react";

export default function Sora() {

    const [lista, setLista] = useState<TipoTrabalhos[]>([]);

    useEffect(() => {
        const chamadaApi = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/felipe-sora");
                const data = await response.json();
                console.log(data);

                // Filtrando apenas os dados de 'checkpoints'
                if (data && data.checkpoints) {
                    setLista(data.checkpoints);
                } else {
                    console.error("Dados de checkpoints não encontrados.");
                }
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        chamadaApi();
    }, []);

    return (
        <div>
            <h1>CheckPoints - Felipe Sora</h1>
            {Array.isArray(lista) && lista.map((trabalho) => (
                <div key={trabalho.id}>
                    <p>{trabalho.nome}</p>
                    <p>{trabalho.descricao}</p>
                    <p>{trabalho.materia}</p>
                    <p>{trabalho.nota}</p>
                </div>
            ))}
        </div>
    );
}
