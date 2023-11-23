import Input from '../form/Input';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
function Login(){
    return (
    <div className={style.janela}>

        <div className={style.primeiraJanela}>
            <p>Escolha <br></br>uma <br></br> opção</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="255" height="13" viewBox="0 0 255 13" fill="none">
            <line x1="154" y1="6.5" x2="255" y2="6.5" stroke="#F1F1F1" stroke-width="5"/>
            <line y1="6.5" x2="101" y2="6.5" stroke="#F1F1F1" stroke-width="5"/>
            <ellipse cx="127.5" cy="6.5" rx="7.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <button><Link to="/menu-administrador" style={{textDecoration: 'none', color: '#5D6BB7'}}>Administrador</Link></button>
            <button><Link to="/menu-gerente" style={{textDecoration: 'none', color: '#5D6BB7'}}>Gerente de Projetos</Link></button>
        </div>

        <div className = {style.segundaJanela}>
            <p>Login</p>
            <Input type="text" placeholder="Nome"/>
            <input type="password" placeholder="Senha"/>
            <a href="#">Esqueceu a senha?</a>
        </div>

     </div>
    );
}

export default Login;