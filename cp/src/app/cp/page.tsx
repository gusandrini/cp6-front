import Link from 'next/link';
import Gu from '../../Images/foto-cv.jpg'
import Duda from '../../Images/foto-duda.jpg'
import Image from "next/image";

export default function Cp() {
    return (
        <div>
            <div className="conteudo">
                <h1>CheckPoints</h1>
                <p>Ao longo do curso, os CheckPoints são, momentos essenciais para acompanhar nosso progresso e garantir que estamos avançando de forma <br />
                sólida em direção aos nossos objetivos. Essas avaliações intermediárias permitem ajustes no nosso aprendizado e desenvolvimento de <br />
                projetos, ajudando a equipe a se manter alinhada com as metas propostas. <br />
                <br />
                Cada CheckPoint reflete uma etapa importante do nosso crescimento acadêmico, e aqui você pode conferir nossas conquistas até o <br />
                momento.</p>
            </div>
            <div className="cards-i">
                <h1>Nossa equipe:</h1>
                <div className="duda">
                    <Image src={Duda} width={500} height={300} alt="integrante Eduarda" />
                    <nav>
                        <ul>
                            <li><Link href="/integrantes/duda-cp">Eduarda Tiemi <br />RM:554756</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* <div className="pizzi">
                    <Image src={} width={500} height={300} alt="integrante Felipe Pizzinato" />
                    <nav>
                        <ul>
                            <li><Link href="/integrantes/pizzi-cp">Felipe Pizzinato <br/> RM: ?????</li>
                        </ul>
                    </nav>
                </div>

                <div className="sora">
                    <Image src={} width={500} height={300} alt="integrante Felipe Sora" />
                    <nav>
                        <ul>
                            <li><Link href="/integrantes/sora-cp">Felipe Sora <br/> RM: ?????</li>
                        </ul>
                    </nav>
                </div> */}

                <div className="gu">
                    <Image src={Gu} width={500} height={300} alt="integrante gustavo" />
                    <nav>
                        <ul>
                            <li><Link href="/integrantes/gu-cp">Gustavo Sandrini <br />RM:557505</Link></li>
                        </ul>
                    </nav>
                </div>

                
            </div>
        </div>
    )
}
