import { Transform, TransformOptions, TransformCallback } from "stream";

const DEFAULT_BUFFER_SIZE = 1048576; //1MB

export class PlainToJSON extends Transform {
  private isFirstChunk: boolean = true;
  private isFinalChunk: boolean = false;
  private maxBufferlength: number = DEFAULT_BUFFER_SIZE - 100;

  private buffer: Buffer = Buffer.alloc(DEFAULT_BUFFER_SIZE);
  private bufferOffset: number = 0;

  constructor(bufferSize?: number, opts?: TransformOptions) {
    super({
      ...opts,
      writableObjectMode: true,
    });

    if (bufferSize) {
      this.maxBufferlength = bufferSize;
    }
  }

  _transform(data: any, _encoding: string, callback: TransformCallback): void {
    let transformedData = this.isFirstChunk ? "[" : ",";

    this.isFirstChunk = false;
    transformedData += JSON.stringify(data);

    await new Promise((f) => setTimeout(f, 1));

    if (this.bufferOffset + transformedData.length >= this.maxBufferlength) {
      this.push(this.buffer);
      this.bufferOffset = 0;
      this.buffer = Buffer.alloc(DEFAULT_BUFFER_SIZE);
    }
    this.buffer.fill(
      transformedData,
      this.bufferOffset,
      this.bufferOffset + transformedData.length
    );
    this.bufferOffset += transformedData.length;
    callback();
  }

  _flush(callback: TransformCallback): void {
    if (this.isFinalChunk) {
      this.buffer.fill("]", this.bufferOffset, this.bufferOffset + 1);
    }
    this.push(this.buffer);
    callback();
  }

  _final(callback: (error?: Error) => void): void {
    this.isFinalChunk = true;
    callback();
  }
}
