"use client";
import Link from 'next/link'
import './login.scss'



export default function Login() {
  return (
  <main className="login">
        <div className="form">
          <form className="formulario">
            <h1>Login</h1>
            <div>
              <label htmlFor="IdEmail">Preencha seus dados</label>
              <input type="text" id="IdEmail" name='email' placeholder="Email" autoComplete="email"/>
            </div>
            <div>
              <label htmlFor="IdSenha">Digite sua senha</label>
              <input type="password" id="IdSenha" name='senha' placeholder="Senha" autoComplete="current-password"/>
            </div>
            <div className="register">
              <input type="submit" id="Idlogar" value="Entrar" />
            </div>
            <Link href="/login/cadastro" className='caminho'>Não tem cadastro? Clique aqui!</Link>
          </form>
        </div>
      </main>
  )
}
