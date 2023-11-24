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
    "dsEmail": "",
    "dsSenha": "",
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

      if (response.ok) {
        const user = await response.json();
  
            if (user) {
              const token =
                Math.random().toString(36).substring(2) +
                Math.random().toString(36).substring(2);
  
              sessionStorage.setItem('token-user', token);
              process.env.NEXT_PUBLIC_TOKEN_USER = token;
              setStats('SUCESSO!');setTimeout(()=>{
                setStats("");
        
                navigate.push("/");
            },5000);
        }else{
            setStats("USUÁRIO E OU SENHA INVÁLIDOS!");
            setTimeout(()=>{
                setStats("");
                setUsuario({
                    "info":"login",
                    "dsEmail":"",
                    "dsSenha":""
                });
            },5000);
        }
    }
} catch (error) {
}
}
  


  

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
              name="dsEmail"
              placeholder="Email"
              autoComplete="email"
              value={usuario.dsEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="IdSenha">Digite sua senha</label>
            <input
              type="password"
              id="IdSenha"
              name="dsSenha"
              placeholder="Senha"
              autoComplete="current-password"
              value={usuario.dsSenha}
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
