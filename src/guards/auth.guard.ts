import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  InternalServerErrorException,
} from "@nestjs/common";
import { Observable } from "rxjs";

import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";

import { Logger } from '../logger/Logger.service';
import { parseToken } from "../utilities/parse-token";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
    private logger: Logger,
  ) {}

  async validateToken(token: string, ip: string, apiKey: string): Promise<any> {
    const url = this.configService.get("app.authApi").uri + "/tokens/validate";
    return this.httpService
      .post(url, {
        token: token,
        clientIp: ip,
      }, {
        headers: { "x-api-key": apiKey }
      })
      .toPromise()
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        this.logger.error(error, 'An error occurred while validating user security token.')
        if (error.response) {
          throw new InternalServerErrorException(error.response.data.message);
        }
      });
  }

  async validateRequest(request): Promise<boolean> {
    let errorMsg = 'Prior Authorization token is required.';

    if (request.headers.authorization === undefined) {
      this.logger.warn(errorMsg);
      throw new BadRequestException(errorMsg);
    }

    const splitString = request.headers.authorization.split(" ");
    if (splitString.length !== 2 && splitString[0] !== "Bearer") {
      this.logger.warn(errorMsg);
      throw new BadRequestException(errorMsg);
    }

    let ip = request.ip;
    if (request.headers["x-forwarded-for"]) {
      ip = request.headers["x-forwarded-for"].split(",")[0];
    }

    let apiKey = request.headers["x-api-key"];
    this.logger.info(`x-api-key = ${apiKey}`);
    if (!apiKey) {
      apiKey = request.headers["x-api-user-id"];
      this.logger.info(`x-api-user-id = ${apiKey}`);
      if (!apiKey) {
        errorMsg = 'API key required but not provided in either of the "x-api-key" or "x-api-user-id" request headers.';
        this.logger.warn(errorMsg);
        throw new BadRequestException(errorMsg);
      }
    }

    const validatedToken = await this.validateToken(splitString[1], ip, apiKey);
    const parsedToken = parseToken(validatedToken);

    request.userId = parsedToken.userId; // Attach userId to request body

    return true;
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
}
