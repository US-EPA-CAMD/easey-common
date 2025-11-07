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

/**
 * Executes a database operation using a slave (read replica) connection
 * with a repository instance.
 * 
 * @param dataSource - The TypeORM DataSource instance
 * @param repositoryClass - The repository class to instantiate with the query runner's manager
 * @param callback - The function that receives the repository instance and performs operations
 * @returns The result of the callback
 */
export async function useSlaveRepository<T>(
  dataSource: DataSource,
  repositoryClass: new (repoInstance) => T,
  callback: (repository: T) => Promise<any>,
):Promise<any> {
  const queryRunner = dataSource.createQueryRunner('slave');
  await queryRunner.connect();
  try {
    const repo = new repositoryClass(queryRunner.manager);
    return  await callback(repo);
  } finally {
    await queryRunner.release();
  }
}
