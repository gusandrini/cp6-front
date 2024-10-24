import Link from 'next/link';
import Image from "next/image";

import Github from '../../Images/github.png';
import fotoEduarda from '../../Images/foto-duda-750px.jpg';
import fotoGustavo from '../../Images/foto-gustavo-750px.jpg';
import fotoFelipeSora from '../../Images/foto-felipe-sora-750px.jpg'

export default function Cp() {
    return (
        <div className="container_conteudo">
            <div className="conteudo">
                <h1>CheckPoints</h1>
                <p>Ao longo do curso, os CheckPoints são, momentos essenciais para acompanhar nosso progresso e garantir que estamos avançando de forma <br />
                sólida em direção aos nossos objetivos. Essas avaliações intermediárias permitem ajustes no nosso aprendizado e desenvolvimento de <br />
                projetos, ajudando a equipe a se manter alinhada com as metas propostas.</p>
                <p>Cada CheckPoint reflete uma etapa importante do nosso crescimento acadêmico, e aqui você pode conferir nossas conquistas até o <br />
                momento.</p>
            </div>
            <div className="integrantes">
                <h1>Nossa Equipe</h1>
                <nav>
                    <ul>
                        <li><Image src={fotoEduarda} width={182} height={176} alt="Foto Eduarda" className="foto_integrante"/><Link href="/integrantes/duda/cp" className="links_integrantes">Eduarda Tiemi</Link></li>
                        <li><Image src={Github} width={182} height={176} alt="Foto Felipe Pizzinato" className="foto_integrante"/><Link href="/integrantes/pizzi/cp" className="links_integrantes">Felipe Pizzinato</Link></li>
                        <li><Image src={fotoFelipeSora} width={182} height={176} alt="Foto Felipe Sora" className="foto_integrante"/><Link href="/integrantes/sora/cp" className="links_integrantes">Felipe Sora</Link></li>
                        <li><Image src={fotoGustavo} width={182} height={176} alt="Foto Gustavo" className="foto_integrante"/><Link href="/integrantes/gu/cp" className="links_integrantes">Gustavo Sandrini</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
