import { Document, ObjectId } from "mongoose"

export interface ITarefa extends Document {

    titulo: string,
    descricao: string,
    dataInicio: Date,
    dataFim: Date,
    tipo: string,
    categoria: string,
    status: string,
    usuarioAssociado: string

}