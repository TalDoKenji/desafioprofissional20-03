import { Router } from 'express'
import tarefaController from '../controller/tarefa.controller'


const routesTarefa = Router()
routesTarefa.post('/tarefas/', tarefaController.criaTarefa)
routesTarefa.get('/tarefas/buscaTarefasPorUsuario/:id', tarefaController.buscaTarefaPorUsuario)
routesTarefa.put('/tarefas/:id', tarefaController.atulizaTarefa)
routesTarefa.delete('/tarefas/:id', tarefaController.deletaTarefa)

routesTarefa.get('/tarefas/filtraTarefasPorCategoria/:id', tarefaController.filtraTarefasPorCategoria)
routesTarefa.get('/tarefas/filtraTarefasConcluidasOuPendentes', tarefaController.filtraTarefasConcluidasOuPendentes)
routesTarefa.get('/tarefas/filtraTarefasPorPeriodo', tarefaController.filtraTarefasPorPeriodo)
routesTarefa.get('/tarefas/filtraQuantidadeTarefasPorUsuario/:id', tarefaController.filtraQtdeTarefasPorUsuario)
routesTarefa.get('/tarefas/filtraTarefaMaisRecente/:id', tarefaController.filtraTarefaRecente)
routesTarefa.get('/tarefas/filtraTarefaMaisAntiga/:id', tarefaController.filtraTarefaAntiga)
routesTarefa.get('/tarefas/filtraTarefaComMaiorDescricao', tarefaController.filtraTarefaComMaiorDescricao)

routesTarefa.get('/tarefas/:id', tarefaController.buscaTarefa)

export {
    routesTarefa
}