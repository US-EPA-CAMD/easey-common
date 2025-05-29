
import { Controller, Get } from '@nestjs/common';
import {
    HealthCheck,
    HealthCheckService,
    TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import {Logger} from "../logger";

@Controller()
export class HealthController {
    constructor(
        private readonly logger: Logger,
        private health: HealthCheckService,
        private db: TypeOrmHealthIndicator,
    ) {}

    /*@Get()
    @HealthCheck()
    check() {
        return this.health.check([
            () => this.db.pingCheck('database'),
        ]);
    }*/

    @Get()
    @HealthCheck()
    async check() {
        this.logger.log('Cloud.gov health check initiated...');

        // Log any relevant environment variables that might influence health checks
        // Example: this.logger.log(`SOME_HEALTH_CHECK_URL_ENV_VAR: ${this.configService.get('SOME_HEALTH_CHECK_URL_ENV_VAR')}`);

        try {
            const result = await this.health.check([
                () => this.db.pingCheck('database').catch(dbError => {
                    this.logger.error('TypeORM pingCheck itself failed during health check:', dbError.stack);
                    throw dbError;
                }),
            ]);
            this.logger.log('Health check completed successfully on cloud.gov.');
            return result;
        } catch (error) {
            this.logger.error(`Error during health check on cloud.gov: ${error.message}`, error.stack);
            if (error.isAxiosError) { // Check if it's an AxiosError
                this.logger.error('AxiosError details:');
                if (error.config) {
                    this.logger.error(`  URL: ${error.config.url}`);
                    this.logger.error(`  Method: ${error.config.method}`);
                    this.logger.error(`  Headers: ${JSON.stringify(error.config.headers)}`);
                    this.logger.error(`  Data: ${JSON.stringify(error.config.data)}`);
                }
                if (error.response) {
                    this.logger.error(`  Response Status: ${error.response.status}`);
                    this.logger.error(`  Response Headers: ${JSON.stringify(error.response.headers)}`);
                    this.logger.error(`  Response Data: ${JSON.stringify(error.response.data)}`);
                }
            }
            throw error; // Re-throw so cloud.gov marks it as unhealthy
        }
    }
}