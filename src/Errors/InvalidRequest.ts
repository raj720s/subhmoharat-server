import { any } from "zod"
import { ERRORCODES, ErrorException, STATUSCODES } from "."


export class InvalidRequest extends ErrorException {
    constructor(message: string, errorCode: ERRORCODES, statusCode: STATUSCODES, error: any) {
        super(message, errorCode, statusCode, error)
    }
}