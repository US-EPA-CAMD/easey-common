import { CorsOptionsCallback } from '@nestjs/common/interfaces/external/cors-options.interface';
export declare const configureCorsOptions: (req: any, appName: string, callback: CorsOptionsCallback) => Promise<void>;
