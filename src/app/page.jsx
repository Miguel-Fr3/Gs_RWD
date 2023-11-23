import Image from 'next/image'
import './Home.scss'
export default function Home() {
  return (
    <main className='home'>
    <h1>Beneficios da Pré-consuta</h1>
    <div className='beneficios'>
      <div>
        <Image src="/img1.png" alt="Imagem de gestão de tempo" width={200} height={140} priority={true} className='img'/>
        <h2>Agilidade</h2>
        <p>A agilidade e ganho de tempo são benefícios significativos. Ao optar por serviços de uma pré-consulta, os usuários eliminam a necessidade de deslocamentos físicos, poupando tempo precioso que poderia ser dedicado a outras atividades.</p>
      </div>
      <div>
        <Image src="/img1.png" alt="Imagem de gestão de tempo" width={200} height={140} priority={true} className='img'/>
        <h2>Redução da fila</h2>
        <p>A desistência de agendamentos ocorre devido à longa espera por atendimento telefônico, gerando estresse pré-atendimento. A opção de pré-consulta proporciona rapidez e praticidade, aliviando a necessidade de esperas prolongadas e incentivando a escolha por serviços mais eficientes, reduzindo filas de espera por telefone.</p>
      </div>
      <div>
        <Image src="/img2.png" alt="Imagem de gestão de tempo" width={200} height={140} priority={true} className='img'/>
        <h2>Acessibilidade</h2>
        <p>A pré-consulta facilita a questão da distância e deixa de ser um obstáculo, garantindo que os pacientes possam acessar cuidados médicos especializados de forma conveniente, independentemente de onde estejam. Ampliando a disponibilidade de serviços e  promovendo uma maior acessibilidade a cuidados de qualidade</p>
      </div>
      <div>
        <Image src="/img3.png" alt="Imagem de gestão de tempo" width={200} height={140} priority={true} className='img'/>
        <h2>Redução de erros</h2>
        <p>A pré-consulta, deixa mais disposto a sinceridade por meio do preenchimento de formulários detalhados, é crucial na redução de erros médicos facilitando a compreensão completa do histórico e sintomas do paciente, resultando em diagnósticos mais precisos.</p>
      </div>
      
      
    </div>
    </main>
  )
}
