import { firstValueFrom, Observable } from "rxjs";
import {
  HttpStatus,
  Injectable,
  CanActivate,
  ExecutionContext,
} from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { CurrentUser } from "../interfaces";
import { EaseyException } from "../exceptions";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  async validateToken(token: string, ip: string): Promise<any> {
    const apiKey = this.configService.get("app.apiKey");
    const url = this.configService.get("app.authApi").uri + "/tokens/validate";

    try {
      const result = await firstValueFrom(
        this.httpService.post(url, null, {
          headers: {
            authorization: `Bearer ${token}`,
            "x-forwarded-for": ip,
            "x-api-key": apiKey,
          },
        })
      );

      return result.data;
    } catch (error) {
      console.log(error);
      if (error.response) {
        throw new EaseyException(
          new Error(
            "An error occurred in while validating the user's security token."
          ),
          HttpStatus.INTERNAL_SERVER_ERROR,
          error
        );
      }
    }
  }

  async validateRequest(request): Promise<boolean> {
    const authHeader = request.headers.authorization;
    console.log(authHeader);
    const forwardedForHeader = request.headers["x-forwarded-for"];
    let errorMsg =
      "Prior Authorization (User Security Token) required to access this resource.";

    if (authHeader === null || authHeader === undefined) {
      throw new EaseyException(new Error(errorMsg), HttpStatus.BAD_REQUEST);
    }

    const splitString = authHeader.split(" ");
    if (splitString.length !== 2 && splitString[0] !== "Bearer") {
      throw new EaseyException(new Error(errorMsg), HttpStatus.BAD_REQUEST); //
    }

    let ip = request.ip;
    if (forwardedForHeader !== null && forwardedForHeader !== undefined) {
      ip = forwardedForHeader.split(",")[0];
    }

    const validatedToken = await this.validateToken(splitString[1], ip);

    request.user = validatedToken;

    return true;
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    if (this.configService.get("app.enableAuthToken") === true) {
      return this.validateRequest(request);
    }

    const currentUser: CurrentUser = JSON.parse(
      this.configService.get("app.currentUser")
    );

    request.user = currentUser;

    return true;
  }
}
