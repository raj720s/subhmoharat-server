"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const prisma_client_1 = require("prisma/prisma-client");
const secrets_1 = require("../secrets");
const invalidRoute_1 = require("./middlewares/invalidRoute");
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/api', routes_1.default);
exports.prisma = new prisma_client_1.PrismaClient({
    log: ["query"]
});
app.listen(secrets_1.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.prisma.$connect().then(() => console.log("DB connected")).catch((err) => console.log(err));
    console.log(`server listening on PORT ${secrets_1.PORT}`);
}));
app.use('*', invalidRoute_1.invalidRouteCatcher);
app.use(errorMiddleware_1.errorMiddleware);
