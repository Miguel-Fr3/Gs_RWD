"use client";
import Link from 'next/link'
import './login.scss'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Login() {

    const navigate = useRouter();

    const [Stats, setStats] = useState("");
    const [classLoginMsg, setClassLoginMsg] = useState("");

    const [usuario, setUsuario] = useState({
        "info":"login",
        "email":"",
        "senha":""
    });

    useEffect(() => {
       if(Stats == "SUCESSO!"){
          setClassLoginMsg("suc");
        }else if(Stats == "USUÁRIO E OU SENHA INVÁLIDOS!"){
            setClassLoginMsg("err");
        }else{
            setClassLoginMsg("login");
        }
    }, [Stats]);
    
    //Função de preenchimento do FORM...
    const handleChange = (e)=>{
        //Destructuring
        const{name, value} = e.target;
        //Prenchendo o campo, utilizando o useState com SPREAD + OnChange:
        setUsuario({...usuario,[name]:value});
    }

    //Função de validação e ENVIO dos dados.
    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base/base-users/0",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(usuario)
            });

            if(response.ok){
                const user = await response.json();

                if(user){

                    //Gerando o token do usuário:
                    const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

                    //Armazenar o token no sessionStorage:
                    sessionStorage.setItem("token-user",token);

                    setMsgStatus("SUCESSO!");
                    
                    setTimeout(()=>{
                        setMsgStatus("");
                        navigate.push("/");
                    },5000);
                }else{
                    setMsgStatus("USUÁRIO E OU SENHA INVÁLIDOS!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        setUsuario({
                            "info":"login",
                            "email":"",
                            "senha":""
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
