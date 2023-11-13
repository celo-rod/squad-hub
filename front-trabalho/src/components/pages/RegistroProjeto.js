import style from './RegistroProjeto.module.css';

function RegistroProjeto() {
    return (
            <div className= {style.janela}>
             <nav className={style.navbar}>
             <p>Projeto</p>
             </nav>

            <section className={style.primeiraJanela}>

                <div className={style.primeiraJanela1}>
                    <input type="text" placeholder="Nome do Projeto"></input>
                    <input type="text" placeholder="Codigo"></input>
                    <input type="text" placeholder="Descrição"></input>
                </div>

                <div className={style.segundaJanela}>
                    <input type="text" placeholder="Data Inicio" ></input>
                    <input type="text" placeholder="Data Término" ></input>
                    <input type="text" placeholder="Atividade"></input>
                    <button>Salvar</button>
                </div>

                </section>


            </div>
    );

}

export default RegistroProjeto;