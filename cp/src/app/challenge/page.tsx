import Link from "next/link";

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
        </div>
    )
}
