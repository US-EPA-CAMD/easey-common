import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { ConfigService } from "@nestjs/config";
import { LoggingException } from '../exceptions';

@Injectable()
export class GatewayGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  async validateRequest(request): Promise<boolean> {
    const tokenHeader = request.headers["x-secret-token"];

    if (tokenHeader === null || tokenHeader === undefined) {
      throw new LoggingException(
        "Direct access to CAMD API's are not allowed. Please go through the API gateway (api.epa.gov/easey) to access this resource.",
        HttpStatus.BAD_REQUEST,
      );
    }

    const checkKey = `EASEY_${this.configService
      .get<string>("app.name")
      .replace(/-/g, "_")
      .toUpperCase()}_SECRET_TOKEN`; //

    if (tokenHeader !== this.configService.get<string>(checkKey)) {
      throw new LoggingException(
        "The API Secret Token provided is invalid. Access to this resource denied.",
        HttpStatus.BAD_REQUEST,
      );
    }

    return true;
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (this.configService.get("app.enableSecretToken") === true) {
      const request = context.switchToHttp().getRequest();
      return this.validateRequest(request);
    }

    return true;
  }
}
