import { firstValueFrom, Observable } from "rxjs";
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  HttpStatus,
} from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { CurrentUser } from "../interfaces";
import { EaseyException } from "../exceptions";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {}

  /**
   * To Validate the provided security token by making a request to the Auth API.
   * @param token - The security token provided in the request headers.
   * @param ip - The client IP address.
   * @returns Validated user data if the token is valid only.
   * @throws UnauthorizedException for invalid tokens or EaseyException for API errors.
   */
  async validateToken(token: string, ip: string): Promise<any> {
    const apiKey = this.configService.get("app.apiKey");
    const authApiUrl = this.configService.get("app.authApi").uri + "/tokens/validate";

    try {
      const result = await firstValueFrom(
        this.httpService.post(authApiUrl, null, {
          headers: {
            authorization: `Bearer ${token}`,
            "x-forwarded-for": ip,
            "x-api-key": apiKey,
          },
        })
      );

      return result.data;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;

        // Explicitly handle Unauthorized (401) errors
        if (status === HttpStatus.UNAUTHORIZED) {
          throw new UnauthorizedException("Invalid or expired token. Access denied.");
        }

        throw new EaseyException(
          new Error("An error occurred while validating the security token."),
          HttpStatus.INTERNAL_SERVER_ERROR,
          error
        );
      }

      // Generic catch for unexpected errors
      throw new EaseyException(
        new Error("Unexpected authentication validation error."),
        HttpStatus.INTERNAL_SERVER_ERROR,
        error
      );
    }
  }

  /**
   * Validates the authorization headers and token format before calling `validateToken()`.
   * @param request - The incoming request object.
   * @returns A boolean indicating whether the request is authorized.
   * @throws UnauthorizedException if the token is missing or invalid.
   */
  async validateRequest(request): Promise<boolean> {
    const authHeader = request.headers.authorization;
    const forwardedForHeader = request.headers["x-forwarded-for"];
    const errorMsg = "Unauthorized access: Missing or invalid authorization token.";

    if (!authHeader) {
      throw new UnauthorizedException(errorMsg);
    }

    const tokenParts = authHeader.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      throw new UnauthorizedException("Invalid authorization format. Expected 'Bearer <token>'.");
    }

    // Determine client IP address
    let ip = request.ip;
    if (forwardedForHeader) {
      ip = forwardedForHeader.split(",")[0].trim();
    }

    // To validate the token with Auth API
    const validatedToken = await this.validateToken(tokenParts[1], ip);
    request.user = validatedToken; // Attach validated user data to request

    return true;
  }

  /**
   * The main guard function to control access to protected routes.
   * @param context - The execution context for the request.
   * @returns A boolean or a promise resolving to a boolean indicating authorization status.
   */
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // If auth token enforcement is enabled, validate the request
    if (this.configService.get("app.enableAuthToken")) {
      return this.validateRequest(request);
    }

    // If auth is disabled, use a mock user from configuration (for local/dev environments)
    const currentUser: CurrentUser = JSON.parse(
      this.configService.get("app.currentUser")
    );
    request.user = currentUser;

    return true;
  }
}