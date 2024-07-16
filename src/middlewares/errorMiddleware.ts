import { error } from "console"
import { NextFunction, Request, Response } from "express"
import { ErrorException } from "../Errors"



export const errorMiddleware = (error: ErrorException, req: Request, res: Response, next: NextFunction) => {
    res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
        error: error.error
    })
}