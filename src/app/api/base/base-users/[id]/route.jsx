
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

const filePath = process.cwd() + 'http://localhost:8080/api/login';

export async function GET(request, { params }) {
    try {

        const fileContent = await fs.readFile(filePath, 'utf8');
        

        const usuarios = JSON.parse(fileContent);

        const id = params.id;
        
        if (id > 0 && id <= usuarios.usuarios.length) {
            return NextResponse.json(usuarios.usuarios.find((user) => user.id == id));
        } else {
            return id == 0 ? NextResponse.json(usuarios.usuarios) : NextResponse.redirect("http://localhost:3000/error");
        }
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
}

const handleLogin = async (email, senha) => {
    try {
        const fileContent = await  fs.readFile(process.cwd() + 'http://localhost:8080/api/login/autenticar', 'utf8');
        const usuarios = JSON.parse(fileContent);

        for (let x = 0; x < usuarios.usuarios.length; x++) {
            const userFile = usuarios.usuarios[x];

            if (userFile.email == email && userFile.senha == senha) {
                return userFile;
            }
        }
        return null;
    } catch (error) {
        console.error(error);
    }
};

const handleCadastrar = async (email, senha) => {
    const fileContent =  await  fs.readFile(process.cwd() + 'http://localhost:8080/api/login', 'utf8');
    const usuarios = JSON.parse(fileContent);
    try {


        const id = (usuarios.usuarios[usuarios.usuarios.length - 1].id + 1);

        const user = {
            "id": id,
            "email": email,
            "senha": senha
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
        const { info, email, senha } = await request.json();

        console.log(info, email, senha);

        if (info == "login") {
            return NextResponse.json(await handleLogin(email, senha));
        } else if (info == "cadastro") {
            return NextResponse.json(await handleCadastrar(email, senha));
        }

        return NextResponse.json({ "status": false });
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
}
