'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'; 
import './Cabecalho.scss';

export default function Cabecalho() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {

    setIsClient(true);
  }, []);

  const logout = () => {
    sessionStorage.removeItem('token-user');

    router.push('/login');
  };

  if (!isClient) {
    return null; 
  }

  if (sessionStorage.getItem('token-user') !== null && sessionStorage.getItem('token-user') !== undefined) {
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

            <Link href="/login" onClick={logout} className={pathname === '/login' ? 'active' : ''}>
              LOGOUT
            </Link>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header className='cabecalho'>
        <nav className='menu'>
          <div className='rotas'>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>

            <div className='image'>
              <h1>Mapped <br /> Innovation</h1>
            </div>

            <Link href="/login" className={pathname === '/login' ? 'active' : ''}>
              Login
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
