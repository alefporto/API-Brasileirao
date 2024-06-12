import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'db_brasileirao'
})

connection.connect((err) => {
    if(err)
        throw new Error(err.message);

    console.log(`Conexão realizada com sucesso!`);
});

/**
 * 
 * @param {string} SQLQuery Consulta SQL que irá ser feita pro banco de dados.
 * @param {string = [name] | number = [id]} key Chave passada pra busca SQL.
 * @param {string} ErrorMessage Mensagem de erro que vai ser passada caso haja algum.
 * @returns Retorna uma promise resolvida com o resultado da consulta SQL.
 */

export const query = (SQLQuery, key = "", ErrorMessage) => {
    return new Promise((resolve, reject) => {
        connection.query(SQLQuery, [key], (err, result) => {
            if(err) reject(ErrorMessage);

            const row = JSON.parse(JSON.stringify(result));
            resolve(row);
        })
    })
}

export default connection;
