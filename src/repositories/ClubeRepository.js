import connection from '../database/connection.js';
import { query } from '../database/connection.js';
class ClubeRepository{
    findAll(){
        const QuerySQL = "SELECT * FROM clubes;"

        return new Promise((resolve, reject) => {
            connection.query(QuerySQL, (err, result) => {
                if(err) throw new Error(err.message);
    
                const row = JSON.parse(JSON.stringify(result));
                resolve(row);
            })
        })
    }

    findByKey(key){
        const ErrorMessage = "Não foi possível encontrar o clube.";
        
        const id = parseInt(key);
        const name = key.toLowerCase();

        if(isNaN(id)) {
            const QuerySQLByName = "SELECT * FROM clubes WHERE name = ?;";
            return query(QuerySQLByName, name, ErrorMessage);
        } else {
            const QuerySQLById = "SELECT * FROM clubes WHERE id = ?;";
            return query(QuerySQLById, id, ErrorMessage);
        }
    }
}

export default new ClubeRepository();
