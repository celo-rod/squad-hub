import style from './RegistroAndExcluirAndDadosProjeto.module.css';
import {Link} from 'react-router-dom';

function REDProjeto({action, method, botao}) {
    if(botao === "Excluir" || botao === "Salvar"){
    return (
            <div className= {style.janela}>
             <nav className={style.navbar}>
             <p>Projeto</p>
             </nav>

            <section className={style.primeiraJanela}>

            <form className={style.primeiraJanela1}>
                    <input type="text" placeholder="Nome do Projeto"></input>
                    <input type="text" placeholder="Codigo"></input>
                    <input type="text" placeholder="Descrição"></input>
            </form>

            <form className={style.segundaJanela}>
                <input type="text" placeholder="Data Inicio" ></input>
                <input type="text" placeholder="Data Término" ></input>
                <input type="text" placeholder="Atividade"></input>
                <button><Link to ="/pop-up-confirmacao" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

            </section>


        </div>
    );
    }
}

export default REDProjeto;