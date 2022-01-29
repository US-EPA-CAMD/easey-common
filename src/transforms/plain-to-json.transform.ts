import {
  Transform,
  TransformOptions,
  TransformCallback
} from "stream";

const DEFAULT_BUFFER_SIZE = 10240;

export class PlainToJSON extends Transform {
  private buffer: string = '';
  private isFirstChunk: boolean = true;
  private isFinalChunk: boolean = false;
  private maxBufferlength: number = DEFAULT_BUFFER_SIZE;

  constructor(bufferSize?: number, opts?: TransformOptions) {
    super({
      ...opts,
      writableObjectMode: true,
    })

    if (bufferSize) {
      this.maxBufferlength = bufferSize;
    }
  }

  _transform(data: any, _encoding: string, callback: TransformCallback): void {
    let transformedData = this.isFirstChunk ? '[' : ',';
    this.isFirstChunk = false;
    transformedData += JSON.stringify(data);

    if (this.buffer.length + transformedData.length >= this.maxBufferlength) {
      this.push(this.buffer);
      this.buffer = '';
    }
    this.buffer += transformedData;
    callback();
  }

  _flush(callback: TransformCallback): void {
    this.push(this.buffer + this.isFinalChunk ? ']' : '');
    callback();
  }

  _final(callback: (error?: Error) => void): void {
    this.isFinalChunk = true;
    callback();
  }
}
