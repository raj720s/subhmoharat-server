"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRoute = void 0;
const Errors_1 = require("../Errors");
class InvalidRoute extends Errors_1.ErrorException {
    constructor(message, errorCode, statusCode, error) {
        super(message, errorCode, statusCode, null);
    }
}
exports.InvalidRoute = InvalidRoute;
