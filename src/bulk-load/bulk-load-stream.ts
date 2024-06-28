import { WriteStream } from "fs";

export class BulkLoadStream {
  private resolver: any;
  private client: any;
  private delimiter: string;
  private hasWritten: boolean;
  private stream: WriteStream;

  public status: string;
  public finished: Promise<boolean>;
  public static readonly nullChar: string = "./0";

  constructor(stream: WriteStream, client: any, delimiter: string) {
    this.hasWritten = false;
    this.stream = stream;
    this.status = "Writing";
    this.finished = new Promise((resolve, reject) => {
      this.stream.on("error", (e) => {
        reject(e.message);
      });

      this.resolver = resolve;
    });
    this.client = client;
    this.delimiter = delimiter;

    this.stream.on("finish", () => {
      if (this.status != "Error") {
        this.status = "Complete";
      }
      this.resolver(true);
      this.stream.destroy();
      this.client.release();
    });
  }

  public writeObject(obj: Object) {
    try {
      if (this.hasWritten) {
        this.stream.write("\n");
      } else {
        this.hasWritten = true;
      }

      const delimitted = Object.keys(obj)
        .map((o) => {
          if (obj[o] === null) {
            return BulkLoadStream.nullChar;
          } else {
            return obj[o];
          }
        })
        .join(this.delimiter);

      this.stream.write(delimitted);
    } catch (e) {
      console.log(e);
      this.status = "Error";
      this.complete();
    }
  }

  public complete() {
    this.stream.end();
  }
}

export default BulkLoadStream;
