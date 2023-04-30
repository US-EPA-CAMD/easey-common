import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { WriteStream } from "fs";
import { from as copyFrom } from "pg-copy-streams";
import BulkLoadStream from "./bulk-load-stream";

let Pool = require("pg-pool");

@Injectable()
export class BulkLoadService {
  private pool;

  constructor(private readonly configService: ConfigService) {
    this.pool = new Pool({
      user: this.configService.get<string>("database.user"),
      host: this.configService.get<string>("database.host"),
      database: this.configService.get<string>("database.name"),
      password: this.configService.get<string>("database.pwd"),
      port: this.configService.get<number>("database.port"),
      max: 100, // set pool max size to 100
      idleTimeoutMillis: 1000, // close idle clients after 1 second
      connectionTimeoutMillis: 20000, // return an error after 20 seconds if connection could not be established
      maxUses: 500, // close (and replace) a connection after it has been used 7500 times
    });
  }

  async startBulkLoader(
    tableLocation: string,
    columns?: string[]
  ): Promise<BulkLoadStream> {
    const client = await this.pool.connect();

    let columnFormatting = "";
    if (columns && columns.length > 0) {
      columnFormatting = "(";
      for (let i = 0; i < columns.length; i++) {
        columnFormatting += `"${columns[i]}"`;
        if (i < columns.length - 1) {
          columnFormatting += ",";
        }
      }
      columnFormatting += ")";
    }

    const ingestStream: WriteStream = client.query(
      copyFrom(
        `COPY ${tableLocation} ${columnFormatting} FROM STDIN (DELIMITER '${BulkLoadStream.delimiter}', NULL '${BulkLoadStream.nullChar}')`
      )
    );

    return new BulkLoadStream(ingestStream, client);
  }
}
