import { ITarefa } from './../type/tarefa';
import { ObjectId } from "mongoose";
import tarefaSchema from "../schema/tarefas.schema";
import tarefasSchema from "../schema/tarefas.schema";
import { statusTarefa } from "../enum/statusTarefa.enum";

class tarefaService {

    async criaTarefa(tarefa: ITarefa) {
        const novaTarefa = await tarefaSchema.create(tarefa)
        return novaTarefa
    }

    async buscaUmaTarefa(id: String) {
        const tarefa = await tarefaSchema.findById({ _id: id });
        tarefa?._id
        return tarefa
    }

    async buscaTarefaPorUsuario(idUsuario: string) {
        const tarefa = await tarefaSchema.find({ usuarioAssociado: { $eq: idUsuario } })
        return tarefa
    }

    async atualizaTarefa(id: String, tarefaAtualizada: ITarefa) {
        const tarefa = await tarefaSchema.findByIdAndUpdate(id, tarefaAtualizada, { new: true })
        return tarefa
    }

    async deletaTarefa(id: String) {
        await tarefaSchema.findByIdAndDelete(id);
    }

    async filtraTarefasPorCategoria(id: any) {
        const tarefa = await tarefaSchema.find()
        const tarefaFiltrada = tarefa.filter(tarefaFiltrada => tarefaFiltrada.categoria == id)
        return tarefaFiltrada
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
        const tarefas = await tarefaSchema.find()
        const tarefasFiltradas = tarefas
            .filter(tarefaFiltrada => tarefaFiltrada.dataInicio >= dataInicial && tarefaFiltrada.dataFim <= dataFinal)
        return tarefasFiltradas
    }

    async filtraQtdeTarefasPorUsuario(idUsuario: any) {
        const tarefas = await tarefaSchema.find()
        const tarefasFiltadas = tarefas.filter(tarefaFiltrada => tarefaFiltrada.usuarioAssociado == idUsuario)
        return tarefasFiltadas.length
    }

    async filtraTarefaRecente(idUsuario: any) {
        const tarefas = await tarefasSchema.find()
        const tarefaFiltrada = tarefas.filter(tarefaFiltrada => tarefaFiltrada.usuarioAssociado == idUsuario)
            .sort((a, b) => a.dataInicio.getTime() + b.dataInicio.getTime())
        return tarefaFiltrada[0]
    }

    async filtraTarefaAntiga(idUsuario: any) {
        const tarefas = await tarefaSchema.find()
        const tarefaFiltrada = tarefas.filter(tarefaFiltrada => tarefaFiltrada.usuarioAssociado == idUsuario)
            .sort((a, b) => a.dataInicio.getTime() - b.dataInicio.getTime())
        return tarefaFiltrada[0]
    }

    async filtraTarefaDescricaoMaior() {
        const tarefas = await tarefaSchema.find()
        const tarefaFiltrada = tarefas.sort((a, b) => a.descricao.length - b.descricao.length)
        return tarefaFiltrada[0]
    }

    async calculaMediaDeConclusao() {
        const tarefas = await tarefaSchema.find()
        const tarefasConcluidas = tarefas.filter(tarefaFiltrada => tarefaFiltrada.status == statusTarefa.Concluida)
        const totalDias = tarefasConcluidas.reduce((acc, tarefa) => {
            const diffData = tarefa.dataFim.getTime() - tarefa.dataInicio.getTime()
            return acc + diffData
        }, 0)
        return totalDias/tarefas.length
    }
}

export default new tarefaService()