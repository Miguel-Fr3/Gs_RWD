'use client'
import './consulta.scss'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from "react";
export default function Consulta() {
  
  useEffect(() => {
    if(sessionStorage.getItem("token-user") != null && sessionStorage.getItem("token-user") != undefined) {
    } else {
      window.location.href = "/login";
    }
  }
);
  return (
    <main className="consulta">
      <h1>Consulta</h1>
      <div className='info'>
      <Image src="/img5.png" alt="Imagem de Como Preencher o Formulario" width={700} height={500} priority={true} className='img'/>
      <div className='passo'>

        <div>
        <h1>Passo 1</h1>
        <h2>Agendar a tele consulta</h2>
        </div>

        <div>
        <h1>Passo 2</h1>
        <h2>Preencher o formulario da pré-consulta</h2>
        <Link href="/Pconsulta" >
            Pré-consulta
          </Link>

        
        </div>

        <div>
        <h1>Passo 3</h1>
        <h2>Enviar</h2>
        </div>

        <div>
        <h1>Passo 4</h1>
        <h2>Entrar na tele consulta</h2>
        </div>
      </div>
      </div>
    </main>
  )
}
