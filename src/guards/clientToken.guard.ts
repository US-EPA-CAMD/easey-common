import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  InternalServerErrorException,
} from "@nestjs/common";
import { firstValueFrom, Observable } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ClientTokenGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  async validateToken(clientId: string, clientToken: string): Promise<any> {
    const url =
      this.configService.get("app.authApi").uri + "/tokens/client/validate";

    try {
      const result = await firstValueFrom(
        this.httpService.post(
          url,
          {
            clientId,
            clientToken,
          },
          {
            headers: { "x-api-key": this.configService.get("app.apiKey") },
          }
        )
      );

      if (result.data) {
        return true;
      }

      return false;
    } catch (error) {
      if (error.response) {
        throw new InternalServerErrorException(
          error.response.data.message,
          "An error occurred in AuthGuard while validating user security token."
        );
      }
    }
  }

  async validateRequest(request): Promise<boolean> {
    let errorMsg = "clientToken and clientId is required.";

    if (!request.headers.authorization || !request.headers["x-client-id"]) {
      throw new BadRequestException(errorMsg);
    }

    const splitString = request.headers.authorization.split(" ");
    if (splitString.length !== 2 && splitString[0] !== "Bearer") {
      throw new BadRequestException(errorMsg);
    }

    if (
      await this.validateToken(request.headers["x-client-id"], splitString[1])
    ) {
      return true;
    }

    return false;
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
}
