import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="NotFound">
      <Link href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
