"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalException = void 0;
const _1 = require(".");
class InternalException extends _1.ErrorException {
    constructor(message, errorCode, statusCode, error) {
        super(message, errorCode, statusCode, error);
    }
}
exports.InternalException = InternalException;
