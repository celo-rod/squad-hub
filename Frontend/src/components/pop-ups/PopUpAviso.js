import style from './PopUpAviso.module.css';
import Botao from '../button/Botao';
import {Link} from 'react-router-dom';

function PopUpAviso({tipo, texto, nome}) {
    if(nome === "Voltar ao menu gerente"){
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <div className={style.corpo}>
            <p>{texto}</p>
            <Link to ="/menu-gerente" style={{textDecoration: 'none', color: '#FFF'}}><Botao nome={nome}/></Link>
            </div>
        </div>
    )
}


if(nome === "Voltar ao menu administrador"){
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <div className={style.corpo}>
            <p>{texto}</p>
            <Link to ="/menu-administrador" style={{textDecoration: 'none', color: '#FFF'}}><Botao nome={nome}/></Link>
            </div>
        </div>
    )
}

if(tipo === "Erro"){
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <div className={style.corpo}>
            <p>{texto}</p>
            <Link to ="/menu-gerente" style={{textDecoration: 'none', color: '#FFF'}}><Botao nome={nome}/></Link>
            </div>
        </div>
    )
}

}

export default PopUpAviso;