'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Cabecalho.scss';

export default function Cabecalho() {


  const pathname = usePathname();


  return (
    <header className='cabecalho'>
      <div >
            <Image src="/logo.png" alt="Logo Mapped" width={100} height={50}  priority={true} className='logo'/>
        </div>
    <nav className='menu'>
      <div className='rotas'>
        
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        
        
          <Link href="/consulta" className={pathname === '/consulta' ? 'active' : ''}>
            Consulta
          </Link>
        
        
          <Link href="/formulario" className={pathname === '/formulario' ? 'active' : ''}>
            Formulario
          </Link>
        
        
          <Link href="/login" className={pathname === '/login' ? 'active' : ''}>
            Login
          </Link>

      </div>
    </nav>
</header>
  )
}
