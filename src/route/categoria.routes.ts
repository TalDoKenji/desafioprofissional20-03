import { ValidateCategoria } from './../validation/validateCategoria';
import { Router } from 'express'
import categoriaController from '../controller/categoria.controller'
import { ValidationMiddleware } from '../middleware/validationMiddleware'
import AuthenticationMiddleare from '../middleware/authenticationMiddleware';

const routesCategoria = Router()

routesCategoria.post('/categorias/', [
    AuthenticationMiddleare.authenticateToken,
    ValidationMiddleware.validatePayload(ValidateCategoria.criaCategoria(), 'body')
], categoriaController.criaCategoria)

routesCategoria.get('/categorias/:id', [
    ValidationMiddleware.validatePayload(ValidateCategoria.buscaCategoria(), 'params')
], categoriaController.buscaCategoria)

routesCategoria.get('/categorias/buscaCategoriasPorUsuarios/:id', [
    ValidationMiddleware.validatePayload(ValidateCategoria.buscaCategoriaPorUsuario(), 'params')
], categoriaController.buscaCategoriaPorUsuario)

routesCategoria.put('/categorias/:id', [
    AuthenticationMiddleare.authenticateToken,
    ValidationMiddleware.validatePayload(ValidateCategoria.atualizaCategoria(), 'body')
], categoriaController.atualizaCategoria)

routesCategoria.delete('/categorias/:id', [
    AuthenticationMiddleare.authenticateToken,
    ValidationMiddleware.validatePayload(ValidateCategoria.deletaCategoria(), 'params')
], categoriaController.deletaCategoria)

export {
    routesCategoria
}