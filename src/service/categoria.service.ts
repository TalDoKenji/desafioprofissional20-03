import categoriaSchema from "../schema/categoria.schema";
import { ICategoria } from "../type/categoria";
import tarefasSchema from '../schema/tarefas.schema';
import categoriaRepository from "../repository/categoria.repository";
import tarefaRepository from "../repository/tarefa.repository";
import { ObjectId } from "mongoose";

class categoriaService {

    async criaCategoria(categoria: ICategoria) {
        const novaCategoria = await categoriaRepository.criaCategoria(categoria)
        return novaCategoria
    }

    async buscaCategoria(idCategoria: string) {
        const categoria = await categoriaRepository.buscaCategoria(idCategoria)
        return categoria
    }

    async buscaCategoriasPorUsuario(idUsuario: string) {
        const categoria = await categoriaRepository.buscaCategoriasPorUsuario(idUsuario)
        return categoria
    }

    async atualizaCategoria(idCategoria: string, categoria: ICategoria) {
        const categoriaAtualizada = await categoriaRepository.atualizaCategoria(idCategoria, categoria)
        return categoriaAtualizada
    }

    async deletaCategoria(idCategoria: string) {
        await categoriaRepository.deletaCategoria(idCategoria)
    }
}

export default new categoriaService()