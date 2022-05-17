import { Transform, TransformOptions, TransformCallback } from "stream";

const DEFAULT_BUFFER_SIZE = 1048576; //1MB

export class PlainToJSON extends Transform {
  private isFirstChunk: boolean = true;
  private isFinalChunk: boolean = false;
  private maxBufferlength: number = DEFAULT_BUFFER_SIZE - 100;
  private miliseconds: number = 100;

  private buffer: Buffer = Buffer.alloc(DEFAULT_BUFFER_SIZE);
  private bufferOffset: number = 0;

  constructor(
    miliseconds?: number,
    bufferSize?: number,
    opts?: TransformOptions
  ) {
    super({
      ...opts,
      writableObjectMode: true,
    });

    if (miliseconds) {
      this.miliseconds = miliseconds;
    }

    if (bufferSize) {
      this.maxBufferlength = bufferSize;
      this.buffer = Buffer.alloc(this.maxBufferlength);
    }
  }

  async _transform(
    data: any,
    _encoding: string,
    callback: TransformCallback
  ): Promise<void> {
    let transformedData = this.isFirstChunk ? "[" : ",";

    this.isFirstChunk = false;
    transformedData += JSON.stringify(data);

    if (this.bufferOffset + transformedData.length >= this.maxBufferlength) {
      const newBuf = Buffer.alloc(this.bufferOffset);
      this.buffer.copy(newBuf);
      this.push(newBuf);
      this.bufferOffset = 0;
      this.buffer = Buffer.alloc(this.maxBufferlength + 100);
      await new Promise((f) => setTimeout(f, this.miliseconds));
    }
    this.buffer.fill(
      transformedData,
      this.bufferOffset,
      this.bufferOffset + transformedData.length
    );
    this.bufferOffset += transformedData.length;
    callback();
  }
  //
  _flush(callback: TransformCallback): void {
    let newBuf;

    if (this.isFinalChunk) {
      this.buffer.fill("]", this.bufferOffset, this.bufferOffset + 1);
      this.bufferOffset++;
    }

    newBuf = Buffer.alloc(this.bufferOffset);
    this.buffer.copy(newBuf);
    this.push(newBuf);

    callback();
  }

  _final(callback: (error?: Error) => void): void {
    this.isFinalChunk = true;
    callback();
  }
}
