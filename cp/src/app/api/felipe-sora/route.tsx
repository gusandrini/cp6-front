import { NextResponse } from "next/server";
import { promises as fs } from "fs";

// Métodos GET

export async function GET() {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/felipe-sora.json', 'utf-8');
        const trabalhos = JSON.parse(file);

        return NextResponse.json(trabalhos);

    } catch (error) {
        return NextResponse.json({ error: "Erro ao recuperar os dados!: " + error });
    }
}
