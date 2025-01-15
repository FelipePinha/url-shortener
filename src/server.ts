import { AppDataSource } from './data-source'
import express from 'express'

const port = process.env.PORT

AppDataSource.initialize()
    .then(() => {
        const app = express()

        app.use(express.json())

        app.listen(port, () => console.log('Server running'))
    })