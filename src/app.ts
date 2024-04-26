import express from 'express'
import 'express-async-errors'
import mongoose from 'mongoose'
import { routesUsuario } from './route/usuario.routes'
import { routesCategoria } from './route/categoria.routes'
import { routesTarefa } from './route/tarefa.route'
import errorHandlingMiddleware from './middleware/errorHandlingMiddleware'

class App {
    express: express.Application

    constructor() {
        this.express = express()
        this.database()
        this.middleware()
    }

    private middleware(): void {
        this.express.use(express.json())
        this.express.use('/api/v1', routesTarefa)
        this.express.use('/api/v1', routesCategoria)
        this.express.use('/api/v1', routesUsuario)
        this.express.use(errorHandlingMiddleware.errorHandler)

    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/')
            console.log("connect database success")
        } catch (error) {
            console.error('Cannot connect to database, error:', error)
        }
    }

}

export default new App().express