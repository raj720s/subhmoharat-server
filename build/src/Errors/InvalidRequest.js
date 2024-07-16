"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRequest = void 0;
const _1 = require(".");
class InvalidRequest extends _1.ErrorException {
    constructor(message, errorCode, statusCode, error) {
        super(message, errorCode, statusCode, error);
    }
}
exports.InvalidRequest = InvalidRequest;
