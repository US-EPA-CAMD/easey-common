import { Injectable, NestMiddleware, HttpStatus, } from '@nestjs/common';
import { firstValueFrom } from "rxjs";
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import { HttpService } from "@nestjs/axios";
import { EaseyException } from "../exceptions";

@Injectable()
export class MaintenanceMiddleware implements NestMiddleware {

  private readonly errorMessage: string = "The server is temporarily unable to service your request due to maintenance. Please try again later."

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) { }

  async use(request: Request, res: Response, next: NextFunction) {
    try {
      const url = this.configService.get("app.authApi").uri + "/authentication/login-state";
      const apiKey = this.configService.get("app.apiKey") || request.headers["x-api-key"];

      const forwardedForHeader = request.headers["x-forwarded-for"];
      let ip = request.ip;
      if (forwardedForHeader !== null && forwardedForHeader !== undefined) {
        ip = (forwardedForHeader as string)?.split(",")[0];
      }

      const result = await firstValueFrom(
        this.httpService.get(url, {
          headers: {
            "x-forwarded-for": ip,
            "x-api-key": apiKey
          },
        })
      );

      if (result.data.status === "DOWN") {
        throw new EaseyException(new Error(this.errorMessage), HttpStatus.SERVICE_UNAVAILABLE);
      } else if (result.data.status === "TEST") {
        if (!request.headers['x-client-token']) {
          throw new EaseyException(new Error(this.errorMessage), HttpStatus.SERVICE_UNAVAILABLE);
        }

        const skipURL = ['/auth-mgmt/authentication/sign-in', '/auth-mgmt/authentication/determinePolicy'];

        if (!skipURL.includes(request.path)) {
          // check the user is in the maintenance list and check client token is valid
          const isValidUser = await this.validateMaintenance(request);
          if (!isValidUser) {
            throw new EaseyException(new Error(this.errorMessage), HttpStatus.SERVICE_UNAVAILABLE);
          }
        }
      }
      next();
    } catch (err) {
      next(err);
    }

  }

  async validateMaintenanceRequest(apiKey: string, authToken: string, clientIp: string, clientId: string, clientToken: string): Promise<boolean> {
    const url = this.configService.get("app.authApi").uri + "/tokens/maintenance-validate";

    try {
      const result = await firstValueFrom(
        this.httpService.post(url, { authToken, clientIp, clientId, clientToken }, {
          headers: {
            "x-api-key": apiKey,
          },
        })
      );

      return result.data;
    } catch (error) {
      throw new EaseyException(new Error(this.errorMessage), HttpStatus.SERVICE_UNAVAILABLE);
    }
  }

  async validateMaintenance(request): Promise<boolean> {
    const authHeader = request.headers.authorization;
    const clientId = request.headers["x-client-id"];
    const clientTokenRequest = request.headers['x-client-token'];
    const forwardedForHeader = request.headers["x-forwarded-for"];
    let ip = request.ip;
    const apiKey = this.configService.get("app.apiKey") || request.headers["x-api-key"];

    if (
      clientId === null || clientId === undefined ||
      clientTokenRequest === null || clientTokenRequest === undefined
    ) {
      throw new EaseyException(new Error(this.errorMessage), HttpStatus.SERVICE_UNAVAILABLE);
    }

    const splitString = authHeader && authHeader.split(" ")[1] || '';
    const clientToken = clientTokenRequest.split(" ");

    if (forwardedForHeader !== null && forwardedForHeader !== undefined) {
      ip = forwardedForHeader.split(",")[0];
    }

    return await this.validateMaintenanceRequest(apiKey, splitString, ip, clientId, clientToken[1]);
  }
}