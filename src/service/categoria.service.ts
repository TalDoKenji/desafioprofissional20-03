import { ObjectId } from 'mongoose';
import categoriaSchema from "../schema/categoria.schema";
import { ICategoria } from "../type/categoria";
import tarefasSchema from '../schema/tarefas.schema';

class categoriaService {

    async criaCategoria(categoria: ICategoria) {
        const novaCategoria = await categoriaSchema.create(categoria)
        return novaCategoria
    }

    async buscaCategoria(id: String) {
        const categoria = await categoriaSchema.findById(id)
        return categoria
    }

    async buscaCategoriasPorUsuario(idUsuario: string) {
        const categoria = await tarefasSchema.aggregate([
            { $match: { usuarioAssociado: idUsuario } },
            { $group: { _id: '$categoria' } }
        ])
        return categoria
    }

    async atualizaCategoria(id: String, categoria: ICategoria) {
        const categoriaAtualizada = await categoriaSchema.findByIdAndUpdate(id, categoria, { new: true })
        return categoriaAtualizada
    }

    async deletaCategoria(id: String) {
        await categoriaSchema.findByIdAndDelete(id)
    }
}

export default new categoriaService()