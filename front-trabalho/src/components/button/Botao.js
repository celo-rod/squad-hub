import style from './Botao.module.css';
function Botao({nome}){
    return (

        <div>
            <button>{nome}</button>
        </div>

    )
}
export default Botao;