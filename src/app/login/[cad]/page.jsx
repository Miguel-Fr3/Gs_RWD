"use client";
import Link from 'next/link';
import '../login.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Cadastro() {
  const router = useRouter();

  const [stats, setStats] = useState('');
  const [classMsg, setClassMsg] = useState('');

  const [usuario, setUsuario] = useState({
    "info": "cadastro",
    "email": "",
    "senha": "",
  });

  useEffect(() => {
    if (stats === 'SUCESSO!') {
      setClassMsg('suc');
      setTimeout(() => {
        setStats('');
        router.push('/');
      }, 5000);
    } else if (stats === 'OCORREU UM ERRO!') {
      setClassMsg('err');
      setTimeout(() => {
        setStats('');
        setUsuario({
          info: 'cadastro',
          email: '',
          senha: '',
        });
      }, 5000);
    } else {
      setClassMsg('login');
    }
  }, [stats, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };
  const handleOperacao = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
  
      if (response.ok) {
        const text = await response.text();
        const json = text ? JSON.parse(text) : {}; 
  
        if (json) {
          setStats('SUCESSO!');
        } else {
          setStats('OCORREU UM ERRO!');
        }
      } else {
        throw new Error(`Erro na solicitação: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStats('OCORREU UM ERRO!');
    }
  };
  
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOperacao();
  };

  return (
    <main className="login">
      <div className="form">
        <form className="formulario" onSubmit={handleSubmit}>
          <h1>Cadastro</h1>
          <h2 className={classMsg}>{stats}</h2>
          <div>
            <label htmlFor="IdEmail">Preencha seus dados</label>
            <input
              type="text"
              id="IdEmail"
              name="email"
              placeholder="Email"
              autoComplete="email"
              value={usuario.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="IdSenha">Crie sua senha</label>
            <input
              type="password"
              id="IdSenha"
              name="senha"
              placeholder="Senha"
              autoComplete="current-password"
              value={usuario.senha}
              onChange={handleChange}
            />
          </div>
          <div className="register">
            <input type="submit" id="IdCad" value="Cadastrar" />
          </div>
          <Link href="/login" className="caminho">
            Já tem cadastro? Clique aqui!
          </Link>
        </form>
      </div>
    </main>
  );
}
