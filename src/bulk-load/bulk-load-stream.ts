import { WriteStream } from 'fs';

export class BulkLoadStream {
  private hasWritten: boolean;
  private stream: WriteStream;
  public status: string;

  private resolver;
  public finished: Promise<boolean>;

  private client: any;

  constructor(stream: WriteStream, client) {
    this.hasWritten = false;
    this.stream = stream;
    this.status = 'Writing';
    this.finished = new Promise(resolve => {
      this.resolver = resolve;
    });
    this.client = client;

    this.stream.on('finish', () => {
      if (this.status != 'Error') {
        this.status = 'Complete';
      }
      this.resolver(true);
      this.stream.destroy();
      this.client.release();
    });
  }

  public writeObject(obj: Object) {
    try {
      if (this.hasWritten) {
        this.stream.write('\n');
      } else {
        this.hasWritten = true;
      }

      const delimitted = Object.keys(obj)
        .map(o => {
          if (obj[o] === null) {
            return './0';
          } else {
            return obj[o];
          }
        })
        .join(',');

      this.stream.write(delimitted);
    } catch (e) {
      console.log(e);
      this.status = 'Error';
      this.complete();
    }
  }

  public complete() {
    this.stream.end();
  }
}

export default BulkLoadStream;
