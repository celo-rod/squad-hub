import style from './RegistroAndExcluirAndDadosFuncionario.module.css';
import {Link} from 'react-router-dom';

function REDFuncionario({action, method, botao}) {
    if(botao === "Salvar"){
    return (
            <div className= {style.janela}>
             <nav className={style.navbar}>
             <p>Funcionario</p>
             </nav>

            <section className={style.primeiraJanela}>

            <form className={style.primeiraJanela1} action={action} method={method}>
                
                <input type="text" name='nomeFuncionario' placeholder="Nome" required></input>
                <input type="text" name='cpfFuncionario' placeholder="CPF" required></input>
                <input type="text" name='cargoFuncionario' placeholder="Cargo" required></input>

                <input type="checkbox" name="Gerente" value="Gerente"  required></input>
                <label for="Gerente">Gerente</label>
                <button type="submit"><Link to ="/funcionario-cadastrado" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

                <svg xmlns="http://www.w3.org/2000/svg" width="228" height="228" viewBox="0 0 228 228" fill="none">
                    <path d="M114 114C98.325 114 84.9062 108.419 73.7438 97.2562C62.5813 86.0938 57 72.675 57 57C57 41.325 62.5813 27.9063 73.7438 16.7438C84.9062 5.58125 98.325 0 114 0C129.675 0 143.094 5.58125 154.256 16.7438C165.419 27.9063 171 41.325 171 57C171 72.675 165.419 86.0938 154.256 97.2562C143.094 108.419 129.675 114 114 114ZM0 228V188.1C0 180.025 2.0805 172.601 6.2415 165.827C10.4025 159.054 15.922 153.891 22.8 150.338C37.525 142.975 52.4875 137.451 67.6875 133.765C82.8875 130.079 98.325 128.24 114 128.25C129.675 128.25 145.113 130.093 160.312 133.779C175.512 137.465 190.475 142.984 205.2 150.338C212.087 153.9 217.612 159.068 221.773 165.841C225.934 172.615 228.01 180.035 228 188.1V228H0Z" fill="#5D6BB7"/>
                </svg>

            </section>


        </div>
    );
    }

    if(botao === "Excluir"){
        return (
            <div className= {style.janela}>
             <nav className={style.navbar}>
             <p>Funcionario</p>
             </nav>

            <section className={style.primeiraJanela}>

            <form className={style.primeiraJanela1} action={action} method={method}>
                
                <input type="text" name='nomeFuncionario' placeholder="Nome" required></input>
                <input type="text" name='cpfFuncionario' placeholder="CPF" required></input>
                <input type="text" name='cargoFuncionario' placeholder="Cargo" required></input>
                
                <input type="checkbox" name="Gerente" value="Gerente"  required></input>
                <label for="Gerente">Gerente</label>
                
                <button type="submit"><Link to ="/exclusao-funcionario" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
            </form>

                <svg xmlns="http://www.w3.org/2000/svg" width="228" height="228" viewBox="0 0 228 228" fill="none">
                    <path d="M114 114C98.325 114 84.9062 108.419 73.7438 97.2562C62.5813 86.0938 57 72.675 57 57C57 41.325 62.5813 27.9063 73.7438 16.7438C84.9062 5.58125 98.325 0 114 0C129.675 0 143.094 5.58125 154.256 16.7438C165.419 27.9063 171 41.325 171 57C171 72.675 165.419 86.0938 154.256 97.2562C143.094 108.419 129.675 114 114 114ZM0 228V188.1C0 180.025 2.0805 172.601 6.2415 165.827C10.4025 159.054 15.922 153.891 22.8 150.338C37.525 142.975 52.4875 137.451 67.6875 133.765C82.8875 130.079 98.325 128.24 114 128.25C129.675 128.25 145.113 130.093 160.312 133.779C175.512 137.465 190.475 142.984 205.2 150.338C212.087 153.9 217.612 159.068 221.773 165.841C225.934 172.615 228.01 180.035 228 188.1V228H0Z" fill="#5D6BB7"/>
                </svg>

            </section>


        </div>
    );

    }

        return (
            <div className= {style.janela}>
            <nav className={style.navbar}>
            <p>Funcionario</p>
            </nav>

           <section className={style.primeiraJanela}>

           <form className={style.primeiraJanela1} action={action} method={method}>
               
               <input type="text" name='nomeFuncionario' placeholder="Nome" required></input>
               <input type="text" name='cpfFuncionario' placeholder="CPF" required></input>
               <input type="text" name='cargoFuncionario' placeholder="Cargo" required></input>

               <input type="checkbox" name="Gerente" value="Gerente"  required></input>
            <label for="Gerente">Gerente</label>
               <button type="submit"><Link to ="/menu-administrador" style={{textDecoration: 'none', color: '#FFF'}}>{botao}</Link></button>
           </form>

               <svg xmlns="http://www.w3.org/2000/svg" width="228" height="228" viewBox="0 0 228 228" fill="none">
                   <path d="M114 114C98.325 114 84.9062 108.419 73.7438 97.2562C62.5813 86.0938 57 72.675 57 57C57 41.325 62.5813 27.9063 73.7438 16.7438C84.9062 5.58125 98.325 0 114 0C129.675 0 143.094 5.58125 154.256 16.7438C165.419 27.9063 171 41.325 171 57C171 72.675 165.419 86.0938 154.256 97.2562C143.094 108.419 129.675 114 114 114ZM0 228V188.1C0 180.025 2.0805 172.601 6.2415 165.827C10.4025 159.054 15.922 153.891 22.8 150.338C37.525 142.975 52.4875 137.451 67.6875 133.765C82.8875 130.079 98.325 128.24 114 128.25C129.675 128.25 145.113 130.093 160.312 133.779C175.512 137.465 190.475 142.984 205.2 150.338C212.087 153.9 217.612 159.068 221.773 165.841C225.934 172.615 228.01 180.035 228 188.1V228H0Z" fill="#5D6BB7"/>
               </svg>

           </section>


       </div>
    );
}

export default REDFuncionario;