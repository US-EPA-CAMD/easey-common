"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_token_1 = require("./parse-token");
describe("parseToken()", () => {
    it("should return an object parsed from a string", async () => {
        const data = "userId=1&sessionId=1&expiration=1&clientIp=1";
        const refObj = {
            userId: "1",
            sessionId: "1",
            expiration: "1",
            clientIp: "1",
        };
        const result = (0, parse_token_1.parseToken)(data);
        expect(result.userId).toEqual(refObj.userId);
        expect(result.sessionId).toEqual(refObj.sessionId);
        expect(result.expiration).toEqual(refObj.expiration);
        expect(result.clientIp).toEqual(refObj.clientIp);
    });
});
//# sourceMappingURL=parse-token.spec.js.map