import { Router } from 'express'
import { LinksController } from './controllers/links-controller'

export const linksRouter = Router()


linksRouter.post('/url', new LinksController().registerUrl)
linksRouter.get('/url/:shortUrl', new LinksController().redirectShortUrl)
linksRouter.get('/url', new LinksController().urlHistory)
