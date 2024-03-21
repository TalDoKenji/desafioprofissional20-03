import { Schema, model } from 'mongoose'

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: String,
    ISBN: String,
    pageNumber: Number
}, {
    timestamps: true
})

export default model('Books', bookSchema)