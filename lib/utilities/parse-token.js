"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToken = void 0;
const parseToken = (token) => {
    const obj = {
        userId: null,
        sessionId: null,
        expiration: null,
        clientIp: null,
    };
    const arr = token.split("&");
    arr.forEach((element) => {
        const keyValue = element.split("=");
        obj[keyValue[0]] = keyValue[1];
    });
    return obj;
};
exports.parseToken = parseToken;
exports.default = exports.parseToken;
//# sourceMappingURL=parse-token.js.map