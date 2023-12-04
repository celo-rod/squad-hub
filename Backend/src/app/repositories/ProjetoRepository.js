import { consulta } from '../database/conexao.js'

class ProjetoRepository{
    create(projeto){
        const sql = 'INSERT INTO projetos SET ?;'
        return consulta(sql, projeto, 'Não foi possível cadastrar o projeto!')
    }

    findAll(){
        const sql = 'SELECT * FROM projetos;'
        return consulta(sql, 'Não foi possível localizar os projetos!')
    }

    findById(id){
        const sql = 'SELECT * FROM projetos WHERE id=?;'
        return consulta(sql, id, 'Não foi possível localizar o projeto!')
    }

    update(projeto, id){
        const sql = 'UPDATE projetos SET ? WHERE id=?;'
        return consulta(sql, [projeto, id], 'Não foi possível atualizar o projeto!')
    }

    delete(id){
        const sql = 'DELETE FROM projetos WHERE id=?;'
        return consulta(sql, id, 'Não foi possível excluir o projeto!')
    }
}

export default new ProjetoRepository()
