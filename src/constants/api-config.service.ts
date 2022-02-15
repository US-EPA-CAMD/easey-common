import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiConfigService {

  private static getHost(apiName: string, defaultPort: number) {
    const host = 
      process.env[`EASEY_${apiName}_API_HOST`] ||
      process.env.EASEY_API_GATEWAY_HOST ||
      "localhost";

    if (host === "localhost") {
      const port = +process.env[`EASEY_${apiName}_API_PORT`] || defaultPort;
      return `localhost:${port}`;
    }

    return host;
  }

  public static getMasterDataApi(): string {
    const host = this.getHost('MDM', 8050);
    return `https://${host}/master-data-mgmt/`;
  }

  public static getFacilitiesApi(): string {
    const host = this.getHost('FACILITIES', 8020);
    return `https://${host}/facilities-mgmt/`;
  }

  public static getAccountApi(): string {
    const host = this.getHost('ACCOUNT', 8030);
    return `https://${host}/account-mgmt/`;
  }
}
