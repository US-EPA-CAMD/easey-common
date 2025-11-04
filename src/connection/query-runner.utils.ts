import { DataSource, EntityManager } from 'typeorm';

/**
 * Executes a database operation using a slave (read replica) connection
 * @param dataSource - The TypeORM DataSource instance
 * @param operation - The database operation to execute
 * @returns The result of the operation
 */
export async function withSlaveConnection<T>(
  dataSource: DataSource,
  operation: (entityManager: EntityManager) => Promise<T>,
): Promise<T> {
  const queryRunner = dataSource.createQueryRunner('slave');
  await queryRunner.connect();
  try {
    return await operation(queryRunner.manager);
  } finally {
    await queryRunner.release();
  }
}

/**
 * Executes a database operation using a master (read-write) connection
 * @param dataSource - The TypeORM DataSource instance
 * @param operation - The database operation to execute
 * @returns The result of the operation
 */
export async function withMasterConnection<T>(
  dataSource: DataSource,
  operation: (entityManager: EntityManager) => Promise<T>,
): Promise<T> {
  const queryRunner = dataSource.createQueryRunner('master');
  await queryRunner.connect();
  try {
    return await operation(queryRunner.manager);
  } finally {
    await queryRunner.release();
  }
}
