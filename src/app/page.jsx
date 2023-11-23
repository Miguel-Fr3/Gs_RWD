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
        <Image src="/img1.png" alt="Imagem de gestão de tempo" width={200} height={150} priority={true}/>
        <h2>Agilidade</h2>
        <p>A agilidade e ganho de tempo são benefícios significativos. Ao optar por serviços de uma pré-consulta, os usuários eliminam a necessidade de deslocamentos físicos, poupando tempo precioso que poderia ser dedicado a outras atividades.</p>
      </div>
      <div>
        <Image src="/img1.png" alt="Imagem de gestão de tempo" width={200} height={150} priority={true}/>
        <h2>Agilidade</h2>
        <p>A agilidade e ganho de tempo são benefícios significativos. Ao optar por serviços de uma pré-consulta, os usuários eliminam a necessidade de deslocamentos físicos, poupando tempo precioso que poderia ser dedicado a outras atividades.</p>
      </div>
      <div>
        <Image src="/img1.png" alt="Imagem de gestão de tempo" width={200} height={150} priority={true}/>
        <h2>Agilidade</h2>
        <p>A agilidade e ganho de tempo são benefícios significativos. Ao optar por serviços de uma pré-consulta, os usuários eliminam a necessidade de deslocamentos físicos, poupando tempo precioso que poderia ser dedicado a outras atividades.</p>
      </div>
      
    </div>
    </main>
  )
}
