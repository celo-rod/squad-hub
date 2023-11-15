import style from './PopUpConfirmacao.module.css';
import Botao from '../button/Botao';


function PopUpConfirmacao({tipo, texto}) {
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <p>{texto}</p>

            <div className={style.corpo}>
            <Botao nome="SIM"/>
            <Botao nome="NAO"/>
            </div>
        </div>
    )

}

export default PopUpConfirmacao;