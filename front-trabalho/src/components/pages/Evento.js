function Evento(){

    function meuEvento(){
        console.log("Operação realizada com sucesso!");
    }

    return(
        <div>
            <button onClick={meuEvento}>Salvar</button>
        </div>
    )
}

export default Evento;