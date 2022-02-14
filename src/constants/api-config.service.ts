import { Injectable } from "@nestjs/common";
//
@Injectable()
export class ApiConfigService {
  public static getHostMDM(): string {
    const host = process.env.EASEY_MDM_API_HOST || "localhost";

    if (host === "localhost") {
      const port = process.env.EASEY_MDM_API_PORT || 8050;
      return `localhost:${port}`;
    }
    return host;
  }

  public static getHostAccount() {
    const host = process.env.EASEY_ACCOUNT_API_HOST || "localhost";

    if (host === "localhost") {
      const port = process.env.EASEY_ACCOUNT_API_PORT || 8030;
      return `localhost:${port}`;
    }
    return host;
  }

  public static getHostFacilities() {
    const host = process.env.EASEY_FACILITIES_API_HOST || "localhost";

    if (host === "localhost") {
      const port = process.env.EASEY_FACILITIES_API_PORT || 8020;
      return `localhost:${port}`;
    }
    return host;
  }

  public static getMdm(): string {
    return `https://${this.getHostMDM()}/master-data-mgmt/`;
  }

  public static getFacApi(): string {
    return `https://${this.getHostFacilities()}/facilities-mgmt/`;
  }

  public static getAcctApi(): string {
    return `https://${this.getHostAccount()}/account-mgmt/`;
  }
}
