"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const auth_guard_1 = require("./auth.guard");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
jest.mock("../utilities/parse-token", () => ({
    parseToken: jest.fn(() => jest.fn().mockReturnValue({ sessionId: "", userId: "" })),
}));
describe("AuthGuard", () => {
    let guard;
    beforeAll(async () => {
        const module = await testing_1.Test.createTestingModule({
            imports: [axios_1.HttpModule],
            providers: [auth_guard_1.AuthGuard, config_1.ConfigService],
        }).compile();
        guard = module.get(auth_guard_1.AuthGuard);
    });
    it("should be defined", () => {
        expect(guard).toBeDefined();
    });
    it("should validate properly and return true given good input", async () => {
        jest.spyOn(guard, "validateToken").mockResolvedValue("");
        const request = { headers: { authorization: "Bearer csm::nndifnd" } };
        expect(await guard.validateRequest(request)).toEqual(true);
    });
    it("should error given no auth header", async () => {
        const request = { headers: {} };
        expect(async () => {
            await guard.validateRequest(request);
        }).rejects.toThrowError();
    });
    it("should error given invalid bearer format", async () => {
        const request = { headers: { authorization: "Beater 3" } };
        expect(async () => {
            await guard.validateRequest(request);
        }).rejects.toThrowError();
    });
});
//# sourceMappingURL=auth.guard.spec.js.map