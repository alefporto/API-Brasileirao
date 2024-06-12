import { query } from '../database/connection.js';

class ClubeRepository{
    findAll(){
        const QuerySQL = "SELECT * FROM clubes;"
        const ErrorMessage = "Não foi possível encontrar o clube.";
        return query(QuerySQL, ErrorMessage);
    }

    findByKey(key){
        const ErrorMessage = "Não foi possível encontrar o clube.";
        
        const id = parseInt(key);
        const name = key.toLowerCase();

        if(isNaN(id)) {
            const QuerySQLByName = "SELECT * FROM clubes WHERE name = ?;";
            return query(QuerySQLByName, [name], ErrorMessage);
        } else {
            const QuerySQLById = "SELECT * FROM clubes WHERE id = ?;";
            return query(QuerySQLById, [id], ErrorMessage);
        }
    }

    findBySerie(key){
        const QuerySQLBySerie = "SELECT * FROM clubes WHERE serie = ?;";
        const ErrorMessage = "Não foi possível encontrar a série.";
        const serie = key.toLowerCase();
        return query(QuerySQLBySerie, [serie], ErrorMessage);        
    }
}

export default new ClubeRepository();
