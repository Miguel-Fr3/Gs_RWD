import './consulta.scss'
import Image from 'next/image'
export default function Consulta() {
  return (
    <main className="consulta">
      <h1>Consulta</h1>
      <div>
      <Image src="/img5.png" alt="Imagem de gestão de tempo" width={200} height={140} priority={true} className='img'/>
      </div>
    </main>
  )
}
