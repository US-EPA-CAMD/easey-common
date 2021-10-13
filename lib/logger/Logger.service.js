"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const winston = require('winston');
let Logger = class Logger {
    constructor() {
        this.logInstance = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            transports: [new winston.transports.Console()],
        });
    }
    warn(message, args) {
        this.logInstance.warn(message, Object.assign({}, args));
    }
    error(errorType, message, args) {
        const errorId = (0, uuid_1.v4)();
        const errorInstance = new errorType(message, errorId);
        this.logInstance.error(errorInstance.message, Object.assign(Object.assign({}, args), { errorId: errorId, stack: errorInstance.stack }));
        throw errorInstance;
    }
    info(message, args) {
        this.logInstance.log('info', message, Object.assign({}, args));
    }
};
Logger = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], Logger);
exports.Logger = Logger;
exports.default = Logger;
//# sourceMappingURL=Logger.service.js.map