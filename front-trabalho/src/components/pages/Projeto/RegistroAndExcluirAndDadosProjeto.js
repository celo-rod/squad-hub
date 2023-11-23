import style from './RegistroAndExcluirAndDadosProjeto.module.css';
import {Link} from 'react-router-dom';

function REDProjeto({action, method, botao}) {
    if(botao === "Salvar"){
    return (
            <div className= {style.janela}>
             <nav className={style.navbar}>
             <p>Projeto</p>
             </nav>

            <section className={style.primeiraJanela}>

            <form className={style.primeiraJanela1} action={action} method={method}>
                    <input type="text" name='nomeProjeto' placeholder="Nome do Projeto" required></input>
                    <input type="text" name='codigoProjeto' placeholder="Codigo" required></input>
                    <input type="text" name='descricaoProjeto' placeholder="Descrição" required></input>
            
            </form>

            <form className={style.segundaJanela} action={action} method="GET">
                <input type="text" name='dataInicioProjeto' placeholder="Data Inicio" required></input>
                <input type="text" name='dataFimProjeto' placeholder="Data Término" required></input>
                <input type="text" name='AtividadeProjeto' placeholder="Atividade" required></input>
                <button type="submit"><Link to ="/projeto-cadastrado" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

            </section>


        </div>
    );
    }

    if(botao === "Excluir"){
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
                <button><Link to ="/projeto-excluido" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

            </section>


        </div>
    );

    }

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
                <button><Link to ="/gerenciar-projeto" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

            </section>


        </div>
    );
}

export default REDProjeto;