"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json2CsvInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const json2csv_1 = require("json2csv");
const uuid_1 = require("uuid");
let Json2CsvInterceptor = class Json2CsvInterceptor {
    intercept(context, next) {
        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest();
        let format = "json";
        if (req.headers.accept === "text/csv") {
            format = "csv";
        }
        return next.handle().pipe((0, operators_1.map)((data) => {
            if (req.query.attachFile === "true") {
                req.res.attachment(`${(0, uuid_1.v4)()}.${format}`);
            }
            if (req.headers.accept === "text/csv") {
                req.res.header("Content-Type", "text/csv");
                const headers = req.res.getHeaders();
                const fields = JSON.parse(headers["x-field-mappings"]);
                const json2csv = new json2csv_1.Parser({ fields });
                return json2csv.parse(data);
            }
            return data;
        }));
    }
};
Json2CsvInterceptor = __decorate([
    (0, common_1.Injectable)()
], Json2CsvInterceptor);
exports.Json2CsvInterceptor = Json2CsvInterceptor;
//# sourceMappingURL=json2csv.interceptor.js.map