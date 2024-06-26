import { Request } from "express";
import { EntityManager } from "typeorm";
import {
  CorsOptions,
  CorsOptionsCallback,
} from "@nestjs/common/interfaces/external/cors-options.interface";
import { Injectable } from "@nestjs/common";
import { Logger } from "../logger";

@Injectable()
export class CorsOptionsService {
  constructor(
    private logger: Logger,
    private readonly entityManager: EntityManager
  ) {}

  configure = async (
    req: Request,
    env: string,
    callback: CorsOptionsCallback,
    allowCredentials: boolean = false
  ) => {
    let corsOptions: CorsOptions;
    const originHeader = req.header("Origin");

    req.res.setHeader("Vary", "Origin");
    req.res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    req.res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
    req.res.setHeader("Expires", "0");

    if (originHeader !== null && originHeader !== undefined) {
      const corsResults = await this.entityManager.query(
        "SELECT key, value FROM camdaux.cors_config"
      );
      const allowedOrigins = corsResults.filter((i) => i.key === "origin");
      const allowedHeaders = corsResults.filter((i) => i.key === "header");
      const allowedMethods = corsResults.filter((i) => i.key === "method");

      if (
        env != "production" &&
        originHeader.match(/https?:\/\/(localhost|127\.0\.0\.1|\[::1\]):\d+/)
      ) {
        allowedOrigins.push({
          key: "origin",
          value: originHeader,
        });
      }

      corsOptions = {
        origin: allowedOrigins.map((i) => i.value).includes(originHeader)
          ? true
          : false,
        exposedHeaders:
          allowedHeaders.length > 0 ? allowedHeaders.map((i) => i.value) : [],
        methods:
          allowedMethods.length > 0 ? allowedMethods.map((i) => i.value) : [],
        credentials: allowCredentials,
      };
    } else {
      corsOptions = {
        origin: false,
        exposedHeaders: [],
        methods: [],
        credentials: false,
      };
    }
    callback(null, corsOptions);
  };
}
