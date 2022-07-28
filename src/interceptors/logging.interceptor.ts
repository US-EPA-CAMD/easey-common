import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Logger } from "./../logger";
import { Observable, shareReplay } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const obs = next.handle().pipe(shareReplay());

    obs.subscribe({
      error: (err) => {
        this.logger.error(err);
      },
    });

    return obs;
  }
}
