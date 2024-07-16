"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (error, req, res, next) => {
    res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
        error: error.error
    });
};
exports.errorMiddleware = errorMiddleware;
