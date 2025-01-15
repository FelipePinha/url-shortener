import { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import { linksRepository } from '../repositories/links-repository'

export class LinksController {
    async shortenUrl(req: Request, res: Response) {
        const { originalUrl } = req.body

        if(!originalUrl) {
            res.status(400).json({message: 'Url is missing'})
            return
        }

        const shortUrl = nanoid(8)

        const newShortUrl = linksRepository.create({
            originalUrl,
            shortUrl
        })

        await linksRepository.save(newShortUrl)

        res.json(newShortUrl)
    }
}