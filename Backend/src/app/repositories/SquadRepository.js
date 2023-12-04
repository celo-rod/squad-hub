import { consulta } from '../database/conexao.js'

class SquadRepository{
    create(squad){
        const sql = 'INSERT INTO squads SET ?;'
        return consulta(sql, squad, 'Não foi possível cadastrar o squad!')
    }

    findAll(){
        const sql = 'SELECT * FROM squads;'
        return consulta(sql, 'Não foi possível localizar os squad!')
    }

    findById(id){
        const sql = 'SELECT * FROM squads WHERE id=?;'
        return consulta(sql, id, 'Não foi possível localizar o squad!')
    }

    update(squad, id){
        const sql = 'UPDATE squads SET ? WHERE id=?;'
        return consulta(sql, [squad, id], 'Não foi possível atualizar o squad!')
    }

    delete(id){
        const sql = 'DELETE FROM squads WHERE id=?;'
        return consulta(sql, id, 'Não foi possível excluir o squad!')
    }
}

export default new SquadRepository()
