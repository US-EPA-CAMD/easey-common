import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  InternalServerErrorException,
} from "@nestjs/common";
import { Observable } from "rxjs";

import { ConfigService } from "@nestjs/config";
import { parseToken } from "../utilities/parse-token";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  async validateToken(token: string, ip: string, apiKey: string): Promise<any> {
    const url = this.configService.get("app.authApi").uri + "/tokens/validate";
    console.log("API Key " + apiKey);
    return this.httpService
      .post(url, {
        token: token,
        clientIp: ip,
      },
      {headers: {"x-api-key": apiKey}
      }
      )
      .toPromise()
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        if (error.response) {
          throw new InternalServerErrorException(error.response.data.message);
        }
      });
  }

  async validateRequest(request): Promise<boolean> {
    if (request.headers.authorization === undefined) {
      throw new BadRequestException("Prior Authorization token is required.");
    }

    const splitString = request.headers.authorization.split(" ");
    if (splitString.length !== 2 && splitString[0] !== "Bearer") {
      throw new BadRequestException("Prior Authorization token is required.");
    }

    let ip = request.ip;
    if (request.headers["x-forwarded-for"]) {
      ip = request.headers["x-forwarded-for"].split(",")[0];
    }

    if(!request.header["x-api-key"]){
      throw new BadRequestException("API key is required.");
    }

    const validatedToken = await this.validateToken(splitString[1], ip, request.header["x-api-key"]);
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
