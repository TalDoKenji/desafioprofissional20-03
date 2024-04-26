import { Router } from 'express'
import tarefaController from '../controller/tarefa.controller'
import { ValidationMiddleware } from '../middleware/validationMiddleware'
import { ValidateTarefa } from '../validation/validateTarefa'
import AuthenticationMiddleare from '../middleware/authenticationMiddleware'


const routesTarefa = Router()
routesTarefa.get('/tarefas/buscaTarefasPorUsuario/:id', [
    ValidationMiddleware.validatePayload(ValidateTarefa.buscaTarefasPorUsuario(), 'params')
], tarefaController.buscaTarefaPorUsuario)

routesTarefa.get('/tarefas/filtraTarefasPorCategoria/:id', [
    ValidationMiddleware.validatePayload(ValidateTarefa.filtraTarefaPorCategoria(), 'params')
], tarefaController.filtraTarefasPorCategoria)

routesTarefa.get('/tarefas/filtraTarefasConcluidasOuPendentes', tarefaController.filtraTarefasConcluidasOuPendentes)
routesTarefa.get('/tarefas/filtraTarefasPorPeriodo', tarefaController.filtraTarefasPorPeriodo)
routesTarefa.get('/tarefas/filtraQuantidadeTarefasPorUsuario/:id', tarefaController.filtraQtdeTarefasPorUsuario)
routesTarefa.get('/tarefas/filtraTarefaMaisRecente/:id', tarefaController.filtraTarefaRecente)
routesTarefa.get('/tarefas/filtraTarefaMaisAntiga/:id', tarefaController.filtraTarefaAntiga)
routesTarefa.get('/tarefas/filtraTarefaComMaiorDescricao', tarefaController.filtraTarefaComMaiorDescricao)
routesTarefa.get('/tarefas/calculaMediaConclusao', tarefaController.calculaMediaConclusao)

routesTarefa.get('/tarefas/:id', [
    ValidationMiddleware.validatePayload(ValidateTarefa.buscaTarefa(), 'params')
], tarefaController.buscaTarefa)

routesTarefa.put('/tarefas/:id', [
    AuthenticationMiddleare.authenticateToken,
    ValidationMiddleware.validatePayload(ValidateTarefa.atualizaTarefa(), 'body')
], tarefaController.atulizaTarefa)

routesTarefa.delete('/tarefas/:id', [
    AuthenticationMiddleare.authenticateToken,
    ValidationMiddleware.validatePayload(ValidateTarefa.deletaTarefa(), 'params')
], tarefaController.deletaTarefa)

routesTarefa.post('/tarefas', [
    AuthenticationMiddleare.authenticateToken,
    ValidationMiddleware.validatePayload(ValidateTarefa.criaTarefa(), 'body')
], tarefaController.criaTarefa)

export {
    routesTarefa
}