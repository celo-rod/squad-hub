import { consulta } from '../database/conexao.js'

class UsuarioRepository{
    create(usuario){
        const sql = 'INSERT INTO usuarios SET ?;'
        return consulta(sql, usuario, 'Não foi possível cadastrar o usuário!')
    }

    findByLogin(login){
        const sql = 'SELECT * FROM usuarios WHERE login = ?;'
        return consulta(sql, login, 'Não foi possível encontrar o usuário!')
    }
}

export default new UsuarioRepository()