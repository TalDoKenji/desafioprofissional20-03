import { ObjectId } from 'mongoose';
import { Request, Response } from "express";
import tarefaService from '../service/tarefa.service';

class tarefaController {

    async criaTarefa(req: Request, res: Response) {
        const novaTarefa = await tarefaService.criaTarefa(req.body)
        return res.status(201).json(novaTarefa)
    }

    async buscaTarefa(req: Request, res: Response) {
        const tarefa = await tarefaService.buscaUmaTarefa(req.params.id)
        return res.status(200).json(tarefa)
    }

    async buscaTarefaPorUsuario(req: Request, res: Response) {
        const tarefa = await tarefaService.buscaTarefaPorUsuario(req.params.id)
        return res.status(200).json(tarefa)
    }

    async atulizaTarefa(req: Request, res: Response) {
        const tarefaAtualizada = await tarefaService.atualizaTarefa(req.params.id, req.body)
        return res.status(200).json(tarefaAtualizada)
    }

    async deletaTarefa(req: Request, res: Response) {
        await tarefaService.deletaTarefa(req.params.id)
        return res.status(204).json()
    }

    async filtraTarefasPorCategoria(req: Request, res: Response) {
        const tarefasFiltradas = await tarefaService.filtraTarefasPorCategoria(req.params.id)
        return res.status(200).json(tarefasFiltradas)
    }

    async filtraTarefasConcluidasOuPendentes(req: Request, res: Response) {
        const tarefasFiltradas = await tarefaService.filtraTarefasConcluidasOuPendentes()
        return res.status(200).json(tarefasFiltradas)
    }

    async filtraTarefasPorPeriodo(req: Request, res: Response) {
        const tarefasFiltradas = await tarefaService.filtraTarefasPorPeriodo(req.body, req.body)
        return res.status(200).json(tarefasFiltradas)
    }

    async filtraQtdeTarefasPorUsuario(req: Request, res: Response) {
        const tarefasFiltradas = await tarefaService.filtraQtdeTarefasPorUsuario(req.params.id)
        return res.status(200).json(tarefasFiltradas)
    }

    async filtraTarefaRecente(req: Request, res: Response) {
        const tarefaRecente = await tarefaService.filtraTarefaRecente(req.params.id)
        return res.status(200).json(tarefaRecente)
    }

    async filtraTarefaAntiga(req: Request, res: Response) {
        const tarefaAntiga = await tarefaService.filtraTarefaAntiga(req.params.id)
        return res.status(200).json(tarefaAntiga)
    }

    async filtraTarefaComMaiorDescricao(req: Request, res: Response) {
        const tarefaMaiorDescricao = await tarefaService.filtraTarefaDescricaoMaior()
        return res.status(200).json(tarefaMaiorDescricao)
    }
}

export default new tarefaController()