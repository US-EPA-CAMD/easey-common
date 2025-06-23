import { BulkLoadService } from './bulk-load.service';
import { ConfigService } from '@nestjs/config';
import BulkLoadStream from './bulk-load-stream';
import { QueryRunner } from 'typeorm';
import { EventEmitter } from 'events';

jest.mock('pg-pool', () => {
  return jest.fn().mockImplementation(() => ({
    connect: jest.fn(),
  }));
});

jest.mock('pg-copy-streams', () => ({
  from: jest.fn((sql: string) => sql), // simulate from(...) just returning SQL
}));

jest.mock('./bulk-load-stream');

describe('BulkLoadService', () => {
  let service: BulkLoadService;
  let configServiceMock: ConfigService;
  let poolMock: any;
  let clientMock: any;

  beforeEach(() => {
    configServiceMock = {
      get: jest.fn((key: string) => {
        switch (key) {
          case 'database.host':
            return 'localhost';
          case 'database.user':
            return 'test-user';
          case 'database.name':
            return 'test-db';
          case 'database.pwd':
            return 'test-password';
          case 'database.port':
            return 5432;
          case 'app.bulkLoadMaxPoolSize':
            return 10;
          default:
            return undefined;
        }
      }),
    } as unknown as ConfigService;

    const Pool = require('pg-pool');
    poolMock = new Pool();
    poolMock.connect = jest.fn();

    service = new BulkLoadService(configServiceMock);
    service['pool'] = poolMock;

    clientMock = {
      query: jest.fn(), // to be customized in tests
      release: jest.fn(),
    };

    poolMock.connect.mockResolvedValue(clientMock);

    (BulkLoadStream as unknown as jest.Mock).mockImplementation(() => {
      return {
        someMockedStream: true,
      };
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should start bulk loader without columns', async () => {
    const mockStream = new EventEmitter();
    clientMock.query = jest.fn().mockReturnValue(mockStream);

    const result = await service.startBulkLoader('schema.table');

    expect(poolMock.connect).toHaveBeenCalled();
    expect(clientMock.query).toHaveBeenCalledWith(
      expect.stringContaining(`COPY schema.table `)
    );

    expect(BulkLoadStream).toHaveBeenCalledWith(
      mockStream,
      clientMock,
      ',',
      false
    );

    expect(result).toEqual({ someMockedStream: true });
  });

  it('should start bulk loader with columns', async () => {
    const mockStream = new EventEmitter();
    clientMock.query = jest.fn().mockReturnValue(mockStream);

    const columns = ['col1', 'col2', 'col3'];

    const result = await service.startBulkLoader('schema.table', columns, '|');

    expect(poolMock.connect).toHaveBeenCalled();
    expect(clientMock.query).toHaveBeenCalledWith(
      expect.stringContaining(`COPY schema.table ("col1","col2","col3")`)
    );
    expect(clientMock.query).toHaveBeenCalledWith(
      expect.stringContaining(`DELIMITER '|'`)
    );

    expect(BulkLoadStream).toHaveBeenCalledWith(
      mockStream,
      clientMock,
      '|',
      false
    );

    expect(result).toEqual({ someMockedStream: true });
  });

  it('should use queryRunner connection if provided', async () => {
    const mockStream = new EventEmitter();
    clientMock.query = jest.fn().mockReturnValue(mockStream);

    const queryRunnerMock = {
      connect: jest.fn().mockResolvedValue(clientMock),
    } as unknown as QueryRunner;

    const result = await service.startBulkLoader(
      'schema.table',
      undefined,
      ',',
      queryRunnerMock
    );

    expect(queryRunnerMock.connect).toHaveBeenCalled();
    expect(poolMock.connect).not.toHaveBeenCalled();

    expect(BulkLoadStream).toHaveBeenCalledWith(
      mockStream,
      clientMock,
      ',',
      true
    );

    expect(result).toEqual({ someMockedStream: true });
  });
});
