"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncController_1 = require("../middlewares/asyncController");
const hello_1 = require("../controllers/hello");
const rootRouter = (0, express_1.Router)();
rootRouter.get('/hello', (0, asyncController_1.asyncController)(hello_1.hello));
exports.default = rootRouter;
