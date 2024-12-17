import { EntityManager } from "typeorm";
import { Inject, Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { VIEW_NAME } from "./check-catalog.constants";

interface CheckItem {
  code: string;
  message: string;
  plugins: string[];
}

type FormattedValues = Record<string, string>;

@Injectable()
export class CheckCatalogService implements OnApplicationBootstrap {
  private static checkCatalog: CheckItem[] = [];

  constructor(
    private readonly entityManager: EntityManager,
    @Inject(VIEW_NAME) private readonly viewName: string
  ) {}

  async onApplicationBootstrap() {
    await this.load();
  }

  async getViewData() {
    return await this.entityManager.query(`SELECT * FROM ${this.viewName}`);
  }

  async load() {
    const results = await this.getViewData();
    CheckCatalogService.checkCatalog = results.map((item: { resultMessage: string; checkTypeCode: any; checkNumber: any; resultCode: any; }) => {
      const parts = item.resultMessage.split("[").filter((part) => part.includes("]"));
      return {
        code: `${item.checkTypeCode}-${item.checkNumber}-${item.resultCode}`,
        message: item.resultMessage,
        plugins: parts.map((part) => part.split("]")[0]),
      };
    });
  }

  static formatResultMessage(code: string, values: FormattedValues = {}): string {
    const result = CheckCatalogService.checkCatalog.find((item) => item.code === code);

    if (!result) {
      return `[${code}]`;
    }

    const message = `[${code}] - ${result.message}`;
    const plugins = result.plugins;

    return CheckCatalogService.formatMessage(message, values, plugins);
  }

  static formatMessage(message: string, values: FormattedValues = {}, plugins: string[] = []): string {
    plugins.forEach((plugin) => {
      const fieldname = CheckCatalogService.getFieldnameFromPlugin(plugin);
      const value = values[fieldname] ?? 'N/A';
      message = message.replace(`[${plugin}]`, `[${value}]`);
    });

    return message;
  }

  static getFieldnameFromPlugin(plugin: string) {
      const parts = plugin.replace(/[-|_|\/]/g, ' ').split(' ');

      return parts
        .map((p, i) => {
          if (i === 0) return p.toLowerCase();
          return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
        })
        .join('');
  }
}
