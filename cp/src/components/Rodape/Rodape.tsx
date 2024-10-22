import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../../Images/instagram.png'
import Linkedin from '../../Images/linkedin.png';
import Github from '../../Images/github.png';

export default function Rodape() {
    return (
        <footer className='rodape'>
            <div className="container-footer">
                <div className="redes_sociais">
                    <h2>
                        Acompanhe as nossas principais Redes Sociais!
                    </h2>

                    <div className='container_redes'>
                        <div className='redes github'>
                            <Image src={Github} width={50} height={30} alt="Logo do GitHub" />
                            <ul>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='GitHub de Eduarda Tiemi' href="">Eduarda Tiemi</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='GitHub de Felipe Pizzinato' href="">Felipe Pizzinato</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='GitHub de Felipe Sora' href="">Felipe Sora</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='GitHub de Gustavo Sandrini' href="">Gustavo Sandrini</a></li>
                            </ul>
                        </div>
                        <div className='redes instagram'>
                            <Image src={Instagram} width={50} height={30} alt="Logo do Instagram" />
                            <ul>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Instagram de Eduarda Tiemi' href="">Eduarda Tiemi</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Instagram de Felipe Pizzinato' href="">Felipe Pizzinato</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Instagram de Felipe Sora' href="">Felipe Sora</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Instagram de Gustavo Sandrini' href="">Gustavo Sandrini</a></li>
                            </ul>
                        </div>
                        <div className='redes linkedin'>
                            <Image src={Linkedin} width={50} height={30} alt="Logo do Linkedin" />
                            <ul>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Linkedin de Eduarda Tiemi' href="">Eduarda Tiemi</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Linkedin de Felipe Pizzinato' href="">Felipe Pizzinato</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Linkedin de Felipe Sora' href="">Felipe Sora</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Linkedin de Gustavo Sandrini' href="">Gustavo Sandrini</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
       
            
        
    )
}
