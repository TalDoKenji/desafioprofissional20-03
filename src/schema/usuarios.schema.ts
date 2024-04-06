import { IUsuario } from '../type/usuario';
import { Types, model, Schema } from 'mongoose'

const usuarioSchema = new Schema({

    id: { type: Types.ObjectId },
    nome: { type: String, required: true },
    peso: { type: Number },
    senha: { type: String, required: true },
    email: { type: String, required: true, unique: true }
})

export default model<IUsuario>('Usuarios', usuarioSchema)