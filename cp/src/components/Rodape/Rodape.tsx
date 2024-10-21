import Image from 'next/image';
import Link from 'next/link';
import Insta from '../../Images/instagram.png'
import Linke from '../../Images/linkedin.png';

export default function Rodape() {
    return (
        <footer className='rodape'>
            <div className="container-footer">
                <div className="redes">
                    <h2>
                        ACOMPANHE NOSSAS <br />
                        PRINCIPAIS REDES SOCIAIS!
                    </h2>

                    <Image src={Insta} width={50} height={30} alt="logo instagram" />

                    <ul>
                        <li><a className='instagram-Gu' target='_blank' rel='noopener' title='site Instagram' href="">Instagram Gu</a></li>
                        <li><a className='instagram-Pizzi' target='_blank' rel='noopener' title='site Instagram' href="">Instagram Pizzi</a></li>
                        <li><a className='instagram-Duda' target='_blank' rel='noopener' title='site Instagram' href="">Instagram Duda</a></li>
                        <li><a className='instagram-Sora' target='_blank' rel='noopener' title='site Instagram' href="">Instagram Sora</a></li>
                    </ul>

                    <Image src={Linke} width={50} height={30} alt="logo instagram" />

                    <ul>
                        <li><a className='link-Gu' target='_blank' rel='noopener' title='site Linkedin' href="">Linkedin Gu</a></li>
                        <li><a className='link-Pizzi' target='_blank' rel='noopener' title='site Linkedin' href="">Linkedin Pizzi</a></li>
                        <li><a className='link-Duda' target='_blank' rel='noopener' title='site Linkedin' href="">Linkedin Duda</a></li>
                        <li><a className='link-Sora' target='_blank' rel='noopener' title='site Linkedin' href="">Linkedin Sora</a></li>
                    </ul>


                </div>
            </div>
        </footer>
       
            
        
    )
}
