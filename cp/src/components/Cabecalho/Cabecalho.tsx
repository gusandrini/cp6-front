import Image from 'next/image';
import Link from 'next/link';

export default function Cabecalho() {
    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/cp">CP</Link></li>
                            <li><Link href="/gs">GS</Link></li>
                            <li><Link href="/challenge">Challenge</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
        </div>
    )
}
