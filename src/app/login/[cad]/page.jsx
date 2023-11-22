"use client";
import Link from 'next/link'
import '../login.scss'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Cadastro() {

  
    const router = useRouter();

    const [Stats, setStats] = useState("");
    const [classMsg, setClassMsg] = useState("");


    const [usuario, setUsuario] = useState({
        "info":"cadastro",
        "email":"",
        "senha":""
    });

    useEffect(() => {
       if(Stats == "SUCESSO!"){
          setClassMsg("suc");
        }else if(Stats == "OCORREU UM ERRO!"){
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
                    setStats("SUCESSO!");
                    setTimeout(()=>{
                        setStats("");
                        router.push("/");
                    },5000);
                }else{
                    setStats("OCORREU UM ERRO!");
                    setTimeout(()=>{
                        setStats("");
                        setUsuario({
                            "info":"cadastro",
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
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <h2 className={classMsg}>{Stats}</h2>
        <div>
          <label htmlFor="IdEmail">Preencha seus dados</label>
          <input type="text" id="IdEmail" name='email' placeholder="Email" autoComplete="email" value={usuario.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="IdSenha">Crie sua senha</label>
          <input type="password" id="IdSenha" name='senha' placeholder="Senha" autoComplete="current-password" value={usuario.senha} onChange={handleChange}/>
        </div>
        <div className="register">
          <input type="submit" id="IdCad" value="Entrar" />
        </div>
        <Link href="/login" className='caminho'>Tem cadastro? Clique aqui!</Link>
      </form>
    </div>
  </main>
  )
}
