import { apiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

export class UnauthorizedError extends apiError {
    
    constructor(mensagem: string = 'UNAUTHORIZED') {
        super(mensagem)
        this.status = StatusCodes.UNAUTHORIZED
        this.name = 'UNAUTHORIZED'
    }

}
