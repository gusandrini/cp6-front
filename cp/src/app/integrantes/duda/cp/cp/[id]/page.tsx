"use client";
import { TipoTrabalhos } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CP({ params }: { params: Promise<{ id: number }> }) {
    const navigate = useRouter();

    const [trabalho, setTrabalho] = useState<TipoTrabalhos>({
        id: 0,
        nome: "",
        descricao: "",
        materia: "",
        nota: 0,
    });

    // Usando React.use() para lidar com o params sendo uma Promise
    useEffect(() => {
        const fetchParams = async () => {
            const resolvedParams = await params;
            const id = Number(resolvedParams?.id);
            
            if (!isNaN(id)) {
                const chamadaApi = async () => {
                    try {
                        // Fazer a requisição para obter o checkpoint específico
                        const response = await fetch(`http://localhost:3000/api/eduarda/checkpoint/${id}`);
                        const data = await response.json();
                        setTrabalho(data);
                    } catch (error) {
                        console.error("Erro ao buscar dados do checkpoint: ", error);
                    }
                };
                chamadaApi();
            }
        };

        fetchParams();
    }, [params]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const resolvedParams = await params;
            const id = Number(resolvedParams?.id);

            if (isNaN(id)) {
                alert("ID inválido!");
                return;
            }

            // Fazer a requisição para atualizar o checkpoint específico
            const response = await fetch(`http://localhost:3000/api/eduarda/checkpoint/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(trabalho)
            });

            if (response.ok) {
                alert("Checkpoint atualizado com sucesso!");
                setTrabalho({
                    id: 0,
                    nome: "",
                    descricao: "",
                    materia: "",
                    nota: 0,
                });

                navigate.push("/integrantes/duda/cp");
            } else {
                const errorData = await response.json();
                console.error("Erro ao atualizar checkpoint: ", errorData.error);
                alert("Erro ao atualizar checkpoint: " + errorData.error);
            }

        } catch (error) {
            console.error("Erro ao atualizar checkpoint: ", error);
        }
    };

    return (
        <div>
            <div className="container_cadastro">
                <h1>Atualização de CheckPoint</h1>
                <form onSubmit={handleSubmit}>
                    <div className="label_input">
                        <label htmlFor="idNome">Nome do Trabalho:</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"
                            value={trabalho?.nome}
                            placeholder="Digite o nome do trabalho"
                            className="text-black"
                            required
                            onChange={(e) => setTrabalho({ ...trabalho, nome: e.target.value })}
                        />
                    </div>
                    <div className="label_input">
                        <label htmlFor="idDescricao">Descrição do Trabalho:</label>
                        <input
                            type="text"
                            name="descricao"
                            id="idDescricao"
                            value={trabalho?.descricao}
                            placeholder="Digite a descrição do trabalho"
                            className="text-black"
                            required
                            onChange={(e) => setTrabalho({ ...trabalho, descricao: e.target.value })}
                        />
                    </div>
                    <div className="label_input">
                        <label htmlFor="idMateria">Matéria do Trabalho:</label>
                        <input
                            type="text"
                            name="materia"
                            id="idMateria"
                            value={trabalho?.materia}
                            placeholder="Digite a matéria do trabalho"
                            className="text-black"
                            required
                            onChange={(e) => setTrabalho({ ...trabalho, materia: e.target.value })}
                        />
                    </div>
                    <div className="label_input">
                        <label htmlFor="idNota">Nota do Trabalho:</label>
                        <input
                            type="number"
                            name="nota"
                            id="idNota"
                            value={trabalho?.nota}
                            placeholder="Digite a nota do trabalho"
                            className="text-black"
                            required
                            onChange={(e) => setTrabalho({ ...trabalho, nota: parseFloat(e.target.value) })}
                        />
                    </div>
                    <div>
                        <button type="submit" className="botao_cadastrar">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
