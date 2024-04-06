import { Router } from 'express'
import categoriaController from '../controller/categoria.controller'

const routesCategoria = Router()

routesCategoria.post('/categorias/', categoriaController.criaCategoria)
routesCategoria.get('/categorias/:id', categoriaController.buscaCategoria)
routesCategoria.get('/categorias/buscaCategoriasPorUsuarios/:id', categoriaController.buscaCategoriaPorUsuario)
routesCategoria.put('/categorias/:id', categoriaController.atualizaCategoria)
routesCategoria.delete('/categorias/:id', categoriaController.deletaCategoria)

export {
    routesCategoria
}