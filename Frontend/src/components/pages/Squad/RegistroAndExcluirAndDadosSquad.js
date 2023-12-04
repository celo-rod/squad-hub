import style from '../Projeto/RegistroAndExcluirAndDadosProjeto.module.css'
import {Link} from 'react-router-dom';

function REDSquad({action, method, botao}) {
    if(botao === "Salvar"){
    return (
            <div className= {style.janela}>
             <nav className={style.navbar}>
             <p>Squad</p>
             </nav>

            <section className={style.primeiraJanela}>

            <form className={style.primeiraJanela1} action={action} method={method}>
                
                <input type="text" name='nomeSquad' placeholder="Nome do Squad" required></input>
                <input type="text" name='dataInicioSquad' placeholder="Data Inicio" required></input>
                <input type="text" name='codigoSquad' placeholder="Codigo" required></input>
                <input type="text" name='dataFimSquad' placeholder="Data Término" required></input>
                <input type="text" name='descricaoSquad' placeholder="Descrição" required></input>
                <input type="text" name='AtividadeSquad' placeholder="Atividade" required></input>
                <p></p>
                <button type="submit"><Link to ="/squad-cadastrado" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

            </section>
            </div>
    );

    }

    if(botao === "Excluir"){
        return (
            <div className= {style.janela}>
             <nav className={style.navbar}>
             <p>Squad</p>
             </nav>

            <section className={style.primeiraJanela}>

            <form className={style.primeiraJanela1} action={action} method={method}>
                
                <input type="text" name='nomeSquad' placeholder="Nome do Squad" required></input>
                <input type="text" name='dataInicioSquad' placeholder="Data Inicio" required></input>
                <input type="text" name='codigoSquad' placeholder="Codigo" required></input>
                <input type="text" name='dataFimSquad' placeholder="Data Término" required></input>
                <input type="text" name='descricaoSquad' placeholder="Descrição" required></input>
                <input type="text" name='AtividadeSquad' placeholder="Atividade" required></input>
                <p></p>
                <button type="submit"><Link to ="/squad-excluido" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

            </section>
            </div>
        );
    }

    if(botao === "Voltar ao menu"){
        return (
            <div className= {style.janela}>
             <nav className={style.navbar}>
             <p>Squad</p>
             </nav>

            <section className={style.primeiraJanela}>

            <form className={style.primeiraJanela1} action={action} method={method}>
                
                <input type="text" name='nomeSquad' placeholder="Nome do Squad" required></input>
                <input type="text" name='dataInicioSquad' placeholder="Data Inicio" required></input>
                <input type="text" name='codigoSquad' placeholder="Codigo" required></input>
                <input type="text" name='dataFimSquad' placeholder="Data Término" required></input>
                <input type="text" name='descricaoSquad' placeholder="Descrição" required></input>
                <input type="text" name='AtividadeSquad' placeholder="Atividade" required></input>
                <p></p>
                <button type="submit"><Link to ="/menu-gerente" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

            </section>
            </div>
        );
    }
}

export default REDSquad;