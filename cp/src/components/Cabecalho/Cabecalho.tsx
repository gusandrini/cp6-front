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
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Home</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
        </div>
    )
}
