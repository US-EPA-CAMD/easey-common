import { Request } from "express";
import { getManager } from "typeorm";
import { CorsOptionsCallback } from "@nestjs/common/interfaces/external/cors-options.interface";
import { Injectable } from "@nestjs/common";
import { Logger } from "../logger/Logger.service";

@Injectable()
export class CorsOptionsService {
  constructor(private logger: Logger) {}

  configure = async (
    req: Request,
    appName: string,
    callback: CorsOptionsCallback
  ) => {
    let corsOptions;
    const originHeader = req.header("Origin");

    if (originHeader !== null && originHeader !== undefined) {
      const manager = getManager();
      const corsResults = await manager.query(`
        SELECT key, value
        FROM camdaux.cors
        LEFT JOIN camdaux.cors_to_api
          USING(cors_id)
        LEFT JOIN camdaux.api
          USING(api_id)
        WHERE api_id IS NULL OR name = '${appName}'
        ORDER BY key, value;
      `);

      const allowedOrigins = corsResults.filter((i) => i.key === "origin");
      const allowedHeaders = corsResults.filter((i) => i.key === "header");
      const allowedMethods = corsResults.filter((i) => i.key === "method");

      if (
        originHeader.match(/https?:\/\/(localhost|127\.0\.0\.1|\[::1\]):\d+/)
      ) {
        allowedOrigins.push({
          key: "origin",
          value: originHeader,
        });
      }

      corsOptions = {
        origin: allowedOrigins.map((i) => i.value).includes(originHeader)
          ? originHeader
          : false,
        exposedHeaders:
          allowedHeaders.length > 0 ? allowedHeaders.map((i) => i.value) : [],
        methods:
          allowedMethods.length > 0 ? allowedMethods.map((i) => i.value) : [],
      };
    } else {
      corsOptions = {
        origin: false,
        exposedHeaders: [],
        methods: [],
      };
    }
    this.logger.info(corsOptions);
    callback(null, corsOptions);
  };
}
