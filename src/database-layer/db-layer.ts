import dbPool from "../config/pool";

class DataBaseLayer {
    static async find (tableName : string){
        return (await dbPool.query(`SELECT * FROM  ${tableName}`)).rows;
    
    }

    static async findById (tableName : string , id : any){
        return (await dbPool.query(`SELECT * FROM  ${tableName} WHERE id=${id}`)).rows;
    
    }
}
export default DataBaseLayer;