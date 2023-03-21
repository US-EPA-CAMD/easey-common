import { getManager } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CheckCatalogService {
  private static checkCatalog = [];

  static async getViewData(viewName: string) {
    return await getManager().query(`SELECT * FROM ${viewName}`);
  }

  static async load(viewName: string) {
    const results = await CheckCatalogService.getViewData(viewName);
    CheckCatalogService.checkCatalog = results.map((i) => {
      const parts = i.resultMessage.split("[").filter((i) => i.includes("]"));
      return {
        code: `${i.checkTypeCode}-${i.checkNumber}-${i.resultCode}`,
        message: i.resultMessage,
        plugins:
          parts && parts.length > 0 ? parts.map((i) => i.split("]")[0]) : [],
      };
    });
  }

  static formatMessage(message: string, values?: {}, plugins?: string[]) {
    if (!plugins || (plugins && plugins.length === 0)) {
      const parts = message.split("[").filter((i) => i.includes("]"));
      plugins =
        parts && parts.length > 0 ? parts.map((i) => i.split("]")[0]) : [];
    }

    if (plugins && values) {
      plugins.forEach((plugin: string) => {
        let i = plugin;
        const regex = /[-|_|\/]/g;

        if (i.match(regex)) {
          i = i.replace(regex, ' ');
        }

        const parts = i.split(" ");
        let fieldname = `${parts[0].charAt(0).toLowerCase()}${parts[0].slice(1)}`;

        if (parts.length > 1) {
          parts.forEach((p: string, index: number) => {
            if (index === 0) {
              fieldname = fieldname.toLowerCase();
            } else {
              fieldname += `${p.charAt(0).toUpperCase()}${p.slice(1).toLowerCase()}`;
            }
          });
        }

        message = message.replace(`[${plugin}]`, `[${values[fieldname]}]`);
      });
    }

    return message;
  }

  static formatResultMessage = (code: string, values?: {}): string => {
    const result = CheckCatalogService.checkCatalog.find(
      (i) => i.code === code
    );
    const message = `[${code}] - ${result.message}`;
    return CheckCatalogService.formatMessage(message, values, result.plugins);
  };
}
