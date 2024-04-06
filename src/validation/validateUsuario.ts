import Joi, { string } from "joi";

export class ValidateUsuario {

    static cadastraUsuario() {
        const cadastroUsuarioValidator = Joi.object({
            nome: Joi.string().required(),
            peso: Joi.number().min(0),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            senha: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
        })
        return cadastroUsuarioValidator
    }

    static loginUsuario() {
        const loginUsuarioValidator = Joi.object({
            email: Joi.string().required(),
            senha: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
        })
        return loginUsuarioValidator
    }
}

