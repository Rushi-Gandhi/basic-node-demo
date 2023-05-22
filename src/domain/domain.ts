import e, {Request , Response} from 'express'
import DataBaseLayer  from "../database-layer/db-layer";
import { Todos } from '../model/todos-model';

class Domain {
     static async getdata(req : Request , res : Response) {
      
       try {
        // var a = await DataBaseLayer.findById('todos' , 2)
        var a = await Todos.findAll();
        
        res.send(a);
       } catch (error :any ) {
        res.status(500).send(error.message)
       }
      
        
    }
}

export  {Domain};