import { BulkLoadStream } from './bulk-load-stream';
import { WriteStream } from 'fs';
import { EventEmitter } from 'events';

describe('BulkLoadStream', () => {
  let streamMock: WriteStream & EventEmitter;
  let clientMock: { release: jest.Mock };

  beforeEach(() => {
    // Mock WriteStream as EventEmitter with spies
    streamMock = new EventEmitter() as WriteStream & EventEmitter;
    streamMock.write = jest.fn();
    streamMock.end = jest.fn();
    streamMock.destroy = jest.fn();

    clientMock = {
      release: jest.fn(),
    };
  });

  it('should initialize correctly', () => {
    const bulkLoadStream = new BulkLoadStream(streamMock, clientMock, ',', false);

    expect(bulkLoadStream['hasWritten']).toBe(false);
    expect(bulkLoadStream['status']).toBe('Writing');
    expect(typeof bulkLoadStream.finished.then).toBe('function');
    expect(bulkLoadStream['delimiter']).toBe(',');
  });

  it('should write object with delimiter', () => {
    const bulkLoadStream = new BulkLoadStream(streamMock, clientMock, ',', false);

    const testObj = { a: '1', b: '2', c: '3' };

    bulkLoadStream.writeObject(testObj);

    expect(streamMock.write).toHaveBeenCalledWith('1,2,3');
    expect(bulkLoadStream['hasWritten']).toBe(true);
  });

  it('should handle null values with nullChar', () => {
    const bulkLoadStream = new BulkLoadStream(streamMock, clientMock, ',', false);

    const testObj = { a: null, b: 'value' };

    bulkLoadStream.writeObject(testObj);

    expect(streamMock.write).toHaveBeenCalledWith(`${BulkLoadStream.nullChar},value`);
  });

  it('should write newline after first object', () => {
    const bulkLoadStream = new BulkLoadStream(streamMock, clientMock, ',', false);

    const obj1 = { a: 'one' };
    const obj2 = { a: 'two' };

    bulkLoadStream.writeObject(obj1);
    bulkLoadStream.writeObject(obj2);

    expect(streamMock.write).toHaveBeenNthCalledWith(1, 'one');
    expect(streamMock.write).toHaveBeenNthCalledWith(2, '\n');
    expect(streamMock.write).toHaveBeenNthCalledWith(3, 'two');
  });

  it('should call complete and end stream', async () => {
    const bulkLoadStream = new BulkLoadStream(streamMock, clientMock, ',', false);

    bulkLoadStream.complete();

    expect(streamMock.end).toHaveBeenCalled();
  });

  it('should update status and release client on finish', async () => {
    const bulkLoadStream = new BulkLoadStream(streamMock, clientMock, ',', false);

    // Simulate finish event
    streamMock.emit('finish');

    expect(bulkLoadStream.status).toBe('Complete');
    expect(clientMock.release).toHaveBeenCalled();
    expect(streamMock.destroy).toHaveBeenCalled();
  });

  it('should set status to Error on stream error', async () => {
    const bulkLoadStream = new BulkLoadStream(streamMock, clientMock, ',', false);

    const errorHandler = jest.fn();

    bulkLoadStream.finished.catch(errorHandler);

    const errorMsg = 'Test error';
    streamMock.emit('error', new Error(errorMsg));

    // Wait for promise to settle
    await expect(bulkLoadStream.finished).rejects.toBe(errorMsg);
  });

});
