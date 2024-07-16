import express, { Express, Request, Response } from "express";
import rootRouter from "./routes";
import { PrismaClient } from 'prisma/prisma-client'
import { PORT } from "../secrets";
import { invalidRouteCatcher } from "./middlewares/invalidRoute";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import morgan from 'morgan'

const app = express();
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', rootRouter)

app.get('/', (req: Request, res: Response) => {

    return res.json({ message: 'hello-subhmoharat' })
})

export const prisma = new PrismaClient({
    log: ["query"]
})

app.listen(PORT, async () => {
    await prisma.$connect().then(() => console.log("DB connected")).catch((err: any) => console.log(err))
    console.log(`server listening on PORT ${PORT}`)
})

app.use('*', invalidRouteCatcher)

app.use(errorMiddleware)

