import style from './PopUpCodigo.module.css';
import Botao from '../button/Botao';
import Input from '../form/Input';

function PopUpCodigo({tipo, placeholder, nome1}) {
    return (
        <div className={style.janela}>

            <nav className={style.nav}>
                <p>{tipo}</p>
            </nav>

            <div className={style.corpo}>
            <Input type={tipo} placeholder={placeholder}/>
            <Botao nome={nome1}/>
            </div>
        </div>
    )

}

export default PopUpCodigo;