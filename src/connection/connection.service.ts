import { DataSource, EntityManager } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConnectionService {
  private static dataSource: DataSource;
  private static entityManager: EntityManager;

  constructor(
    private readonly entityManager: EntityManager,
    private readonly dataSource: DataSource
  ) {}

  onApplicationBootstrap() {
    ConnectionService.entityManager = this.entityManager;
    ConnectionService.dataSource = this.dataSource;
  }

  static getEntityManager() {
    return ConnectionService.entityManager;
  }

  static getDataSource() {
    return ConnectionService.dataSource;
  }
}
