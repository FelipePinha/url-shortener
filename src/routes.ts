import { Router } from 'express'
import { LinksController } from './controllers/links-controller'

export const linksRouter = Router()

linksRouter.post('/url', new LinksController().shortenUrl)
