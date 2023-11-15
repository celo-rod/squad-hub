import style from './PopUpAviso.module.css';
import Botao from '../button/Botao';

function PopUpAviso({tipo, texto, nome}) {
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <div className={style.corpo}>
            <p>{texto}</p>
            <Botao nome={nome}/>
            </div>
        </div>
    )

}

export default PopUpAviso;