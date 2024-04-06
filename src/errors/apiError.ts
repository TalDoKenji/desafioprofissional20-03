import { StatusCodes } from "http-status-codes"


export class apiError extends Error {
    public status: number
    
    constructor(mensagem : string = 'INTERNAL_SERVER_ERROR'){
        super(mensagem)
        this.status = StatusCodes.INTERNAL_SERVER_ERROR
        this.name = 'INTERNAL_SERVER_ERROR'
    }
}
