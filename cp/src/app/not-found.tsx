import Link from 'next/link';
import Image from "next/image";

import fotoErro from "@/Images/error-404.png";

export default function NotFound() {
  return (
    <div className="NotFound">
      <Image src={fotoErro} alt="Imagem de erro 404" className="foto_erro"/>
      <Link href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
