import Link from 'next/link';

export default function Menu() {
  return (
    <div className="menu">
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/cp">CheckPoint</Link></li>
                <li><Link href="/gs">GlobalSolution</Link></li>
                <li><Link href="/challenge">Challenge Sprints</Link></li>
            </ul>
        </nav>
    </div>
  )
}
