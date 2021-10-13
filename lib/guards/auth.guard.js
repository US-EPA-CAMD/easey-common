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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const parse_token_1 = require("../utilities/parse-token");
const axios_1 = require("@nestjs/axios");
let AuthGuard = class AuthGuard {
    constructor(configService, httpService) {
        this.configService = configService;
        this.httpService = httpService;
    }
    async validateToken(token, ip) {
        const url = this.configService.get("app.authApi").uri + "/tokens/validate";
        return this.httpService
            .post(url, {
            token: token,
            clientIp: ip,
        })
            .toPromise()
            .then((result) => {
            return result.data;
        })
            .catch((error) => {
            if (error.response) {
                throw new common_1.InternalServerErrorException(error.response.data.message);
            }
        });
    }
    async validateRequest(request) {
        if (request.headers.authorization === undefined) {
            throw new common_1.BadRequestException("Prior Authorization token is required.");
        }
        const splitString = request.headers.authorization.split(" ");
        if (splitString.length !== 2 && splitString[0] !== "Bearer") {
            throw new common_1.BadRequestException("Prior Authorization token is required.");
        }
        let ip = request.ip;
        if (request.headers["x-forwarded-for"]) {
            ip = request.headers["x-forwarded-for"].split(",")[0];
        }
        const validatedToken = await this.validateToken(splitString[1], ip);
        const parsedToken = (0, parse_token_1.parseToken)(validatedToken);
        request.userId = parsedToken.userId;
        return true;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map