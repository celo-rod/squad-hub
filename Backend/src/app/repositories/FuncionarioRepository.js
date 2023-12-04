import { consulta } from '../database/conexao.js'

class FuncionarioRepository{
    create(funcionario){
        const sql = 'INSERT INTO funcionarios SET ?;'
        return consulta(sql, funcionario, 'Não foi possível cadastrar o funcionário!')
    }

    findAll(){
        const sql = 'SELECT * FROM funcionarios;'
        return consulta(sql, 'Não foi possível localizar os funcionários!')
    }

    findByCpf(cpf){
        const sql = 'SELECT * FROM funcionarios WHERE cpf=?;'
        return consulta(sql, cpf, 'Não foi possível localizar o funcionário!')
    }

    update(funcionario, cpf){
        const sql = 'UPDATE funcionarios SET ? WHERE cpf=?;'
        return consulta(sql, [funcionario, cpf], 'Não foi possível atualizar o funcionário!')
    }

    delete(cpf){
        const sql = 'DELETE FROM funcionarios WHERE cpf=?;'
        return consulta(sql, cpf, 'Não foi possível excluir o funcionário!')
    }
}

export default new FuncionarioRepository()
