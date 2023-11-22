import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, {params}) {
    
    const file  = await  fs.readFile(process.cwd() + '/src/app/api/base/data.json', 'utf8');

    const id = params.id;

    const usuarios =  await JSON.parse(file);
    
    if(id > 0 && id <= usuarios.usuarios.length){
        return  NextResponse.json(usuarios.usuarios.find((user)=> user.id == id));
    }else{
        return id == 0 ? NextResponse.json(usuarios.usuarios) : NextResponse.redirect("http://localhost:3000/error")
    }
}


const handleLogin = async (email,senha)=>{
    const file  = await  fs.readFile(process.cwd() + '/src/app/api/base/data.json', 'utf8');
    const usuarios = await JSON.parse(file);

    try{
        for (let x = 0; x < usuarios.usuarios.length; x++) {
            const userFile = usuarios.usuarios[x];

            if(userFile.email == email && userFile.senha == senha){
                return userFile;
            }
        }
        return null;
    }catch(error){
        console.log(error);
 }
}


const handleCadastrar = async (email,senha)=>{
    const file  = await  fs.readFile(process.cwd() + '/src/app/api/base/data.json', 'utf8');
    const usuarios = await JSON.parse(file);

    try{
        

        const id =  (usuarios.usuarios[usuarios.usuarios.length-1].id + 1);

        const user = {
            "id":id,
            "email":email,
            "senha":senha
        }


        usuarios.usuarios.push(user);


        await fs.writeFile(process.cwd() + '/src/app/api/base/data.json', JSON.stringify(usuarios));

        return user;
    }catch(error){
        console.log(error);
 }
}

export async function POST(request, response){

    const {info,email,senha} = await request.json();

    console.log(info,email,senha);

    if(info == "login"){
        return  NextResponse.json( await handleLogin(email,senha));
    } else if(info == "cadastro"){
        return  NextResponse.json( await handleCadastrar(email,senha));
    }
    return NextResponse.json({"status":false});
}