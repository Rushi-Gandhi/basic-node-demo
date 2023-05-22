import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const dbPool = new Pool(
    {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: Number(process.env.DATABASE_PORT),
}
);

export default dbPool;

