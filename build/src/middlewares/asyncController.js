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
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncController = void 0;
const zod_1 = require("zod");
const Errors_1 = require("../Errors");
const InvalidRequest_1 = require("../Errors/InvalidRequest");
const InternalException_1 = require("../Errors/InternalException");
// generic error handler
const asyncController = (controller) => {
    // wraps the controller functions 
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield controller(req, res, next);
        }
        catch (error) {
            console.log(error);
            let ex;
            if (error instanceof Errors_1.ErrorException) {
                ex = error;
            }
            else {
                if (error instanceof zod_1.ZodError) {
                    console.log({ error });
                    ex = new InvalidRequest_1.InvalidRequest('Invalid request', Errors_1.ERRORCODES.INVALID_REQUEST, Errors_1.STATUSCODES.BAD_REQUEST, error);
                }
                else {
                    ex = new InternalException_1.InternalException('Something went wrong', Errors_1.ERRORCODES.INTERNAL_SERVER_ERROR, Errors_1.STATUSCODES.INTERNAL_SERVER_ERROR, error);
                }
            }
            next(ex);
        }
    });
};
exports.asyncController = asyncController;
