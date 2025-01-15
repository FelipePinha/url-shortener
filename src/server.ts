import { AppDataSource } from './data-source'
import express from 'express'
import { linksRouter } from './routes'

const port = process.env.PORT

AppDataSource.initialize()
    .then(() => {
        const app = express()

        app.use(express.json())
        app.use(linksRouter)

        app.listen(port, () => console.log('Server running'))
    })