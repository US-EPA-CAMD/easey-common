import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from "@nestjs/common";
import { firstValueFrom, Observable } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { LoggingException } from '../exceptions';

@Injectable()
export class ClientTokenGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  async validateToken(clientId: string, clientToken: string): Promise<any> {
    const apiKey = this.configService.get("app.apiKey");
    const url = this.configService.get("app.authApi").uri + "/tokens/client/validate";

    try {
      const result = await firstValueFrom(
        this.httpService.post(url, { clientId }, {
          headers: {
            authorization: `Bearer ${clientToken}`,
            "x-api-key": apiKey,
          },
        })
      );

      if (result.data) {
        return true;
      }

      return false;
    } catch (error) {
      if (error.response) {
        throw new LoggingException(
          "An error occurred while validating the client's security token.",
          HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        );
      }
    }
  }

  async validateRequest(request): Promise<boolean> {
    const authHeader = request.headers.authorization;
    const clientIdHeader = request.headers["x-client-id"];
    const errorMsg = "Client Id and Token are required to access this resource.";

    if (authHeader === null || authHeader === undefined ||
      clientIdHeader === null || clientIdHeader === undefined
    ) {
      throw new LoggingException(errorMsg, HttpStatus.BAD_REQUEST);
    }

    const splitString = authHeader.split(" ");
    if (splitString.length !== 2 && splitString[0] !== "Bearer") {
      throw new LoggingException(errorMsg, HttpStatus.BAD_REQUEST);
    }

    if (await this.validateToken(clientIdHeader, splitString[1])) {
      return true;
    }

    return false;
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (this.configService.get("app.enableAuthToken") === true) {
      const request = context.switchToHttp().getRequest();
      return this.validateRequest(request);
    }

    return true;
  }
}