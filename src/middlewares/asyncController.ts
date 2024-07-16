import { NextFunction, Request, Response } from "express"


import { ZodError } from "zod"
import { ERRORCODES, ErrorException, STATUSCODES } from "../Errors"
import { InvalidRequest } from "../Errors/InvalidRequest"
import { InternalException } from "../Errors/InternalException"



// generic error handler
export const asyncController = (controller: Function) => {
    // wraps the controller functions 
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res, next)
        } catch (error: any) {
            console.log(error)
            let ex;
            if (error instanceof ErrorException) {
                ex = error
            }
            else {
                if (error instanceof ZodError) {
                    console.log({ error })
                    ex = new InvalidRequest('Invalid request', ERRORCODES.INVALID_REQUEST, STATUSCODES.BAD_REQUEST, error)
                }
                else {
                    ex = new InternalException('Something went wrong', ERRORCODES.INTERNAL_SERVER_ERROR, STATUSCODES.INTERNAL_SERVER_ERROR, error)

                }
            }
            next(ex)
        }
    }
}