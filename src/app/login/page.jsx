"use client";
import Link from 'next/link'
import './login.scss'



export default function Login() {
  return (
  <main className="login">
        <div className="form">
          <form className="formulario">
            <h1>Acessar Conta</h1>
            <div>
              <label htmlFor="email">Preencha seus dados de acesso para continuar.</label>
              <input type="text" id="IdEmail" name='email' placeholder="Email"/>
            </div>
            <div>
              <label htmlFor="Senha">Digite sua senha</label>
              <input type="password" id="IdSenha" name='senha' placeholder="Senha" />
            </div>
            <div className="register">
              <input type="submit" id="Idlogar" value="Entrar" />
            </div>
          </form>
        </div>
      </main>
  )
}
