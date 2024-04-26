import { StatusCodes } from "http-status-codes";
import { apiError } from "./apiError";


export class BadRequest extends apiError {
    
    constructor(mensagem: string = 'BAD_REQUEST'){
        super(mensagem)
        this.status = StatusCodes.BAD_REQUEST
        this.name = 'BAD_REQUEST'
    }
}