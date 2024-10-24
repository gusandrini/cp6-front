import { TipoTrabalhos } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        // Carregar o arquivo JSON
        const file = await fs.readFile(process.cwd() + '/src/data/felipe-pizzinato.json', 'utf-8');
        const data = JSON.parse(file);

        // Certificar que o campo 'challenge' existe
        if (data && data.challenge) {
            // Encontrar o trabalho específico pelo ID nos 'challenge'
            const trabalho = data.challenge.find((p: TipoTrabalhos) => p.id == params.id);

            // Verificar se o trabalho foi encontrado
            if (!trabalho) {
                return NextResponse.json({ error: "Challenge não encontrado." });
            }

            // Retornar o challenge encontrado
            return NextResponse.json(trabalho);
        } else {
            return NextResponse.json({ error: "Campo 'challenge' não encontrado no JSON." });
        }
    } catch (error) {
        return NextResponse.json({ error: "Erro ao selecionar trabalho!: " + error });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    try {
        // Carregar o arquivo JSON
        const file = await fs.readFile(process.cwd() + '/src/data/felipe-pizzinato.json', 'utf-8');
        const data = JSON.parse(file);

        // Certificar que o campo 'challenge' existe
        if (data && data.challenge) {
            // Encontrar o índice do item a ser deletado
            const idTrabalho = data.challenge.findIndex((p: TipoTrabalhos) => p.id == params.id);

            // Verificar se o item foi encontrado
            if (idTrabalho === -1) {
                return NextResponse.json({ error: "Trabalho não encontrado." });
            }

            // Remover o item do array
            data.challenge.splice(idTrabalho, 1);

            // Atualizar o arquivo JSON
            const fileUpdate = JSON.stringify(data, null, 2); // Adicione 'null, 2' para formatar
            await fs.writeFile(process.cwd() + '/src/data/felipe-pizzinato.json', fileUpdate);

            return NextResponse.json({ msg: "Trabalho removido com sucesso!" });
        } else {
            return NextResponse.json({ error: "Campo 'challenge' não encontrado no JSON." });
        }
    } catch (error) {
        return NextResponse.json({ error: "Erro ao excluir o trabalho!: " + error });
    }
}

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    try {
        // Carregar o arquivo JSON
        const file = await fs.readFile(process.cwd() + '/src/data/felipe-pizzinato.json', 'utf-8');
        const data = JSON.parse(file);

        // Certificar que o campo 'challenge' existe
        if (data && data.challenge) {
            // Encontrar o índice do challenge a ser atualizado
            const indice = data.challenge.findIndex((p: TipoTrabalhos) => p.id == params.id);

            if (indice !== -1) {
                // Obter os dados atualizados do corpo da requisição
                const trabalhoAtualizado: TipoTrabalhos = await request.json();

                // Atualizar o challenge no índice encontrado
                data.challenge[indice] = { ...data.challenge[indice], ...trabalhoAtualizado };

                // Atualizar o arquivo JSON
                const fileUpdate = JSON.stringify(data, null, 2); // Adicione um `null, 2` para formatação legível
                await fs.writeFile(process.cwd() + '/src/data/felipe-pizzinato.json', fileUpdate);

                return NextResponse.json({ msg: "challenge atualizado com sucesso!" });
            } else {
                return NextResponse.json({ error: "challenge não encontrado." });
            }
        } else {
            return NextResponse.json({ error: "Campo 'challenge' não encontrado no JSON." });
        }
    } catch (error) {
        return NextResponse.json({ error: "Erro ao atualizar trabalho!: " + error });
    }
}
