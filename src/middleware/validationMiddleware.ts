import { error } from 'console';
import { NextFunction, Request, Response, } from "express";
import Joi from "joi";

export class ValidationMiddleware {

    static validatePayload (joiValidateObject: Joi.ObjectSchema, target: 'body' | 'query' | 'params') {
        return (req: Request, res: Response, next: NextFunction) => {
            const { error } = joiValidateObject.validate(req[target], { abortEarly: false})
            if(error) {
                throw error
            }
            return next()
        }
    }
}