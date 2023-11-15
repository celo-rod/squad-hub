import style from './PopUpConfirmacao.module.css';
import Botao from '../button/Botao';


function PopUpConfirmacao() {
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>Confirmação</p>
            </nav>

            <p>Deseja completar a ação?</p>

            <div className={style.corpo}>
            <Botao nome="SIM"/>
            <Botao nome="NAO"/>
            </div>
        </div>
    )

}

export default PopUpConfirmacao;