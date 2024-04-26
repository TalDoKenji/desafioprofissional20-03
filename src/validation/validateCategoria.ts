import Joi, { string } from 'joi';


export class ValidateCategoria {

    static criaCategoria() {
        const criaCategoriaValidator = Joi.object({
            nome: Joi.string().required(),
            cor: Joi.string().required(),
        })
        return criaCategoriaValidator;
    }

    static buscaCategoria() {
        const buscaCategoriaValidator = Joi.object({
            id: Joi.string().required()
        })
        return buscaCategoriaValidator
    }

    static buscaCategoriaPorUsuario() {
        const buscaCategoriaPorUsuarioValidator = Joi.object({
            id: Joi.string().required()
        })
        return buscaCategoriaPorUsuarioValidator
    }

    static atualizaCategoria() {
        const atualizaCategoriaValidator = Joi.object({
            nome: Joi.string().required(),
            cor: Joi.string().required()
        })
        return atualizaCategoriaValidator
    }
    
    static deletaCategoria() {
        const deletaCategoriaValidator = Joi.object({
            id: Joi.string().required()
        })
        return deletaCategoriaValidator
    }
}