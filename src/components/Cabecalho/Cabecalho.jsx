'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Cabecalho() {


  const pathname = usePathname();


  return (
    <header>
    <nav>
      <div className='rotas'>
        
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        
        
          <Link href="/consulta" className={pathname === '/ajuda' ? 'active' : ''}>
            Consulta
          </Link>
        
        
          <Link href="/formulario" className={pathname === '/modals' ? 'active' : ''}>
            Formulario
          </Link>
        
        
          <Link href="/login" className={pathname === '/sobre' ? 'active' : ''}>
            Login
          </Link>
          
      </div>
    </nav>
</header>
  )
}
