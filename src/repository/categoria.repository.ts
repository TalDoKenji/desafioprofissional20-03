import { error } from 'console';
import { ICategoria } from './../type/categoria';
import categoriaSchema from '../schema/categoria.schema';
import tarefasSchema from '../schema/tarefas.schema';


class categoriaRepository {

    async criaCategoria(categoria: ICategoria) {
        const novaCategoria = await categoriaSchema.create(categoria)
        return novaCategoria
    }

    async buscaCategoria(idCategoria: string) {
        const categoria = await categoriaSchema.findById({ _id: idCategoria })
        return categoria
    }

    async buscaCategoriasPorUsuario(idUsuario: string) {
            const categoriaUsuario = await tarefasSchema.find(
                { usuarioAssociado: idUsuario },
                { categoria: 1, _id: 0 }
            ).distinct('categoria')
            return await categoriaSchema.find({ _id: { $in: categoriaUsuario } })
        
    }

    async atualizaCategoria(idCategoria: string, categoria: ICategoria) {
        const categoriaAtualizada = await categoriaSchema.findByIdAndUpdate(idCategoria, categoria, { new: true })
        return categoriaAtualizada
    }

    async deletaCategoria(idCategoria: string) {
        await categoriaSchema.findByIdAndDelete(idCategoria)
    }
}

export default new categoriaRepository()