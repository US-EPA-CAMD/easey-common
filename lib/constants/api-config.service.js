"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfigService = void 0;
const common_1 = require("@nestjs/common");
let ApiConfigService = class ApiConfigService {
    static getHostEmissions() {
        const host = process.env.EASEY_EMISSIONS_API_HOST || "localhost";
        if (host === "localhost") {
            const port = process.env.EASEY_EMISSIONS_API_PORT || 8080;
            return `localhost:${port}`;
        }
        return host;
    }
    static getHostAccount() {
        const host = process.env.EASEY_ACCOUNT_API_HOST || "localhost";
        if (host === "localhost") {
            const port = process.env.EASEY_ACCOUNT_API_PORT || 8080;
            return `localhost:${port}`;
        }
        return host;
    }
    static getMdm() {
        return `https://${this.getHostEmissions()}/api/master-data-mgmt/`;
    }
    static getFacApi() {
        return `https://${this.getHostEmissions()}/api/facility-mgmt/`;
    }
    static getAcctApi() {
        return `https://${this.getHostAccount()}/api/account-mgmt/`;
    }
};
ApiConfigService = __decorate([
    (0, common_1.Injectable)()
], ApiConfigService);
exports.ApiConfigService = ApiConfigService;
//# sourceMappingURL=api-config.service.js.map