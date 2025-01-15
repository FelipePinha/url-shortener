import { DataSource } from "typeorm"
import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()

const dbPort = Number(process.env.DB_PORT)

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: dbPort,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})