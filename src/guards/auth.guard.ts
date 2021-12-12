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

import { parseToken } from "../utilities/parse-token";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async validateToken(token: string, ip: string): Promise<any> {
    const url = this.configService.get("app.authApi").uri + "/tokens/validate";

    return this.httpService
      .post(url, {
        token: token,
        clientIp: ip,
      }, {
        headers: { "x-api-key": this.configService.get("app.apiKey") }
      })
      .toPromise()
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        if (error.response) {
          throw new InternalServerErrorException(error.response.data.message, 'An error occurred in AuthGuard while validating user security token.');
        }
      });
  }

  async validateRequest(request): Promise<boolean> {
    let errorMsg = 'Prior Authorization token is required.';

    if (request.headers.authorization === undefined) {
      throw new BadRequestException(errorMsg);
    }

    const splitString = request.headers.authorization.split(" ");
    if (splitString.length !== 2 && splitString[0] !== "Bearer") {
      throw new BadRequestException(errorMsg);
    }

    let ip = request.ip;
    if (request.headers["x-forwarded-for"]) {
      ip = request.headers["x-forwarded-for"].split(",")[0];
    }

    const validatedToken = await this.validateToken(splitString[1], ip);
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
