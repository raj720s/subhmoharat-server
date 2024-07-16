import { ERRORCODES, ErrorException, STATUSCODES } from ".";


export class BadRequest extends ErrorException {
    constructor(message: string, errorCode: ERRORCODES, statusCode: STATUSCODES, error: any) {
        super(message, errorCode, 400, null)
    }
}