"use client";
import Link from 'next/link';
import './login.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login() {
  const navigate = useRouter();

  const [stats, setStats] = useState('');
  const [classMsg, setClassMsg] = useState('');

  const [usuario, setUsuario] = useState({
    "info": "login",
    "email": "",
    "senha": "",
  });

  useEffect(() => {
    if (stats === 'SUCESSO!') {
      setClassMsg('suc');
      setTimeout(() => {
        setStats('');
        navigate.push('/');
      }, 5000);
    } else if (stats === 'USUÁRIO E OU SENHA INVÁLIDOS!') {
      setClassMsg('err');
      setTimeout(() => {
        setStats('');
        setUsuario({
          info: 'login',
          email: '',
          senha: '',
        });
      }, 5000);
    } else {
      setClassMsg('login');
    }
  }, [stats, navigate]);



  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/api/login/autenticar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
  
      console.log('Response:', response);
  
      if (response.ok) {
        const responseBody = await response.json();
  
        console.log('Response Text:', responseBody);
  
        if (responseBody) {
          try {
            const user = JSON.parse(responseBody);
            console.log('Parsed JSON:', user);
  
            if (user) {
              const token =
                Math.random().toString(36).substring(2) +
                Math.random().toString(36).substring(2);
  
              sessionStorage.setItem('token-user', token);
              setStats('SUCESSO!');
            } else {
              setStats('USUÁRIO E OU SENHA INVÁLIDOS!');
            }
          } catch (jsonError) {
            console.error('Erro ao analisar JSON da resposta:', jsonError);
            console.error('Resposta do servidor:', response);
            setStats('Ocorreu um erro na autenticação.');
          }
        } else {
          console.error('Corpo da resposta está vazio.');
          setStats('Ocorreu um erro na autenticação.');
        }
      } else {
        console.error('Erro na requisição:', response.status);
        console.error('Resposta do servidor:', response);
        setStats('Ocorreu um erro na autenticação.');
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
      setStats('Ocorreu um erro na autenticação.');
    }
  };
  

  

  return (
    <main className="login">
      <div className="form">
        <form className="formulario" onSubmit={handleSubmit}>
          <h1>Login</h1>
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
            <label htmlFor="IdSenha">Digite sua senha</label>
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
            <input type="submit" id="Idlogar" value="Entrar" />
          </div>
          <Link href="/login/cadastro" className="caminho">
            Não tem cadastro? Clique aqui!
          </Link>
        </form>
      </div>
    </main>
  );
}
