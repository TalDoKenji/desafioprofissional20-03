import { Document } from "mongoose";

export interface IUsuario extends Document {

    nome: string
    peso: number
    email: string
    senha: string
}