import { DataSource, EntityManager } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConnectionService {
  private static readonly dataSource: DataSource;
  private static readonly entityManager: EntityManager;

  constructor(
    readonly entityManager: EntityManager,
    readonly dataSource: DataSource
  ) {
    this.dataSource = dataSource;
    this.entityManager = entityManager;
  }

  static getEntityManager() {
    return this.entityManager;
  }

  static getDataSource() {
    return this.dataSource;
  }
}
