import Link from "next/link";
import Gu from '../../Images/foto-cv.jpg'
import Duda from '../../Images/foto-duda.jpg'
import Image from "next/image";

export default function Challenge() {
    return (
        <div>
            <div className="container">
                <p>challenge</p>
                    <nav>
                        <ul>
                            <li><Link href="/integrantes/gu">gu</Link></li>
                            <li><Link href="/integrantes/duda">duda</Link></li>
                            <li><Link href="/integrantes/pizzi">pizzi</Link></li>
                            <li><Link href="/integrantes/sora">sora</Link></li>
                        </ul>
                    </nav>
            </div>
            <div className="conteudo">
                <h1>CheckPoints</h1>
                <p></p>
            </div>
            <div className="cards-i">
                <div className="duda">
                    <Image src={Duda} width={500} height={300} alt="integrante Eduarda" />
                    <p>Eduarda Tiemi Akamini Machado<br />RM:554756</p>
                </div>

                {/* <div className="pizzi">
                    <Image src={} width={500} height={300} alt="integrante Felipe Pizzinato" />
                    <p>Victor Agrela<br />RM:557345</p>
                </div>

                <div className="sora">
                    <Image src={} width={500} height={300} alt="integrante Felipe Sora" />
                    <p>Victor Agrela<br />RM:557345</p>
                </div> */}

                <div className="gu">
                    <Image src={Gu} width={500} height={300} alt="integrante gustavo" />
                    <p>Gustavo de Oliveira Turci Sandrini<br />RM:557505</p>
                </div>

                
            </div>
        </div>
    )
}
