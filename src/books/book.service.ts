import bookModel from './book.schema'

export class BookService {
    async create(book: any) {
        const createdBook = bookModel.create(book)
        return createdBook
    }

    async findById(id: any) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }

    async findAll() {
        const findedBooks = await bookModel.find()
        return findedBooks
    }

    async updateOne(id: any, book: any) {
        const updateted = await bookModel.findByIdAndUpdate(id, book, { new: true })
        return updateted;
    }

    async deleteBook(id: any) {
        await bookModel.findByIdAndDelete(id)
    }
}