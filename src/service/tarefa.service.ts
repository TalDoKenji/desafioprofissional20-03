import { ITarefa } from './../type/tarefa';
import tarefaSchema from "../schema/tarefas.schema";
import tarefaRepository from '../repository/tarefa.repository';
import { ObjectId } from 'mongoose';

class tarefaService {

    async criaTarefa(tarefa: ITarefa) {
        const novaTarefa = await tarefaRepository.criaTarefa(tarefa)
        return novaTarefa
    }

    async buscaUmaTarefa(idTarefa: string) {
        const tarefa = await tarefaRepository.buscaTarefa(idTarefa)
        return tarefa
    }

    async buscaTarefaPorUsuario(idUsuario: string) {
        const tarefa = await tarefaRepository.buscaTarefaPorUsuario(idUsuario)
        return tarefa
    }

    async atualizaTarefa(idTarefa: string, tarefaAtualizada: ITarefa) {
        const tarefa = await tarefaRepository.atualizaTarefa(idTarefa, tarefaAtualizada)
        return tarefa
    }

    async deletaTarefa(idTarefa: string) {
        await tarefaRepository.deletaTarefa(idTarefa);
    }

    async filtraTarefasPorCategoria(idCategoria: string) {
        const tarefaFiltrada = await tarefaRepository.filtraTarefasPorCategoria(idCategoria)
        return tarefaFiltrada
    }

    async filtraTarefasConcluidasOuPendentes() {
        const tarefas = await tarefaRepository.filtraTarefasConcluidasOuPendentes()
        return tarefas
    }

    async filtraTarefasPorPeriodo(dataInicial: Date, dataFinal: Date) {
        const tarefasFiltradas = await tarefaRepository.filtraTarefasPorPeriodo(dataInicial, dataFinal)
        return tarefasFiltradas
    }

    async filtraQtdeTarefasPorUsuario(idUsuario: string) {
        const tarefasFiltradas = await tarefaRepository.filtraQtdeTarefasPorUsuario(idUsuario) 
        return tarefasFiltradas
    }

    async filtraTarefaRecente(idUsuario: string) {
        const tarefaRecente = await tarefaRepository.filtraTarefaRecente(idUsuario)
        return tarefaRecente
    }

    async filtraTarefaAntiga(idUsuario: string) {
        const tarefaAntiga = await tarefaRepository.filtraTarefaAntiga(idUsuario)
        return tarefaAntiga
    }

    async filtraTarefaDescricaoMaior() {
        const tarefaFiltrada = await tarefaRepository.filtraTarefaDescricaoMaior()
        return tarefaFiltrada
    }

    async calculaMediaDeConclusao() {
        const mediaConclusao = await tarefaRepository.calculaMediaDeConclusao()
        return mediaConclusao
    }
}

export default new tarefaService()