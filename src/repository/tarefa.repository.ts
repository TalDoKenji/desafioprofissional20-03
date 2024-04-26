import { ObjectId } from 'mongoose';
import { ITarefa } from './../type/tarefa';
import tarefasSchema from '../schema/tarefas.schema';
import { statusTarefa } from '../enum/statusTarefa.enum';
import { NotFoundError } from '../errors/notFoundError';


class tarefaRepository {

    async criaTarefa(tarefa: ITarefa) {
        const novaTarefa = await tarefasSchema.create(tarefa)
        return novaTarefa
    }

    async buscaTarefa(idTarefa: string) {
        const tarefa = await tarefasSchema.findById({ _id: idTarefa })
        if (!tarefa)
            throw new NotFoundError('Tarefa não encontrada. Verifique o valor informado.')
        return tarefa
    }

    async buscaTarefaPorUsuario(idUsuario: string) {
        const tarefa = await tarefasSchema.find({ usuarioAssociado: { $eq: idUsuario } })
        if (!tarefa)
            throw new NotFoundError('Usuario não encontrado. Verifique o valor informado.')
        return tarefa
    }

    async atualizaTarefa(idTarefa: string, tarefaAtualizada: ITarefa) {
        const tarefa = await tarefasSchema.findByIdAndUpdate(idTarefa, tarefaAtualizada, { new: true })
        if (!tarefa)
            throw new NotFoundError('Tarefa não encontrada. Verifique o valor informado.')
        return tarefa
    }

    async deletaTarefa(idTarefa: string) {
        const tarefaDeletada = await tarefasSchema.findByIdAndDelete(idTarefa)
        if (tarefaDeletada)
            throw new NotFoundError('Tarefa não encontrada. Verifique o valor informado.')
        return null
    }

    async filtraTarefasPorCategoria(idCategoria: string) {
        const tarefas = await tarefasSchema.find({ categoria: { $eq: idCategoria } })
        if (!tarefas)
            throw new NotFoundError('Categoria não encontrada. Verifique o valor informado.')
        return tarefas
    }

    async filtraTarefasConcluidasOuPendentes() {
        const tarefas = await tarefasSchema.find()
        const tarefasConcluidas = tarefas.filter(tarefaFiltrada => tarefaFiltrada.status === statusTarefa.Concluida)
        const tarefasPendentes = tarefas.filter(tarefaFiltrada => tarefaFiltrada.status === statusTarefa.Pendente)
        if (tarefasConcluidas.length === 0) {
            return tarefasPendentes
        }
        return tarefasConcluidas
    }

    async filtraTarefasPorPeriodo(dataInicial: Date, dataFinal: Date) {
        const tarefas = await tarefasSchema.find()
        const tarefasFiltradas = tarefas
            .filter(tarefaFiltrada => tarefaFiltrada.dataInicio >= dataInicial && tarefaFiltrada.dataFim <= dataFinal)
        return tarefasFiltradas
    }

    async filtraQtdeTarefasPorUsuario(idUsuario: string) {
        const tarefas = await tarefasSchema.find()
        const tarefasFiltradas = tarefas.filter(tarefaFiltrada => tarefaFiltrada.usuarioAssociado == idUsuario)
        if (!tarefasFiltradas)
            throw new NotFoundError('Usuario não encontrado. Verifique o valor informado.')
        return tarefasFiltradas.length
    }

    async filtraTarefaRecente(idUsuario: string) {
        const tarefas = await tarefasSchema.find()
        const tarefaFiltrada = tarefas.filter(tarefaFiltrada => tarefaFiltrada.usuarioAssociado == idUsuario)
            .sort((a, b) => a.dataInicio.getTime() + b.dataInicio.getTime())
        if (!tarefaFiltrada)
            throw new NotFoundError('Usuario não encontrado. Verifique o valor informado.')
        return tarefaFiltrada[0]
    }

    async filtraTarefaAntiga(idUsuario: string) {
        const tarefas = await tarefasSchema.find()
        const tarefaFiltrada = tarefas.filter(tarefaFiltrada => tarefaFiltrada.usuarioAssociado == idUsuario)
            .sort((a, b) => a.dataInicio.getTime() - b.dataInicio.getTime())
        if (!tarefaFiltrada)
            throw new NotFoundError('Usuario não encontrado. Verifique o valor informado.')
        return tarefaFiltrada[0]
    }

    async filtraTarefaDescricaoMaior() {
        const tarefas = await tarefasSchema.find()
        const tarefaFiltrada = tarefas.sort((a, b) => a.descricao.length + b.descricao.length)
        return tarefaFiltrada[tarefaFiltrada.length - 1]
    }

    async calculaMediaDeConclusao() {
        const tarefas = await tarefasSchema.find()
        const tarefasConcluidas = tarefas.filter(tarefaFiltrada => tarefaFiltrada.status == statusTarefa.Concluida)
        return this.mediaConclusao(tarefas.length, tarefasConcluidas.length)
    }

    private mediaConclusao(totalTarefas: number, tarefasConcluidas: number) {
        const media = (tarefasConcluidas / totalTarefas) * 100
        return `${media.toFixed(2)}%`
    }


}

export default new tarefaRepository()