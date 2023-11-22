'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Cabecalho.scss';

export default function Cabecalho() {


  const pathname = usePathname();


  return (
    <header className='cabecalho'>

    <nav className='menu'>
      <div className='rotas'>
        
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
                      
          <Link href="/Pconsulta" className={pathname === '/Pconsulta' ? 'active' : ''}>
            Formulario
          </Link>

          <div className='image'>
            <h1>Mapped <br /> Innovation</h1>
          </div>
        
          <Link href="/consulta" className={pathname === '/consulta' ? 'active' : ''}>
            Consulta
          </Link>
        
          <Link href="/login" className={pathname === '/login' ? 'active' : ''}>
            Login
          </Link>

      </div>
    </nav>
</header>
  )
}
