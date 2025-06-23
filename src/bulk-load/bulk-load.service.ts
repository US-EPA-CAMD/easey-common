//v0: easey-common/bulk-load/src/bulk-load.service.ts

import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { WriteStream, existsSync, readFileSync } from "fs";
import { from as copyFrom } from "pg-copy-streams";
import BulkLoadStream from "./bulk-load-stream";
import { TlsOptions } from "tls";
import { QueryRunner } from "typeorm";

let Pool = require("pg-pool");

@Injectable()
export class BulkLoadService {
  private pool;
  private tlsOptions: TlsOptions = { requestCert: true };

  constructor(private readonly configService: ConfigService) {
    console.log(`Looking for: ${process.cwd()}/us-gov-west-1-bundle.pem`);

    const host = configService.get<string>("database.host");
    this.tlsOptions.rejectUnauthorized = host !== "localhost";

    if (existsSync(`${process.cwd()}\\us-gov-west-1-bundle.pem`)) {
      this.tlsOptions.ca =
        host !== "localhost"
          ? readFileSync(
            `${process.cwd()}\\us-gov-west-1-bundle.pem`
          ).toString()
          : null;
    } else {
      this.tlsOptions.ca = null;
    }

    this.pool = new Pool({
      user: this.configService.get<string>("database.user"),
      host: this.configService.get<string>("database.host"),
      database: this.configService.get<string>("database.name"),
      password: this.configService.get<string>("database.pwd"),
      port: this.configService.get<number>("database.port"),
      max: this.configService.get<number>("app.bulkLoadMaxPoolSize"), // set pool max size to 100
      idleTimeoutMillis: 1000, // close idle clients after 1 second
      connectionTimeoutMillis: 20000, // return an error after 20 seconds if connection could not be established
      maxUses: 500, // close (and replace) a connection after it has been used 7500 times
      ssl: this.tlsOptions,
    });
  }

  async startBulkLoader(
    tableLocation: string,
    columns?: string[],
    delimiter: string = ",",
    queryRunner?: QueryRunner,
  ): Promise<BulkLoadStream> {
    // Use queryRunner's connection if provided, otherwise get from pool
    const client = await (queryRunner ? queryRunner.connect() : this.pool.connect());
    const fromQueryRunner = queryRunner !== undefined;

    let columnFormatting = "";
    if (columns?.length) {
      columnFormatting = `(${columns.map(c => `"${c}"`).join(",")})`;
    }

    const ingestStream: WriteStream = client.query(
      copyFrom(
        `COPY ${tableLocation} ${columnFormatting} FROM STDIN (DELIMITER '${delimiter}', NULL '${BulkLoadStream.nullChar}')`
      ),
    );

    return new BulkLoadStream(ingestStream, client, delimiter, fromQueryRunner);
  }
}
