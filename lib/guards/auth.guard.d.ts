import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
export declare class AuthGuard implements CanActivate {
    private configService;
    private httpService;
    constructor(configService: ConfigService, httpService: HttpService);
    validateToken(token: string, ip: string): Promise<any>;
    validateRequest(request: any): Promise<boolean>;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
