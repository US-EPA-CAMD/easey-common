import { TestingModule, Test } from "@nestjs/testing";
import { AuthGuard } from "./auth.guard";
import { ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { UnauthorizedException } from "@nestjs/common";

describe("AuthGuard", () => {
  let guard: AuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [AuthGuard, ConfigService],
    }).compile();

    guard = module.get(AuthGuard);
  });

  it("should be defined", () => {
    expect(guard).toBeDefined();
  });

  describe("validateRequest", () => {
    it("should return true for valid authorization header", async () => {
      jest.spyOn(guard, "validateToken").mockResolvedValue({ userId: "12345" });

      const request = {
        headers: { authorization: "Bearer validToken" },
        ip: "127.0.0.1",
        user: {} as any,
      };

      await expect(guard.validateRequest(request)).resolves.toBe(true);
      expect(request.user).toEqual({ userId: "12345" });
    });

    it("should throw UnauthorizedException when authorization header is missing", async () => {
      const request = { headers: {}, user: {} as any };

      await expect(guard.validateRequest(request)).rejects.toThrow(UnauthorizedException);
    });

    it("should throw UnauthorizedException for invalid Bearer token format", async () => {
      const request = { headers: { authorization: "Beater 3" }, user: {} as any };

      await expect(guard.validateRequest(request)).rejects.toThrow(UnauthorizedException);
    });
  });
});
