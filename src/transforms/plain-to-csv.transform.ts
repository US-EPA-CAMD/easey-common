import {
  Transform,
  TransformOptions,
  TransformCallback
} from "stream";

import { Parser } from "json2csv";

const DEFAULT_BUFFER_SIZE = 10240;

export class PlainToCSV extends Transform {
  private isFirstChunk: boolean = true;
  private maxBufferlength: number = DEFAULT_BUFFER_SIZE;

  private fields: any[];
  private buffer: string = '';

  private noHeader = null;
  private withHeader = null;

  constructor(fields: any[], bufferSize?: number, opts?: TransformOptions) {
    super({
      ...opts,
      writableObjectMode: true,
    })

    this.fields = fields.map(i => {
      return {
        label: i.label,
        value: i.value.toLowerCase()
      }
    });

    this.noHeader = new Parser({
      fields: this.fields,
      header: false,
    });

    this.withHeader = new Parser({
      fields: this.fields
    });

    if (bufferSize) {
      this.maxBufferlength = bufferSize;
    }
  }

  _transform(data: any, _encoding: string, callback: TransformCallback): void {
    let transformedData = '';

    if (this.isFirstChunk) {
      this.isFirstChunk = false;
      transformedData = this.withHeader.parse(data) + '\n';
    } else {
      transformedData = this.noHeader.parse(data) + '\n';
    }

    if (this.buffer.length + transformedData.length >= this.maxBufferlength) {
      this.push(this.buffer);
      this.buffer = '';
    }
    this.buffer += transformedData;
    callback();
  }

  _flush(callback: TransformCallback): void {
    this.push(this.buffer);
    callback();
  }
}
