import { Document } from "mongoose";

export interface ICategoria extends Document {

    id:String,
    nome: String,
    cor: String,
}