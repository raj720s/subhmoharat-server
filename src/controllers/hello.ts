
import { NextFunction, Request, Response } from "express"
export const hello = async (req: Request, res: Response, next: NextFunction) => {

    return res.json({ message: 'hello-world' })
}