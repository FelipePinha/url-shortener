import { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import { linksRepository } from '../repositories/links-repository'

export class LinksController {
    async registerUrl(req: Request, res: Response) {
        const { originalUrl } = req.body

        if(!originalUrl) {
            res.status(400).json({message: 'Url is missing'})
            return
        }

        try {
            const shortUrl = nanoid(8)

            const newShortUrl = linksRepository.create({
                originalUrl,
                shortUrl
            })

            await linksRepository.save(newShortUrl)

            res.json(newShortUrl)
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Internal server error'})
        }
    }

    async redirectShortUrl(req: Request, res: Response) {
        const { shortUrl } = req.params

        const url = await linksRepository.findBy({ shortUrl })

        if(!url) {
            res.status(404).json({message: 'url not found'})
            return
        }

        try {
            res.redirect(url[0].originalUrl)
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Internal server error'})
        }
    }

    async urlHistory(req: Request, res: Response) {
        try {
            const urls = await linksRepository.find()

            res.json(urls)
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Internal server error'})
        }
    }
}