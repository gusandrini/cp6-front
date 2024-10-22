import Link from "next/link";


export default function Challenge() {
    return (
        <div className="container_conteudo">
            <div className="conteudo">
                <h1>Challenge Sprints</h1>
                <p>Os Challenges Sprints são avaliações focadas em resolução de problemas em prazos curtos e com entregas programadas. Esses desafios nos <br />
                colocam à prova, exigindo que aplicássemos nossos conhecimentos de forma ágil e eficiente, simulando o ritmo acelerado de ambientes profissionais reais.
                </p>
                <p>Nesta página, apresentamos os Challenge Sprints que completamos ao longo do curso, destacando nossa capacidade de adaptação e <br />
                inovação ao enfrentar problemas práticos em um tempo limitado.</p>
            </div>
            <div className="integrantes">
                <nav>
                    <ul>
                        <li><Link href="/integrantes/duda/duda-challe">Eduarda Tiemi</Link></li>
                        <li><Link href="/integrantes/pizzi/pizzi-challe">Felipe Pizzinato</Link></li>
                        <li><Link href="/integrantes/sora/sora-challe">Felipe Sora</Link></li>
                        <li><Link href="/integrantes/gu/gu-challe">Gustavo Sandrini</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
