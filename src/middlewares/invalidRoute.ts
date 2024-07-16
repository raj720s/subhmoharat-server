import { Request, Response, NextFunction } from "express";
import { InvalidRoute } from "../Errors/InvalidRoute";
import { ERRORCODES, STATUSCODES } from "../Errors";




export const invalidRouteCatcher = (req: Request, res: Response, next: NextFunction) => {
    return next(new InvalidRoute('Route not found', ERRORCODES.FORBIDDEN, STATUSCODES.NOT_FOUND, null))
}