import Link from "next/link";
import Image from 'next/image';

import Github from '../../Images/github.png';
import fotoEduarda from '../../Images/foto-duda-750px.jpg';
import fotoGustavo from '../../Images/foto-gustavo-750px.jpg';
import fotoFelipeSora from '../../Images/foto-felipe-sora-750px.jpg'


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
                <h1>Nossa Equipe</h1>
                <nav>
                    <ul>
                        <li><Image src={fotoEduarda} width={182} height={176} alt="Foto Eduarda" className="foto_integrante"/><Link href="/integrantes/duda/challenge" className="links_integrantes">Eduarda Tiemi</Link></li>
                        <li><Image src={Github} width={182} height={176} alt="Foto Felipe Pizzinato" className="foto_integrante"/><Link href="/integrantes/pizzi/challenge" className="links_integrantes">Felipe Pizzinato</Link></li>
                        <li><Image src={fotoFelipeSora} width={182} height={176} alt="Foto Felipe Sora" className="foto_integrante"/><Link href="/integrantes/sora/challenge" className="links_integrantes">Felipe Sora</Link></li>
                        <li><Image src={fotoGustavo} width={182} height={176} alt="Foto Gustavo" className="foto_integrante"/><Link href="/integrantes/gu/challenge" className="links_integrantes">Gustavo Sandrini</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
