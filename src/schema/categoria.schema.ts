import { ICategoria } from './../type/categoria';
import { Schema, model, Types } from 'mongoose';


const categoriaSchema = new Schema({
    id: { type: Types.ObjectId },
    nome: { type: String, required: true },
    cor: { type: String, required: true },
})

export default model<ICategoria>('Categorias', categoriaSchema)