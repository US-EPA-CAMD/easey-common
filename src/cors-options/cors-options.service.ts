import { Request } from "express";
import { getManager } from "typeorm";
import {
  CorsOptions,
  CorsOptionsCallback,
} from "@nestjs/common/interfaces/external/cors-options.interface";
import { Injectable } from "@nestjs/common";
import { Logger } from "../logger";

@Injectable()
export class CorsOptionsService {
  constructor(private logger: Logger) {}

  configure = async (
    req: Request,
    appName: string,
    callback: CorsOptionsCallback,
    allowCredentials: boolean = false
  ) => {
    let corsOptions: CorsOptions;
    const originHeader = req.header("Origin");

    console.log(originHeader);

    if (originHeader !== null && originHeader !== undefined) {
      const manager = getManager();
      const corsResults = await manager.query(`
        SELECT key, value
        FROM camdaux.cors_config
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
        //maxAge: 86400,
        origin: allowedOrigins.map((i) => i.value).includes(originHeader)
          ? originHeader
          : false,
        exposedHeaders:
          allowedHeaders.length > 0 ? allowedHeaders.map((i) => i.value) : [],
        methods:
          allowedMethods.length > 0 ? allowedMethods.map((i) => i.value) : [],
        credentials: allowCredentials,
      };

      console.log(corsOptions);
    } else {
      corsOptions = {
        origin: false,
        exposedHeaders: [],
        methods: [],
        credentials: false,
      };
    }
    //req.res.setHeader('Cache-Control', 'public, max-age=86400')
    //this.logger.info(corsOptions);
    callback(null, corsOptions);
  };
}
