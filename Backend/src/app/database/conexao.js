import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'dbsquad-hub'
})

conexao.connect()

/**
 * Função para realizar consultas no banco de dados com ou sem valores
 * @param {string} sql instrução SQL para consulta
 * @param {string} valores valores para consulta
 * @param {string} mensagemReject mensagem de erro para o reject
 * @returns {Promise} Promise com o resultado da consulta
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if(erro){
                reject(mensagemReject)
            }else{
                // Transformando o resultado em um objeto JSON
                const row = JSON.parse(JSON.stringify(resultado))
                resolve(row)
            }
        })
    })
}

export default conexao