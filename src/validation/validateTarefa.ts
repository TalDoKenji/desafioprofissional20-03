import Joi, { string } from "joi"

export class ValidateTarefa {

    static criaTarefa() {
        const criaTarefaValidator = Joi.object({
            titulo: Joi.string().required(),
            descricao: Joi.string().required(),
            dataInicio: Joi.date().required(),
            dataFim: Joi.date().required(),
            tipo: Joi.string().required(),
            categoria: Joi.string().required(),
            status: Joi.string().required(),
            usuarioAssociado: Joi.string().required()
        })
        return criaTarefaValidator
    }

    static buscaTarefa() {
        const buscaTarefaValidator = Joi.object({
            id: Joi.string().required()
        })
        return buscaTarefaValidator
    }

    static buscaTarefasPorUsuario() {
        const buscaTarefaPorUsuarioValidator = Joi.object({
            id: Joi.string().required().dataUri
        })
        return buscaTarefaPorUsuarioValidator
    }

    static atualizaTarefa() {
        const atualizaTarefaValidator = Joi.object({
            titulo: Joi.string().required(),
            descricao: Joi.string().required(),
            dataInicio: Joi.date().required(),
            dataFim: Joi.date().required(),
            tipo: Joi.string().required(),
            categoria: Joi.string().required(),
            status: Joi.string().required(),
            usuarioAssociado: Joi.string().required()
        })
        return atualizaTarefaValidator
    }

    static deletaTarefa() {
        const deletaTarefaValidator = Joi.object({
            id: Joi.string().required().dataUri
        })
        return deletaTarefaValidator
    }

    static filtraTarefaPorCategoria() {
        const filtraTarefaCategoriaValidator = Joi.object({
            id: Joi.string().required().dataUri
        })
        return filtraTarefaCategoriaValidator
    }

    

}