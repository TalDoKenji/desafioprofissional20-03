import { apiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

export class NotFoundError extends apiError{
    
    constructor(mensagem: string = 'NOT_FOUND') {
        super(mensagem)
        this.status = StatusCodes.NOT_FOUND
        this.name = 'NOT_FOUND'
    }
}

