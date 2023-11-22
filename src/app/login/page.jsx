"use client";
import Link from 'next/link'
import './login.scss'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Login() {

    const navigate = useRouter();

    const [Stats, setStats] = useState("");
    const [classMsg, setClassMsg] = useState("");

    const [usuario, setUsuario] = useState({
        "info":"login",
        "email":"",
        "senha":""
    });

    useEffect(() => {
       if(Stats == "SUCESSO!"){
          setClassMsg("suc");
        }else if(Stats == "USUÁRIO E OU SENHA INVÁLIDOS!"){
            setClassMsg("err");
        }else{
            setClassMsg("login");
        }
    }, [Stats]);
    

    const handleChange = (e)=>{

        const{name, value} = e.target;

        setUsuario({...usuario,[name]:value});
    }


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

                    const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

                    sessionStorage.setItem("token-user",token);

                    setStats("SUCESSO!");
                    
                    setTimeout(()=>{
                        setStats("");
                        navigate.push("/");
                    },5000);
                }else{
                    setStats("USUÁRIO E OU SENHA INVÁLIDOS!");
                    setTimeout(()=>{
                        setStats("");
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
