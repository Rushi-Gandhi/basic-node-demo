
import dotenv from 'dotenv';
import app from './app'
import dbPool from './config/pool';
import { sequelize } from './model/todos-model';

dotenv.config();
const serverPort = process.env.SERVER_PORT || 3001;
async function start() {
    try {
       // await sequelize.sync()
       //await dbPool.connect();
        app.listen(serverPort , ()=>{
            console.log('📡 Listening on port :',serverPort);
        });
    } catch (error: any) {
        throw Error(error)
    }
}

start();
