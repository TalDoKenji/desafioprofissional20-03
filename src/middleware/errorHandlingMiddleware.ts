import { NextFunction, Request, Response } from "express";
import { apiError } from "../errors/apiError";
import Joi from "joi";
import { StatusCodes } from "http-status-codes";

class errorHandlingMiddleware {

    errorHandler(erro: Error, req: Request, res: Response, next: NextFunction) {

        if (erro instanceof apiError) {
            const status = erro.status
            const mensagem = erro.message
            res.status(status).json({ success: false, mensagem })
        }
        else if (erro instanceof Joi.ValidationError) {
            const mensagem = 'Erro no Joi'
            res.status(StatusCodes.BAD_REQUEST).json({ success: false, mensagem })
        }
        else {
            const success = false
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success, messase: erro.message })
        }

    }



}

export default new errorHandlingMiddleware()