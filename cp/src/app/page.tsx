import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='container'>
          <div className="introducao">
              <h1>Bem-vindo ao nosso Portifólio FIAP</h1>
              <p>Este é o portifólio oficial do nosso grupo, onde apresentamos os projetos e avaliações desenvolvidosao longo da nossa jornada acadêmica no <br />
              curso de Análise e Desenvolvimento de Sistemas na FIAP. Aqui, você encontrará detalhes sobre nossos trabalhos nas etapas de CheckPoints, <br />
              GlobalSolution, e Challenge Sprints, cada um representando um momento importante no nosso desenvolvimento técnico e profissional.</p>
          </div>
          <div className="objetivo">
              <h1>Nosso Objetivo</h1>
              <p>O principal objetivo deste portifólio é demonstrar o progresso continuo da nossa equipe em cada uma das avaliações propostas pela FIAP. <br />
              Através de desafios, integrações globais e checkpoints, desenvolvemos habilidades em tecnologia, trabalho em equipe e resolução de <br />
              problemas.</p>
          </div>
          <div className="estrutura">
              <h1>Estrutura do Portifólio</h1>
              <p>Navegue pelas seções do nosso portifólio para conhecer mais sobre cada etapa de nossa evolução:</p>
                  <ul>
                      <li>CheckPoints: Avaliações intermediárias para monitorar nosso progresso.</li>
                      <li>GlobalSolution: Projetos que integram os conhecimentos adquiridos ao longo das disciplinas.</li>
                      <li>Challenge Sprints: Desafios práticos focados em solucionar problemas reais com prazos definidos.</li>
                  </ul>
              <p>Estamos ansiosos para compartilhar nossa jornada com você e esperamos que este portifólio inspire futuras inovações!</p>
          </div>
        </div>
    )
}
