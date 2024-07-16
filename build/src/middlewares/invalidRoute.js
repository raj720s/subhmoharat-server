"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidRouteCatcher = void 0;
const InvalidRoute_1 = require("../Errors/InvalidRoute");
const Errors_1 = require("../Errors");
const invalidRouteCatcher = (req, res, next) => {
    return next(new InvalidRoute_1.InvalidRoute('Route not found', Errors_1.ERRORCODES.FORBIDDEN, Errors_1.STATUSCODES.NOT_FOUND, null));
};
exports.invalidRouteCatcher = invalidRouteCatcher;
