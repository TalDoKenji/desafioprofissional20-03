import { ValidateUsuario } from './../validation/validateUsuario';
import { Router } from 'express'
import usuariosController from '../controller/usuarios.controller'
import { ValidationMiddleware } from '../middleware/validationMiddleware'

const routesUsuario = Router()

routesUsuario.post('/usuarios', [
    ValidationMiddleware.validatePayload(ValidateUsuario.cadastraUsuario(), 'body')
], usuariosController.cadastroUsuario);

routesUsuario.get('/usuarios/login',[
    ValidationMiddleware.validatePayload(ValidateUsuario.loginUsuario(), 'body')
], usuariosController.login);

export {
    routesUsuario
}