import Link from "next/link";

export default function Gs() {
    return (
        <div>
            <div className="conteudo">
                <h1>GlobalSolution</h1>
                <p>As avaliações de Global Solution são ponto alto do nosso aprendizado, onde aplicamos de forma integrada os conhecimentos adquiridos ao <br />
                logo das disciplinas. Esses projetos desafiadores exigem que desenvolvamos soluções criativas e abrangentes, combinando diversas áreas <br />
                de estudo para resolver problemas complexos.
                <br />
                Neste portifólio, você encontrará nossos projetos de Global Solution, que refletem não apenas o que aprendemos, mas também como <br />
                conseguimos aplicar esse aprendizado em contextos atuais.</p>
            </div>
            <div className="integrantes">
                <nav>
                    <ul>
                        <li><Link href="/integrantes/duda-gs">Eduarda Tiemi</Link></li>
                        <li><Link href="/integrantes/pizzi-gs">Felipe Pizzinato</Link></li>
                        <li><Link href="/integrantes/sora-gs">Felipe Sora</Link></li>
                        <li><Link href="/integrantes/gu-gs">Gustavo Sandrini</Link></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}
