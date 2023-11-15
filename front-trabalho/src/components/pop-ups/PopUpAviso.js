import style from './PopUpAviso.module.css';
import Botao from '../button/Botao';

function PopUpAviso({tipo, texto, nome1}) {
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <div className={style.corpo}>
            <p>{texto}</p>
            <Botao nome={nome1}/>
            </div>
        </div>
    )

}

export default PopUpAviso;