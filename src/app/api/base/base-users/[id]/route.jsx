
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';



export async function GET(request, { params }) {

    const filePath = process.cwd() + 'http://localhost:8080/api/login';
    const id = params.id;

    const usuarios =  await JSON.parse(file);
    
    if(id > 0 && id <= usuarios.usuarios.length){
        return  NextResponse.json(usuarios.usuarios.find((user)=> user.id == id));
    }else{
        return id == 0 ? NextResponse.json(usuarios.usuarios) : NextResponse.redirect("http://localhost:3000/error")
    }
}


const handleLogin = async (dsEmail, dsSenha) => {

        const fileContent = await  fs.readFile(process.cwd() + 'http://localhost:8080/api/login/autenticar', 'utf8');
        const usuarios = JSON.parse(fileContent);

        try{
            for (let x = 0; x < usuarios.usuarios.length; x++) {
                const userFile = usuarios.usuarios[x];
    
                if(userFile.email == dsEmail && userFile.senha == dsSenha){
                    return userFile;
                }
            }
            return null;
        }catch(error){
            console.log(error);
     }
    }
    

const handleCadastrar = async (dsEmail, dsSenha) => {
    const fileContent =  await  fs.readFile(process.cwd() + 'http://localhost:8080/api/login', 'utf8');
    const usuarios = JSON.parse(fileContent);
    try {


        const id = (usuarios.usuarios[usuarios.usuarios.length - 1].id + 1);

        const user = {
            "id": id,
            "dsEmail": dsEmail,
            "dsSenha": dsSenha
        };

        usuarios.usuarios.push(user);


        await fs.writeFile(process.cwd() + 'http://localhost:8080/api/login', JSON.stringify(usuarios));

        return user;
    } catch (error) {
        console.error(error);

    }
};

export async function POST(request, response) {
    try {
        const { info, dsEmail, dsSenha } = await request.json();

        console.log(info, dsEmail, dsSenha);

        if (info == "login") {
            return NextResponse.json(await handleLogin(dsEmail, dsSenha));
        } else if (info == "cadastro") {
            return NextResponse.json(await handleCadastrar(dsEmail, dsSenha));
        }

        return NextResponse.json({ "status": false });
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
}
