import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GatewayGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  async validateRequest(request): Promise<boolean> {
    if (this.configService.get<string>("app.env") == "local-dev") {
      return true;
    }

    if (!request.headers["x-secret-token"]) {
      throw new BadRequestException(
        "Must go through the gateway to access this resource."
      );
    }

    const checkKey = `EASEY_${this.configService
      .get<string>("app.name")
      .replace("-", "_")
      .toUpperCase()}_API_SECRET_TOKEN`;

    if (
      request.headers["x-secret-token"] !=
      this.configService.get<string>(checkKey)
    ) {
      throw new BadRequestException("Incorrect gateway access token.");
    }

    return true;
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
}
