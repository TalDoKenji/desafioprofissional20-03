import { apiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

export class DuplicatedContentError extends apiError {

    constructor(mensagem: string = 'DUPLICATED_CONTENT') {
        super(mensagem)
        this.status = StatusCodes.BAD_REQUEST
        this.name = 'DUPLICATED_CONTENT'
    }
}