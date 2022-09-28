import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Console } from "console";
import { ReadStream } from "fs";

var Pool = require("pg-pool");
const QueryStream = require("pg-query-stream");

@Injectable()
export class StreamService {
  private pool;

  constructor(private readonly configService: ConfigService) {
    this.pool = new Pool({
      user: this.configService.get<string>("database.user"),
      host: this.configService.get<string>("database.host"),
      database: this.configService.get<string>("database.name"),
      password: this.configService.get<string>("database.pwd"),
      port: this.configService.get<number>("database.port"),
      max: 20, // set pool max size to 20
      idleTimeoutMillis: 1000, // close idle clients after 1 second
      connectionTimeoutMillis: 5000, // return an error after 1 second if connection could not be established
      maxUses: 500, // close (and replace) a connection after it has been used 7500 times
    });
  }

  async getStream(query): Promise<ReadStream> {
    let queryString: string = query[0];
    const params = query[1];

    let paramIndex = 1;
    params.forEach((param) => {
      queryString = queryString.replace("$" + paramIndex, "'" + param + "'");
      paramIndex++;
    });

    const client = await this.pool.connect();

    const queryStream = new QueryStream(queryString);

    let stream = client.query(queryStream);

    stream.on("end", () => {
      try {
        client.release();
        stream.destroy();
        stream = null;
      } catch (e) {}
    });

    return stream;
  }
}
