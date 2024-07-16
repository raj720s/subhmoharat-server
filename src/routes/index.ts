import { Router } from "express";
import { asyncController } from "../middlewares/asyncController";
import { hello } from "../controllers/hello";

const rootRouter: Router = Router();

rootRouter.get('/hello', asyncController(hello))

export default rootRouter