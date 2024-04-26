import { NextFunction, Request, Response } from "express";
import { apiError } from "../errors/apiError";
import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

class errorHandlingMiddleware {

    errorHandler(erro: Error, req: Request, res: Response, next: NextFunction) {

        if (erro instanceof apiError) {
            const status = erro.status
            const mensagem = erro.message
            res.status(status).json({ success: false, mensagem })
        }
        else if (erro instanceof Joi.ValidationError) {
            const mensagem = 'Revise os dados inseridos.'
            res.status(StatusCodes.BAD_REQUEST).json({ success: false, mensagem })
        }
        else if (erro instanceof mongoose.Error.CastError) {
            const mensagem = 'Revise as informações inseridas na rota'
            res.status(StatusCodes.BAD_REQUEST).json({ success: false, mensagem })
        }
        else {
            const success = false
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success, messase: erro.message })
        }

    }



}

export default new errorHandlingMiddleware()