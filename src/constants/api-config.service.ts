import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiConfigService {
  public static getHostEmissions(): string {
    const host = process.env.EASEY_EMISSIONS_API_HOST || "localhost";

    if (host === "localhost") {
      const port = process.env.EASEY_EMISSIONS_API_PORT || 8080;
      return `localhost:${port}`;
    }
    return host;
  }

  public static getHostAccount() {
    const host = process.env.EASEY_ACCOUNT_API_HOST || "localhost";

    if (host === "localhost") {
      const port = process.env.EASEY_ACCOUNT_API_PORT || 8080;
      return `localhost:${port}`;
    }
    return host;
  }

  public static getMdm(): string {
    return `https://${this.getHostEmissions()}/api/master-data-mgmt/`;
  }

  public static getFacApi(): string {
    return `https://${this.getHostEmissions()}/api/facility-mgmt/`;
  }

  public static getAcctApi(): string {
    return `https://${this.getHostAccount()}/api/account-mgmt/`;
  }
}
