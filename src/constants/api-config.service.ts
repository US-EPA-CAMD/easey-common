import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiConfigService {
  private static getHost(apiName: string, defaultPort: number) {
    const host =
      process.env.EASEY_API_GATEWAY_HOST ||
      process.env[`EASEY_${apiName}_API_HOST`] ||
      "localhost";

    if (host === "localhost") {
      const port = +process.env[`EASEY_${apiName}_API_PORT`] || defaultPort;
      return `http://localhost:${port}`;
    }

    return `https://${host}`;
  }

  public static getMasterDataApi(): string {
    const host = this.getHost("MDM", 8050);
    return `${host}/master-data-mgmt/`;
  }

  public static getFacilitiesApi(): string {
    const host = this.getHost("FACILITIES", 8020);
    return `${host}/facilities-mgmt/`;
  }

  public static getAccountApi(): string {
    const host = this.getHost("ACCOUNT", 8030);
    return `${host}/account-mgmt/`;
  }

  public static getEmissionsApi(): string {
    const host = this.getHost("EMISSIONS", 8040);
    return `${host}/emissions-mgmt`;
  }

  public static getDbHealthTimeout(): number {
    return Number(process.env.EASEY_DB_HEALTH_TIMEOUT) || 300000;
  }
}
