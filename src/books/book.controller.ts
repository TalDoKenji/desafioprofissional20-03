import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {

    async create(req: Request, res: Response) {
        try {
            const book = await new BookService().create(req.body)
            return res.status(200).json(book)

        } catch (error: any) {
            console.log(error)
            return res.json(error.message)
        }
    }

    async findById(req: Request, res: Response) {
        const book = await new BookService().findById(req.params.id)
        return res.status(200).json(book)
    }

    async findAll(req: Request, res: Response) {
        const foundBook = await new BookService().findAll()
        return res.status(200).json(foundBook)
    }

    async updateOne(req: Request, res: Response) {
        const foundBook = await new BookService().updateOne(req.params.id, req.body)
        return res.status(200).json(foundBook)
    }

    async delete(req: Request, res: Response) {
        await new BookService().deleteBook(req.params.id)
        return res.status(204).json()
    }
}

export default new BookController()