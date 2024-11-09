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

    let message = `[${code}] - ${result.message}`;
    const plugins = result.plugins;

    message = CheckCatalogService.formatMessage(message, {
      stackPipeId: values.stackPipeId ?? 'N/A',
      orisCode: values.orisCode ?? 'N/A',
      systemID: values.systemID ?? 'N/A',
      unadjustedHrlyValue: values.unadjustedHrlyValue ?? 'N/A',
      sampleMethod: values.sampleMethod ?? 'N/A',
      ...values,
    }, plugins);

    return message;
  }

  static formatMessage(message: string, values: FormattedValues, plugins: string[]): string {
    plugins.forEach((plugin) => {
      const fieldname = CheckCatalogService.getFieldnameFromPlugin(plugin);
      const value = values[fieldname] ?? 'N/A';
      message = message.replace(`[${plugin}]`, `[${value}]`);
    });

    return message;
  }

  static getFieldnameFromPlugin(plugin: string): string {
    const specialCases: { [key: string]: string } = {
      "Stack Pipe ID": "stackPipeId",
      "SystemID": "systemID",
      "ORIS Code": "orisCode",
      "UNADJUSTED_HRLY_VALUE": "unadjustedHrlyValue",
      "SAMPLE-METHOD": "sampleMethod",
      "Stack/Pipe ID": "stackPipeId",
    };

    return specialCases[plugin] || plugin.toLowerCase();
  }
}
