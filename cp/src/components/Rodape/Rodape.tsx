import Image from 'next/image';
import Link from 'next/link';
import Insta from '../../Images/instagram.png'
import Linke from '../../Images/linkedin.png';
import Git from '../../Images/logotipo.png';

export default function Rodape() {
    return (
        <footer className='rodape'>
            <div className="container-footer">
                <div className="redes">
                    <h2>
                        Acompanhe as nossas principais Redes Sociais!
                    </h2>

                    <Image src={Insta} width={50} height={30} alt="logo instagram" />

                    <ul>
                        <li><a className='instagram-Sora' target='_blank' rel='noopener' title='site Instagram' href="">Eduarda Tiemi</a></li>
                        <li><a className='instagram-Pizzi' target='_blank' rel='noopener' title='site Instagram' href="">Felipe Pizzinato</a></li>
                        <li><a className='instagram-Duda' target='_blank' rel='noopener' title='site Instagram' href="">Felipe Sora</a></li>
                        <li><a className='instagram-Gu' target='_blank' rel='noopener' title='site Instagram' href="">Gustavo Sandrini</a></li>
                    </ul>

                    <Image src={Linke} width={50} height={30} alt="logo instagram" />

                    <ul>
                        <li><a className='link-Sora' target='_blank' rel='noopener' title='site Linkedin' href="">Eduarda Tiemi</a></li>
                        <li><a className='link-Pizzi' target='_blank' rel='noopener' title='site Linkedin' href="">Felipe Pizzinato</a></li>
                        <li><a className='link-Duda' target='_blank' rel='noopener' title='site Linkedin' href="">Felipe Sora</a></li>
                        <li><a className='link-Gu' target='_blank' rel='noopener' title='site Linkedin' href="">Gustavo Sandrini</a></li>
                    </ul>

                    <Image src={Git} width={50} height={30} alt="logo instagram" />

                    <ul>
                        <li><a className='git-Sora' target='_blank' rel='noopener' title='site GitHub' href="">Eduarda Tiemi</a></li>
                        <li><a className='git-Pizzi' target='_blank' rel='noopener' title='site GitHub' href="">Felipe Pizzinato</a></li>
                        <li><a className='git-Duda' target='_blank' rel='noopener' title='site GitHub' href="">Felipe Sora</a></li>
                        <li><a className='git-Gu' target='_blank' rel='noopener' title='site GitHub' href="">Gustavo Sandrini</a></li>
                    </ul>




                </div>
            </div>
        </footer>
       
            
        
    )
}
