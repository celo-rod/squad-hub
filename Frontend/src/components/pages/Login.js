import { useState } from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import api from '../../services/API';
import { ADMIN_ROLE } from '../../services/constants';

function Login(){
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(tipoConta) {
        try {
            const { data: responseData } = await api.usuarios.login(nome, senha)
            if (responseData.papel === ADMIN_ROLE) {
                alert("Login realizado com sucesso");
                // usa o papel desejado
                return;
            }
            if (tipoConta === "Gerente") {
                alert("Login realizado com sucesso");
                // usa o papel desejado
                return;
            }
        } catch {
            alert("Usuário ou senha incorretos")
        }
    }

    return (
    <div className={style.janela}>

        <div className={style.primeiraJanela}>
            <p>Escolha <br></br>uma <br></br> opção</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="255" height="13" viewBox="0 0 255 13" fill="none">
            <line x1="154" y1="6.5" x2="255" y2="6.5" stroke="#F1F1F1"/>
            <line y1="6.5" x2="101" y2="6.5" stroke="#F1F1F1"/>
            <ellipse cx="127.5" cy="6.5" rx="7.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <button style={{textDecoration: 'none', color: '#5D6BB7'}} onClick={() => handleLogin("Admin")}>Administrador</button>
            <button style={{textDecoration: 'none', color: '#5D6BB7'}} onClick={() => handleLogin("Gerente")}>Gerente de Projetos</button>
        </div>

        <div className={style.segundaJanela}>
            <p>Login</p>
            <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome"/>
            <input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha"/>
            <a href="#">Esqueceu a senha?</a>
        </div>

        {JSON.stringify(response)}

     </div>
    );
}

export default Login;