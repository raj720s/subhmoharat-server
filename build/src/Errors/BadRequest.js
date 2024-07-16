"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
const _1 = require(".");
class BadRequest extends _1.ErrorException {
    constructor(message, errorCode, statusCode, error) {
        super(message, errorCode, 400, null);
    }
}
exports.BadRequest = BadRequest;
