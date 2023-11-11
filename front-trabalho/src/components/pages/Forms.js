import Evento from './Evento';
import style from './Forms.module.css';
function Forms(){
    return(
        <div>
            <form>
                <div className = {style.formsContainer}>
                        <input type="text" placeholder="Nome"/>
                </div>
            </form>
        </div>
    )
}


export default Forms;