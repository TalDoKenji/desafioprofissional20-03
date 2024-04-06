import { Schema, model } from "mongoose";
import { statusTarefa } from "../enum/statusTarefa.enum";
import { ITarefa } from "../type/tarefa";

const tarefaSchema = new Schema({

    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
    tipo: { type: String, required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
    status: { type: String, enum: statusTarefa, required: true },
    usuarioAssociado: { type: Schema.Types.ObjectId, ref: 'Usuarios', required: true }
})

export default model<ITarefa>('Tarefas', tarefaSchema)