import Link from "next/link";
import Image from 'next/image';

import fotoFelipePizzinato from '../../Images/foto-felipe-pizzinato-750px.jpeg';
import fotoEduarda from '../../Images/foto-duda-750px.jpg';
import fotoGustavo from '../../Images/foto-gustavo-750px.jpg';
import fotoFelipeSora from '../../Images/foto-felipe-sora-750px.jpg'

export default function Gs() {
    return (
        <div className="container_conteudo">
            <div className="conteudo">
                <h1>GlobalSolution</h1>
                <p>As avaliações de Global Solution são ponto alto do nosso aprendizado, onde aplicamos de forma integrada os conhecimentos adquiridos ao <br />
                logo das disciplinas. Esses projetos desafiadores exigem que desenvolvamos soluções criativas e abrangentes, combinando diversas áreas <br />
                de estudo para resolver problemas complexos.</p>
                <p>Neste portifólio, você encontrará nossos projetos de Global Solution, que refletem não apenas o que aprendemos, mas também como <br />
                conseguimos aplicar esse aprendizado em contextos atuais.</p>
            </div>
            <div className="integrantes">
                <h1>Nossa Equipe</h1>
                <nav>
                    <ul>
                        <li><Image src={fotoEduarda} width={182} height={176} alt="Foto Eduarda" className="foto_integrante"/><Link href="/integrantes/duda/gs" className="links_integrantes">Eduarda Tiemi</Link></li>
                        <li><Image src={fotoFelipePizzinato} width={182} height={176} alt="Foto Felipe Pizzinato" className="foto_integrante"/><Link href="/integrantes/pizzi/gs" className="links_integrantes">Felipe Pizzinato</Link></li>
                        <li><Image src={fotoFelipeSora} width={182} height={176} alt="Foto Felipe Sora" className="foto_integrante"/><Link href="/integrantes/sora/gs" className="links_integrantes">Felipe Sora</Link></li>
                        <li><Image src={fotoGustavo} width={182} height={176} alt="Foto Gustavo" className="foto_integrante"/><Link href="/integrantes/gu/gs" className="links_integrantes">Gustavo Sandrini</Link></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}
